# Section 4 — Proposed Solution Images

Put the 2 setup images for the "Proposed Solution" section in this folder.

## Filenames (use exactly)
- `stage1-5led-setup.jpg`   → shown in the **Stage 1 POC** tab (the 5 LED POC setup)
- `final-25led-setup.jpg`   → shown in the **25 LED Full Setup** tab (the final 25 LED system)

## Rules
- **JPG** preferred.
- Recommended size: **900 × 600 px** (or any clean 16:10 landscape). Images are cropped with `object-cover`.
- If an image is missing, a clean animated vector placeholder shows automatically:
  - Stage 1 → alloy wheel + fixed camera + 5 glowing LED points
  - 25 LED → a 5×5 LED matrix (LED1…LED25) glowing one-by-one
- So the section always renders even before you add photos. Just drop the files in and refresh.

## Changing format (optional)
To use .png/.webp, edit the `image:` paths in `src/data/presentationData.js`
(inside the `SOLUTION.poc` and `SOLUTION.full` objects) and replace `.jpg`.
