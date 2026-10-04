#!/usr/bin/env python
"""serve.py -- the dev server for The Repro-Endo Path (port 8744, 127.0.0.1 only).

Why not `python -m http.server`: on this machine it closes the socket after large
responses and Windows drops the unsent tail, so a 2 MB page arrives truncated about
one load in three (ERR_CONNECTION_RESET, then `QS is not defined`). This server speaks
HTTP/1.1 with Content-Length and keep-alive, writes the whole body with sendall(), and
lets the CLIENT close the connection. PLAN-2 (the cardio build) hit and fixed the same
problem; this is the same fix.

  python serve.py            serve C:\\Users\\varsh\\repro-endo-path on http://127.0.0.1:8744/
  python serve.py --root <dir> --port <n>

Launch it in the background from the orchestrator session (a subagent's background
processes die when the subagent returns). Never bind to 0.0.0.0.
"""
from __future__ import annotations

import http.server
import os
import socketserver
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PORT = 8744


class Handler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        # never cache: the page is rebuilt constantly and a stale copy looks like a bug
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def copyfile(self, source, outputfile):
        data = source.read()
        try:
            outputfile.write(data)
            outputfile.flush()
        except (BrokenPipeError, ConnectionResetError):
            pass

    def log_message(self, fmt, *args):  # quiet
        pass


class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def main(argv):
    root, port = ROOT, PORT
    if "--root" in argv:
        root = Path(argv[argv.index("--root") + 1]).resolve()
    if "--port" in argv:
        port = int(argv[argv.index("--port") + 1])
    os.chdir(root)
    with Server(("127.0.0.1", port), Handler) as httpd:
        print(f"serving {root} on http://127.0.0.1:{port}/ (HTTP/1.1, keep-alive)")
        httpd.serve_forever()


if __name__ == "__main__":
    main(sys.argv[1:])
