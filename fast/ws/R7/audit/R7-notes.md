# R7 notes: repair round 7 (P3.V run 4, token f970909cd5)

Source: .repro/verify/P3-report.md. Every file started from its current fast/content version. Block numbers (bN) are the 0-based body indices of the files as they now stand (rp18 gained two rows from paragraph splits; the other topics kept their row counts). Check: `python3 .repro/fast_check.py --ws R7 --topics rp18,rp15,rp10,rp30,rp23,rp4 --build` prints only `ok` lines. Rendered at 1280 and 400 px with the real fonts: no horizontal overflow, no page errors, glossary links compared before and after (only two new links, both fitting: rp18 "reverse transcriptase" in the new HIV table row, rp15 "Reinke crystals").

## rp18
- HIV in the TORCH list (b1, glossary rp18_torch, new last row of the agent table b3): the list now ends "herpes simplex and HIV", and the exception sentence reads "Herpes and HIV are the exceptions, because most neonatal herpes is caught during birth, and most mother-to-child HIV transmission also happens around delivery" (matches the routes figure, which already puts HIV on the delivery side).
- Infant picture of HIV (b25, the blood-borne virus paragraph in the delivery section, split from the HPV paragraph b24): "often well at birth, then shows failure to thrive and has recurrent bacterial and viral infections, Pneumocystis pneumonia and chronic diarrhea", with routes (around delivery, placenta, breast milk) and one sentence that maternal antiretroviral treatment greatly lowers the risk.
- CMV (b7 split into b7 toxoplasma and b8 CMV): maternal picture "no symptoms, or a mononucleosis-like illness with a negative heterophile (Monospot) test", and seizures added to the neonatal findings.
- VZIG (b11): "therefore" removed; "VZIG mainly prevents severe maternal varicella and pneumonia, and whether it protects the fetus is unproven" (CDC).
- Hepatitis B (b25): "Without this prophylaxis, most newborns of HBeAg-positive mothers are infected, and about 90 percent of infected newborns become chronic carriers." Tied to HBeAg-positive mothers because the previous sentence names them as the highest-risk group; transmission from HBeAg-negative mothers is lower, so "most exposed newborns" would overstate it.
- Saber shins defined "(forward-bowed tibias)" (b17); granulomatosis infantiseptica defined "with widespread granulomas and microabscesses in the fetal organs" (b28).
- Fetal middle cerebral artery Doppler clause dropped from the parvovirus paragraph (b12).
- Consequence outside the lesson: question rp18q12 pt.say said VZIG "helps prevent" limb hypoplasia and scars, which now contradicts b11. Only that say-line was reworded (limb hypoplasia and scars "mark fetal injury, while varicella-zoster immune globulin mainly protects the mother"); hl unchanged.

## rp15
- b23: "Up to about a quarter of ovarian cancers are hereditary, most from germline BRCA1 or BRCA2 mutations." The next sentence was reworded to "BRCA carriers have the highest risk, and their cancers are almost always high-grade serous carcinoma" so the BRCA claim is not stated twice.
- Glossary rp15_folcyst: "one to three cycles" (matches b1).
- b31: granulosa cell tumor "is the most common malignant sex cord-stromal tumor, and it makes estrogen"; Sertoli-Leydig "Its Leydig cells may contain Reinke crystals, rod-shaped protein crystals" (glossary popup rp20reinke now links there).

## rp10 figure rp10_pitfalls
- Liver row mechanism label (two lines, 14 px, the lines end at x=482 and x=512, inside the box edge at 572): "Ethinyl estradiol (pill, patch or ring)" / "raises clotting factors such as fibrinogen". Rendered at 1280 (median glyph 10.5 px) and 400 light and dark; probe reports no overlap or clipping.
- Same figure: caption and aria-label now say "ethinyl estradiol" where they said "estrogen" for the clotting claim, so nothing in the figure reads as covering transdermal estradiol (rp11 b27, rp29 b5).
- pt.hl: no question or rapid item highlights the old label (grep of fast/content/questions and rapid; rp10r03 highlights "Venous thromboembolism"). rapid rp10r03 pt.say said "by any route of delivery"; reworded to "the ethinyl estradiol of the pill, patch or ring raising the liver's clotting factors such as fibrinogen". hl unchanged.

## rp30
- Teratogen table (b26): ACE inhibitors add "hypocalvaria (skull hypoplasia)"; warfarin adds "eye defects and fetal loss"; isotretinoin adds "thymic". Maternal PKU adds "growth restriction" (b30). Antiseizure drugs (b28, first sentence): "Antiseizure drugs as a group also raise the risk of cardiac defects and cleft lip and palate, and phenytoin causes hypoplastic nails and distal phalanges"; the lithium sentence follows. Worded as a raised risk for the group, without ranking drugs.
- b2: "A first-trimester date is not changed later."
- Pretest 1: the fundal height option was replaced by "Abdominal circumference at 28 weeks" (an ultrasound measurement), with a new why-not note (varies with nutrition and growth; used for fetal weight and growth restriction, dates poorly). Fundal height stays taught in b7.

## rp23
- Fat necrosis: b19 "On biopsy, foamy macrophages and multinucleated giant cells surround the dead fat cells"; table row and glossary rp23_fn name multinucleated giant cells too.
- Intracanalicular and pericanalicular patterns were already one sentence in b11 (kept as is). The tuberous breast was already one short sentence in b25; it is now plain: "a developmental deformity in which a constricted base leaves the breast tube-shaped and tissue herniates into the areola, which looks enlarged".

## rp4
- b36: "Four further terms describe where and how far development was disturbed" (field defect, agenesis, aplasia, hypoplasia).
- Glossary rp4_crest now lists skull and facial bones and the aorticopulmonary septum, matching the germ-layer table (b11) and the isotretinoin row in rp30.

## Seen, not changed (outside the task)
- rp15: Schiller-Duval bodies are linked twice (rp15_sd in b30, rp20schiller at its next mention, in the b35 table) because two glossary keys share the title; the verifier called it optional and the task list did not include it.
- rp4 b35 and b36 (birth-defect patterns and terms) sit under the heading "What does amniotic fluid tell you?"; a heading of their own would fit better.
- rp18 question rp18q05 uses the fetal middle cerebral artery velocity in its stem, explanation and table; the lesson no longer teaches that Doppler (task: Step 2), so the question may want the finding moved out of the stem.
- Palace pal_rp18_torch is built on the letters T O R C H and does not mention HIV (a mnemonic board; not owned).
