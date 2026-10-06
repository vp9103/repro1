# I05 image sources (rp19, rp8, rp3)

Checked 2026-10-06 against the Wikimedia Commons API (action=query, prop=imageinfo, extmetadata) with the project
User-Agent, one request at a time. Author, licence name and licence URL below are the values the API returned
(Artist, LicenseShortName, LicenseUrl); the image JSON `by`, `lic`, `licurl` and `srcurl` fields match them. Every
licence is CC0, public domain, CC BY or CC BY-SA, so none is NC/ND. rp3_lactating is marked public domain on Commons
(category "US slide scan public domain images"; Mikael Haggstrom's own work built on Slide 261 of the Michigan Histology
and Virtual Microscopy Learning Resources, U-M Medical School) and the API returns no licence URL, so `licurl` is empty
and the credit shows the licence name as plain text. The CC0 URL is copied exactly as the API returned it.

Download note: upload.wikimedia.org answered full-size requests with HTTP 429 (Retry-After 600), so every file was taken
from the standard thumbnail that the Commons API returned (iiurlwidth=1280, host thumb.wikimedia.org) for the exact cited
title, which is the same picture resized by Wikimedia. The 1280 px thumbnails are 1280 px wide (the portrait rp19 image is
therefore 1577 px tall, under the 1600 px cap). rp3_lactating has an original of only 1227 px, so no 1280 px thumbnail
exists and the full-size file was also refused (429); it was taken from the 960 px standard thumbnail of the same file
(960 px is still above the 800 px minimum, so no KEEP-SMALL row is needed). The 'original px' column is the full-size
dimension the API reports for the cited file. Finals are Pillow-re-encoded, never enlarged, JPEG quality 85, each far
under 2 MB. `mod` is true on all six (resized or re-encoded). Each JPEG was read by eye and shows the claimed diagnosis.

Audit rows: only audit/P4.1.md (rp3) has rows, two ADJUSTED callouts. rp19 and rp8 needed no ADJUSTED or KEEP-SMALL rows,
so no P4.4.md or P4.2.md is written. Overlays were designed by Gemini through xmodel.py.

| key | source page URL | author | licence | licence URL | original px | final px | final bytes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| rp19_spermatogenesis | https://commons.wikimedia.org/wiki/File:Seminiferous_tubule_and_sperm.jpg | Nephron | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 2312x2848 | 1280x1577 | 356399 |
| rp19_leydig | https://commons.wikimedia.org/wiki/File:Leydig_cells_-_very_high_mag.jpg | Nephron | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 1700x1416 | 1280x1066 | 254119 |
| rp8_graafian | https://commons.wikimedia.org/wiki/File:Graafian_Follicle,_Human_Ovary_(3595010317).jpg | Ed Uthman from Houston, TX, USA | CC BY 2.0 | https://creativecommons.org/licenses/by/2.0 | 1555x1293 | 1280x1064 | 464235 |
| rp8_corpusluteum | https://commons.wikimedia.org/wiki/File:Human_Ovary_with_Fully_Developed_Corpus_Luteum.jpg | Ed Uthman | CC BY-SA 2.0 | https://creativecommons.org/licenses/by-sa/2.0 | 2299x2199 | 1280x1224 | 249757 |
| rp3_acinus | https://commons.wikimedia.org/wiki/File:Normal_breast_acinus.jpg | Mikael Häggström, M.D. | CC0 | http://creativecommons.org/publicdomain/zero/1.0/deed.en | 2048x1532 | 1280x957 | 205469 |
| rp3_lactating | https://commons.wikimedia.org/wiki/File:Histology_of_lactating_breast.jpg | Mikael Häggström, M.D. | Public domain | (none given; public domain) | 1227x837 | 960x655 | 248168 |
