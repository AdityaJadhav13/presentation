// Regenerates src/data/defectImages.js from the actual files in
// public/defects/<category>/. Run after adding or removing defect photos:
//
//   node scripts/gen-defect-images.mjs
//
// Section 2 only renders defect cards (and category rows) whose image exists,
// so this keeps the slide in sync with the images you have.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const cats = ['surface', 'paint', 'casting', 'dimensional']

const out = {}
for (const c of cats) {
  const dir = path.join(root, 'public', 'defects', c)
  let files = []
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .map((f) => f.replace(/\.(jpg|jpeg|png|webp)$/i, ''))
      .sort()
  } catch {
    /* folder may not exist yet */
  }
  out[c] = files
}

const banner =
  '// AUTO-GENERATED — list of defect image slugs that exist in public/defects/<cat>/.\n' +
  '// Regenerate with:  node scripts/gen-defect-images.mjs\n'

fs.writeFileSync(
  path.join(root, 'src', 'data', 'defectImages.js'),
  banner + 'export const DEFECT_IMAGES = ' + JSON.stringify(out, null, 2) + '\n'
)

const total = Object.values(out).reduce((n, a) => n + a.length, 0)
console.log(`Wrote src/data/defectImages.js — ${total} images across ${cats.length} categories.`)
for (const c of cats) console.log(`  ${c}: ${out[c].length}`)
