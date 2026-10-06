# PR3 notes: practice-item repair round 3 (39 rows, rp24 to rp30)

Source: .repro/coverage/practice-audit-F.md. Started from the current fast/content files. Every row is applied unless a line says otherwise; variants are named. No keyed answer changed and no item id changed. Check: python3 .repro/fast_check.py --ws PR3 --topics rp24,rp25,rp26,rp27,rp28,rp29,rp30 --build gives ok on every line except the visual-pointer lines (no visual / no media / share of items that pin a visual), and that set of lines is identical on the untouched fast/content (compared line by line before and after).

## rp24 (8 rows)
- rp24q02 e (E-cadherin loss does not explain bilaterality): applied as written.
- rp24q05 option, w, et row and e (straw-man tumor estrogen): applied as written. The new option "An estrogen-secreting granulosa cell tumor of the ovary" and its note use a fact that rp15 teaches (a granulosa cell tumor makes estrogen), not rp24; the row asks for it, so it is kept and flagged in the report.
- rp24q07 e and bl (Paget cells and invasive carcinoma): applied as written.
- rp24q11 e, w["BRCA1"] and et cell (triple-negative is a finding in women): applied as written.
- rp24r05 q (best prognosis among types): applied as written.
- rp24r07 w["Raloxifene"] (breast antagonism and bone agonism): applied as written.
- rp24r09 q (without distant metastasis): applied as written.
- rp24r14 q (breast carcinoma pattern): applied as written.

## rp25 (7 rows)
- rp25q06 et cell ("Should fall below the prepregnancy value"): applied as written.
- rp25q06 w["It is falsely raised by the expanded plasma volume"]: applied as written. Not touched because the row names only the w note: e still says plasma expansion "dilutes solutes", and the et cells "Dilution would lower it" and "Dilution lowers concentrations" stay.
- rp25q11 pt.hl (["Drives insulin resistance", "Rises with placental mass"]): applied as written; each label matches exactly one label of rp25_hormones.
- rp25r07 w["First postpartum week"]: applied as written.
- rp25r08 q ("pulmonary measure"): applied as written.
- d_rp25_sort item "Total T4" why (free T4 level stays normal): applied as written.
- rp25 all 24 items (semicolon fields): applied. 78 fields split at the semicolon with the next word capitalized (hCG and hPL kept as written), plus the q06 w note that the row above had already rewritten, which makes the 79 the row counts. Two variants: rp25q08 w["Suppressed maternal cell-mediated immunity"] is joined as "..., but the dilated ureters and stagnant urine are." because the part after the semicolon is elliptical; rp25r06 w["It doubles"] reads "Instead, pressure reaches ..." (a comma added). No fact, number, option text or key changed.

## rp26 (4 rows)
- rp26q05 et cell ("Another mole"): applied as written.
- rp26r03 w["Topoisomerase II"] (etoposide used for testicular and small cell lung cancer): applied as written.
- rp26r07 (the 7 mm rule): applied with a variant. The orchestrator's brief set the framing: no heartbeat means loss only at a crown-rump length of 7 mm or more, a smaller embryo is rescanned, and the pt already points at the figure label "No heartbeat at crown-rump 7 mm+:" (lesson rp26 body[5] table teaches the same). So q reads "What does absent cardiac activity in an embryo with a crown-rump length of 7 mm or more indicate on transvaginal ultrasound?", not the row's "had a heartbeat on an earlier scan" wording. The row's option swap is applied as written ("Threatened abortion" replaces "A normal finding that needs no repeat scan", with the row's w note adjusted to "An embryo of 7 mm or more with no heartbeat has died"). x says the embryo has died at 7 mm or more and a smaller embryo is rescanned. The w notes of "Ectopic pregnancy" and "Complete molar pregnancy" no longer say "visible embryo" (now "an embryo of this size" and "an embryo of 7 mm or more"). Key, pt and the other w note unchanged.
- d_rp26_multi item "Visible embryo with no heartbeat": applied with a variant. The item text is now "Embryo of 7 mm or more with no heartbeat" and the why is "An embryo with a crown-rump length of 7 mm or more should show a heartbeat, so none means it has died and the pregnancy is a loss. A smaller embryo is rescanned first.", so the drill teaches the same rule as rp26r07 and the lesson table, instead of the row's vaguer "old enough to show a heartbeat". Column unchanged.

