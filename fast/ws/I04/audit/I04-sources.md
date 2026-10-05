# I04 image sources (rp23, rp18, rp21)

Checked 2026-10-05 against the Wikimedia Commons API (action=query, prop=imageinfo, extmetadata) with the project
User-Agent, one request at a time. Author, licence name and licence URL below are the values the API returned
(Artist, LicenseShortName, LicenseUrl, or the Content Provider named on the description page when Artist is empty); the
image JSON `by`, `lic`, `licurl` and `srcurl` fields match them. Every licence is CC0, public domain, CC BY or CC BY-SA,
so none is NC/ND. The two CDC PHIL files are marked public domain on Commons and the API returns no licence URL, so
`licurl` is empty and the credit shows the licence name as plain text. The CC0 URL is copied exactly as the API returned it.

Download note: upload.wikimedia.org answered most requests for full-size files with HTTP 429 (Retry-After 603). Five files
were therefore taken from the 1280 px standard thumbnail that the Commons API returned (iiurlwidth=1280, host
thumb.wikimedia.org) for the exact cited title, which is the same picture resized by Wikimedia. rp18_rubella has an original
of only 700 px, so no thumbnail exists; its original was fetched once from upload.wikimedia.org when the limit allowed it.
The 'original px' column is the full-size dimension the API reports for the cited file. Finals are Pillow-re-encoded,
long side at most 1280 px (never enlarged), JPEG quality 85, each far under 2 MB. `mod` is true on all six (resized or
re-encoded). rp18_rubella is below 800 px and carries a KEEP-SMALL row in audit/P4.4.md. Each JPEG was read by eye and
shows the claimed diagnosis.

| key | source page URL | author | licence | licence URL | original px | final px | final bytes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| rp23_fibroadenoma | https://commons.wikimedia.org/wiki/File:Histopathology_of_fibroadenoma_with_variable_gland_compression.jpg | Mikael Häggström, M.D. | CC0 | http://creativecommons.org/publicdomain/zero/1.0/deed.en | 2048x1532 | 1280x957 | 423396 |
| rp23_phyllodes | https://commons.wikimedia.org/wiki/File:Phyllodes_tumour.jpg | Nephron | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 2048x1536 | 1280x960 | 447394 |
| rp18_hutchinson | https://commons.wikimedia.org/wiki/File:Hutchinson_teeth_congenital_syphilis_PHIL_2385.rsh.jpg | CDC/Susan Lindsley | Public domain | (none given; public domain) | 3843x2948 | 1280x982 | 202784 |
| rp18_rubella | https://commons.wikimedia.org/wiki/File:Cataracts_due_to_Congenital_Rubella_Syndrome_(CRS)_PHIL_4284_lores.jpg | CDC (content provider; no Artist field) | Public domain | (none given; public domain) | 700x478 | 700x478 | 21948 |
| rp21_adenoca | https://commons.wikimedia.org/wiki/File:Prostate_adenocarcinoma_intermed_mag_hps.jpg | Nephron | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 4272x2848 | 1280x853 | 350465 |
| rp21_bph | https://commons.wikimedia.org/wiki/File:Nodular_hyperplasia_of_the_prostate.jpg | Nephron | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 3328x2176 | 1280x837 | 416402 |
