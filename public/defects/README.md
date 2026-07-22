# Defect Images — Placement Guide

Drop your defect photos into the folders below using the EXACT filenames listed.
The cards show a placeholder icon until the matching image file exists — so the
site keeps working even if some images are missing.

## Rules
- Format: **.jpg** (lowercase extension). To use .png instead, see "Changing format" below.
- Recommended size: **~640 × 400 px** (16:10). Anything close works — images are cropped to fit.
- Filenames are all **lowercase with hyphens** (already created for you below).
- Folder = defect category. Keep each image in its matching category folder.

## Folders & filenames

### public/defects/surface/
scratch.jpg · scuff-mark.jpg · pin-hole.jpg · surface-crack.jpg · hairline-crack.jpg ·
burrs.jpg · tool-marks.jpg · edge-chip.jpg · rim-lip-damage.jpg · spoke-damage.jpg

### public/defects/paint/
paint-drip.jpg · small-drip.jpg · orange-peel.jpg · thin-paint.jpg · paint-peel-off.jpg ·
chipping.jpg · dirt-inclusion.jpg · dust-particles.jpg · color-mismatch.jpg ·
low-gloss.jpg · blistering.jpg · fish-eye.jpg

### public/defects/casting/
porosity.jpg · blow-hole.jpg · shrinkage-cavity.jpg · inclusion.jpg · cold-shut.jpg ·
misrun.jpg · hot-tear.jpg · flash.jpg · mold-mismatch.jpg

### public/defects/dimensional/
bolt-hole-issue.jpg · center-bore-defect.jpg · chamfer-defect.jpg · bent-rim.jpg ·
out-of-round-wheel.jpg · lateral-runout.jpg · radial-runout.jpg · imbalance.jpg ·
wrong-wheel-model.jpg

## Changing format (optional)
If you prefer .png/.webp, edit `src/components/IndustryProblem.jsx` and change the line:
    const src = `/defects/${style.cat}/${defectSlug(name)}.jpg`
…replacing `.jpg` with your extension. (Use one consistent format for all.)
