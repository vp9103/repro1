# I02 image sources (rp12, rp14, rp20)

Checked 2026-10-05 against the Wikimedia Commons API (action=query, prop=imageinfo, extmetadata) with the project
User-Agent, one request at a time. Author, licence name and licence URL below are the values the API returned
(Artist, LicenseShortName, LicenseUrl); the image JSON `by`, `lic`, `licurl` and `srcurl` fields match them. Every
licence is public domain or CC BY or CC BY-SA, so none is NC/ND. The CDC PHIL file (rp12_clue) is marked public domain
on Commons and the API returns no licence URL, so `licurl` is empty and the credit links the licence name as plain text.

Download note: upload.wikimedia.org answered every request for the full-size originals with HTTP 429 (Retry-After 600,
"use thumbnail images in sizes listed" message), repeatedly over about 20 minutes. Each file was therefore taken from
the 1280 px standard thumbnail that the Commons API returned (iiurlwidth=1280) for the exact cited title, which is the
same picture resized by Wikimedia. The 'original px' column is the full-size dimension the API reports for the cited
file. Finals are Pillow-re-encoded, long side 1280 px (at most 1600), JPEG quality 85, each far under 2 MB. `mod` is
true on all six (resized and re-encoded). Each JPEG was read by eye and shows the claimed diagnosis.

| key | source page URL | author | licence | licence URL | original px | final px | final bytes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| rp12_clue | https://commons.wikimedia.org/wiki/File:Clue_cells_-_CDC_PHIL_3720.jpg | CDC/ M. Rein | Public domain | (none given; public domain) | 1366x929 | 1280x871 | 203688 |
| rp12_lichen | https://commons.wikimedia.org/wiki/File:Lichen_sclerosus_of_the_vulva_(14083624654).jpg | Ed Uthman from Houston, TX, USA | CC BY 2.0 | https://creativecommons.org/licenses/by/2.0 | 1851x941 | 1280x651 | 207967 |
| rp14_hyperplasia | https://commons.wikimedia.org/wiki/File:Complex_Hyperplasia_of_the_Endometrium_(no_atypia)_(4745672105).jpg | Ed Uthman from Houston, TX, USA | CC BY 2.0 | https://creativecommons.org/licenses/by/2.0 | 1705x1235 | 1280x927 | 694815 |
| rp14_leiomyoma | https://commons.wikimedia.org/wiki/File:Leiomyoma.jpg | Ed Uthman from Houston, TX, USA | CC BY 2.0 | https://creativecommons.org/licenses/by/2.0 | 2830x1651 | 1280x747 | 189084 |
| rp20_seminoma | https://commons.wikimedia.org/wiki/File:Seminoma_high_mag.jpg | Nephron | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0 | 4272x2848 | 1280x853 | 368234 |
| rp20_yolksac | https://commons.wikimedia.org/wiki/File:Yolk_sac_tumour_--_intermed_mag.jpg | Nephron | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0 | 4272x2848 | 1280x853 | 419400 |
