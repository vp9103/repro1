# P3.V coverage checklist (orchestrator, 2026-10-05, token 1228e7e95e)

Every row the coverage review (.repro/coverage/wave1-A.md, wave1-B.md) marked PARTIAL, MISSING or ERROR was fixed by a reopened P3 task
(its audit/P3.<n>.md '2026-10-05 coverage fixes' section names the block). The verifier re-judges EVERY fixed row against the accepted
lesson in content/topics/, the two ERROR rows and the rp26 note, plus the 12 TAUGHT rows below (sampled with random.Random(token) from the 753 TAUGHT rows).

## Fixed rows (all)

| id | review verdict | topic | fixing audit |
|---|---|---|---|
| ANAT-PELVIS-LEC.7 | PARTIAL | rp1 | audit/P3.1.md |
| ANAT-PELVIS-LAB.7 | PARTIAL | rp1 | audit/P3.1.md |
| BP-rp1-07 | PARTIAL | rp1 | audit/P3.1.md |
| ANAT-PERINEUM-LEC.7 | PARTIAL | rp2 | audit/P3.1.md |
| ANAT-EXTGEN-LAB.10 | PARTIAL | rp2 | audit/P3.1.md |
| BICEP-WALSH.19 | PARTIAL | rp5 | audit/P3.1.md, audit/P3.2.md |
| BICEP-WILLIAMS.3 | PARTIAL | rp9 | audit/P3.3.md |
| BICEP-WALSH.12 | PARTIAL | rp9 | audit/P3.3.md |
| BICEP-BROWN.6 | PARTIAL | rp10 | audit/P3.4.md |
| MENOPAUSE.7 | PARTIAL | rp11 | audit/P3.4.md |
| HP-CERVIX-VULVA.9 | PARTIAL | rp13 | audit/P3.5.md |
| HP-UTERUS-OVARY.5 | PARTIAL | rp14 | audit/P3.5.md |
| TBL-STI.1 | PARTIAL | rp16 | audit/P3.5.md, audit/P3.7.md |
| PATHPHARM-MALE.5 | PARTIAL | rp19 | audit/P3.8.md |
| BP-rp19-09 | PARTIAL | rp19 | audit/P3.8.md |
| PATHPHARM-MALE.7 | PARTIAL | rp20 | audit/P3.8.md |
| TBL-BREAST.16 | PARTIAL | rp24 | audit/P3.6.md |
| TRANSGENDER-LEC.3 | PARTIAL | rp29 | audit/P3.4.md |
| BP-rp29-09 | PARTIAL | rp29 | audit/P3.4.md |
| PRENATAL-CARE.6 | PARTIAL | rp30 | audit/P3.9.md |
| PREG-REVIEW.16 | PARTIAL | rp30 | audit/P3.9.md |
| rp11#b22 | ERROR (ACOG first step for postmenopausal bleeding) | rp11 | audit/P3.4.md |
| rp25#b21 | ERROR (gastric emptying in pregnancy; also b26 and the b19 'Gut' row) | rp25 | audit/P3.9.md |
| rp26 RhIG note | currency note (ACOG 2024 update, pregnancy loss before 12 weeks) | rp26 | audit/P3.9.md; orchestrator decision in REPRO-LEDGER.md: keep RhIG after molar evacuation and for ectopic pregnancy |

## TAUGHT sample (12)

| id | topic | review blocks | file |
|---|---|---|---|
| BP-rp30-08 | rp30 | b19, b21 | .repro/coverage/wave1-B.md |
| BP-rp5-05 | rp5 | b8-b9, b12, b14 | .repro/coverage/wave1-A.md |
| BP-rp24-05 | rp24 | b18-b19 | .repro/coverage/wave1-B.md |
| BICEP-WILLIAMS.6 | rp11 | b24, b26-b28, b30, b32, b42 | .repro/coverage/wave1-A.md |
| GTD.1 | rp26 | b24 | .repro/coverage/wave1-B.md |
| BP-rp14-13 | rp14 | b3, b36 | .repro/coverage/wave1-A.md |
| VIRAL-STI-TORCH.2 | rp17 | b1, b3, b5, b24 | .repro/coverage/wave1-B.md |
| BP-rp27-12 | rp27 | b1 | .repro/coverage/wave1-B.md |
| BP-rp20-11 | rp20 | b27 | .repro/coverage/wave1-B.md |
| PHYS-MENSTRUAL.3 | rp8 | b14-b19 | .repro/coverage/wave1-A.md |
| BP-rp3-03 | rp3 | b2-b4, b20 | .repro/coverage/wave1-A.md |
| BP-rp2-01 | rp2 | b1-b4 | .repro/coverage/wave1-A.md |
