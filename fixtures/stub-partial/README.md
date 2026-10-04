# stub-partial fixture (gate-owned; part of the GATE sha)

The engine test bed for REPRO-PLAN.md phase P2. Every body-row kind, question/rapid/drill kind, figure
and overlay kind the engine must render appears here at least once. Build it with a workspace engine:

    python build.py --root fixtures/stub-partial --engine .repro/ws/P2_3/engine --out .repro/runtime/stub.html

This variant adds topic en6 with topic-level content only (no questions, rapid items, drills or images) and no
study-path stage: the state a wave-2 topic is in while it is being built. Every view must still render.
