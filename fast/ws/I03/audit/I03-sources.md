# I03 image sources (rp16, rp17, rp26)

Checked 2026-10-05 against the Wikimedia Commons API (action=query, prop=imageinfo, extmetadata) with the project
User-Agent, one request at a time (the API rate limit was hit repeatedly and each call was retried after a pause).
Author, licence name and licence URL below are the values the API returned (Artist, LicenseShortName, LicenseUrl) with
the HTML link markup removed; the image JSON `by`, `lic`, `licurl` and `srcurl` fields match them. Every licence is
public domain, CC0, CC BY or CC BY-SA, so none is NC/ND. The two CDC files are marked public domain on Commons and the
API returns no licence URL for them, so `licurl` is empty and the credit shows the licence name as plain text. The CC0
file's licence URL is the one the API returned (http, deed.en).

Download note: upload.wikimedia.org answered the request for the first full-size original with HTTP 429, so every file
that was larger than 1280 px was taken from the 1280 px standard thumbnail that the Commons API returned
(iiurlwidth=1280) for the exact cited title, which is the same picture resized by Wikimedia. The 'original px' column is
the full-size dimension the API reports for the cited file. rp17_hsv is only 960x743 on Commons, so the API's thumburl is
the original itself; it was fetched from upload.wikimedia.org on the second try and is stored byte for byte, with no
resizing or re-encoding (`mod` false, no "resized" in the credit). The other five finals are Pillow-re-encoded, long side
at most 1600 px, JPEG quality 85, each far under 2 MB, and carry `mod` true. rp17_molluscum is a portrait original
(2848x4272); its 1280x1920 thumbnail was reduced to 1067x1600 to stay within the 1600 px limit. Each JPEG was read by eye
and shows the claimed diagnosis; no genital photograph shows a face.

| key | source page URL | author | licence | licence URL | original px | final px | final bytes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| rp16_gonococci | https://commons.wikimedia.org/wiki/File:Neisseria_gonorrhoeae_diplococci_inside_a_neutrophil.jpg | Dr Graham Beards | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0 | 2232x1645 | 1280x943 | 141310 |
| rp16_chancre | https://commons.wikimedia.org/wiki/File:Chancres_on_the_penile_shaft_due_to_a_primary_syphilitic_infection_caused_by_Treponema_pallidum_6803_lores.jpg | CDC/M. Rein, VD | Public domain | (none given; public domain) | 1755x1215 | 1280x886 | 218647 |
| rp17_molluscum | https://commons.wikimedia.org/wiki/File:Molluscum_contagiosum,_high_mag.jpg | CoRus13 | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0 | 2848x4272 | 1067x1600 | 609669 |
| rp17_hsv | https://commons.wikimedia.org/wiki/File:Herpes_simplex_virus_pap.jpg | Drhan9394 | CC0 | http://creativecommons.org/publicdomain/zero/1.0/deed.en | 960x743 | 960x743 | 93851 |
| rp26_grapes | https://commons.wikimedia.org/wiki/File:Complete_Hydatidiform_Mole_(39611782015).jpg | Ed Uthman from Houston, TX, USA | CC BY 2.0 | https://creativecommons.org/licenses/by/2.0 | 6048x4032 | 1280x853 | 240692 |
| rp26_hydropic | https://commons.wikimedia.org/wiki/File:Complete_Hydatidiform_Mole_(6032015405).jpg | Ed Uthman from Houston, TX, USA | CC BY 2.0 | https://creativecommons.org/licenses/by/2.0 | 1524x1017 | 1280x854 | 360145 |

Candidates looked at and rejected: a Tzanck smear photograph (Commons, CC BY-SA 4.0) because it is a blurred phone image
that does not show the cells clearly; colorized electron micrographs of Treponema pallidum because the lesson teaches
darkfield; Nephron's acute salpingitis micrographs because the infiltrate is not clearly neutrophil-rich at the
available magnifications.
