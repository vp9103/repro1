# I01 image sources (rp13, rp15, rp24)

Checked 2026-10-04 against the Wikimedia Commons API (action=query, prop=imageinfo, extmetadata) with the project
User-Agent. Author, licence name and licence URL below are the values the API returned; the image JSON `by`, `lic`,
`licurl` and `srcurl` fields match them. Every licence is CC0 or CC BY or CC BY-SA, so none is NC/ND.

Each JPEG was also compared with the 960 px thumbnail Commons serves for the cited file. Mean absolute grey-level
difference was 0.8 to 6.9 on a 0-255 scale for the matching file and 48 to 73 against the other five, so every
file is the cited picture. Finals are resized with the long side at most 1600 px, JPEG quality 85 (luma quantization
table starts 5,3,3,5,7,12), each under 2 MB. `mod` is true on all six.

| key | source page URL | author | licence | licence URL | original px | final px | final bytes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| rp13_cin3 | https://commons.wikimedia.org/wiki/File:CIN_3,_Cervical_Biopsy_(6076642630).jpg | Ed Uthman from Houston, TX, USA | CC BY 2.0 | https://creativecommons.org/licenses/by/2.0 | 1659x1109 | 1280x856 | 345314 |
| rp13_lsil | https://commons.wikimedia.org/wiki/File:Low_grade_squamous_intraepithelial_lesion.jpg | Nephron | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 3220x2096 | 1600x1042 | 126406 |
| rp15_granulosa | https://commons.wikimedia.org/wiki/File:Granulosa_cell_tumour2.jpg | Nephron | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 2048x1536 | 1600x1200 | 546451 |
| rp15_teratoma | https://commons.wikimedia.org/wiki/File:Ovarian_teratoma.jpg | Billie Owens | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 1600x1200 | 1280x960 | 297398 |
| rp24_idc | https://commons.wikimedia.org/wiki/File:Histopathology_of_invasive_ductal_carcinoma,_intermediate_magnification.jpg | Mikael Häggström, M.D. | CC0 | http://creativecommons.org/publicdomain/zero/1.0/deed.en | 2048x1532 | 1600x1197 | 379485 |
| rp24_ilc | https://commons.wikimedia.org/wiki/File:Lobular_carcinoma_-_intermed_mag.jpg | Nephron | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 4272x2848 | 1600x1067 | 659240 |