## rp27 (5 rows)
- rp27q03 e (remodeled only shallowly): applied as written.
- rp27q04 w["Vasa previa"] (no claim about intact membranes): applied as written.
- rp27q04 pt.hl (["Placenta previa", "Placenta covers the os"]): applied as written; each matches one label of rp27_bleeding.
- rp27r08 pt.hl (["Placenta previa", "Placenta covers the os"]): applied as written.
- rp27r12 w["12 weeks"] (ACOG 2024): applied with one variant. The note says "As of 2025, ACOG's 2024 update allows skipping it after a miscarriage or abortion, but it is still given for an ectopic or molar pregnancy" (time-bound wording as rp26 body[8]). The doses (50 mcg before 12 weeks, 300 mcg from 12 weeks) are not added because lesson rp27 does not teach them; rp26 does.

## rp28 (4 rows)
- rp28q02 et cells ("Adequate" and "Slow, before 6 cm"): applied as written.
- rp28q04 e and w["Intravenous oxytocin infusion"] (very low Bishop score, no number): applied as written.
- rp28q10 et cell ("An add-on; does not restore tone"): applied as written.
- rp28 all 31 items (semicolon fields): applied. 122 fields split at the semicolon, all with a full clause after it. One variant: rp28q02 e reads "..., so the power is not the problem, but the baby or the pelvis is, and that usually means a cesarean delivery." (the part after the semicolon is elliptical). Includes the stem of q01, and pt.say of q10 and q11. No fact, number, option text or key changed.

## rp29 (6 rows)
- rp29q01 e (clitoral enlargement also stays; the other changes offered here need continued testosterone): applied as written.
- rp29q04 l ("change in her regimen"): applied as written.
- rp29q11 e (a pregnancy is possible, so it covers the partners, practices and pregnancy parts): applied as written.
- rp29r02 w["It inhibits aromatase in fat"]: applied as written.
- rp29r07 x ("when gametes are healthiest"): applied as written.
- rp29 all 22 items (semicolon fields): applied. 67 fields split at the semicolon, every one with a full clause after it, including the q08 stem and the pt.say of q01 and r10. No fact, number, option text or key changed.

## rp30 (5 rows)
- rp30q09 pt.hl (["ACE inhibitors, ARBs", "Renal failure, oligohydramnios, lung hypoplasia"]): applied as written; each matches one label of rp30_signatures.
- rp30r01 w["40 days and subtract 3 months"] (33 days): applied as written.
- rp30r06 q, option and w (closed neural tube defect replaces the straw man): applied as written; x and pt unchanged.
- d_rp30_multi item "Thymic hypoplasia": applied as written (item deleted).
- d_rp30_multi items "Enamel hypoplasia" and "Neonatal bleeding from vitamin K deficiency": applied as written (vitamin K item deleted; enamel item replaced by "Drug laid down with calcium in forming teeth", column tet). The drill now has 19 items: ace 3, war 3, alc 3, ptn 2, lit 2, tha 2, tet 2, iso 2.

## Seen, not changed (outside the rows)
- rp26q09 still says "No heartbeat in a visible embryo" (option, e first sentence, bl). Its stem documents a heartbeat 2 weeks ago, so the key holds, but the phrase repeats the shortcut that rp26r07 now avoids.
- rp27 lesson body[27] says anti-D is given "within 72 hours of delivering an Rh-positive baby or of any bleeding event"; rp26 body[8] limits that before 12 weeks (ACOG 2024).
