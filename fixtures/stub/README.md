# stub fixture (gate-owned; part of the GATE sha)

The engine test bed for REPRO-PLAN.md phase P2. Every body-row kind, question/rapid/drill kind, figure
and overlay kind the engine must render appears here at least once. Build it with a workspace engine:

    python build.py --root fixtures/stub --engine .repro/ws/P2_3/engine --out .repro/runtime/stub.html

Images are synthetic (drawn by the planning session, CC0); they test rendering, not recognition.
