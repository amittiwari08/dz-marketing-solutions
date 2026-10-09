import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imageRoot = path.join(root, "public", "images");
const sourceRoot = path.join(root, "src");
const threshold = 500 * 1024;

const imageExtensions = new Set([".png", ".jpg", ".jpeg"]);
const textExtensions = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".json", ".mdx"
]);

async function walk(dir) {
  const results = [];

  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...await walk(fullPath));
    } else if (entry.isFile()) {
      results.push(fullPath);
    }
  }

  return results;
}

const files = await walk(imageRoot);
const converted = [];

for (const file of files) {
  const ext = path.extname(file).toLowerCase();

  if (!imageExtensions.has(ext)) continue;

  const originalStat = await fs.stat(file);
  if (originalStat.size <= threshold) continue;

  const baseName = path.basename(file, path.extname(file));
  const output = path.join(path.dirname(file), `${baseName}.webp`);

  await sharp(file)
    .rotate()
    .webp({ quality: 85, effort: 6 })
    .toFile(output);

  const relative = path.relative(imageRoot, file).split(path.sep).join("/");
  const stem = relative.slice(0, relative.lastIndexOf("."));
  const optimizedStat = await fs.stat(output);

  converted.push({
    stem,
    ext,
    originalRelative: relative,
    originalSize: originalStat.size,
    optimizedSize: optimizedStat.size
  });

  console.log(
    `${relative}: ${(originalStat.size / 1024 / 1024).toFixed(2)} MB -> ` +
    `${(optimizedStat.size / 1024 / 1024).toFixed(2)} MB`
  );
}

let updatedFiles = 0;

if (converted.length > 0) {
  const sourceFiles = await walk(sourceRoot);

  for (const file of sourceFiles) {
    if (!textExtensions.has(path.extname(file).toLowerCase())) continue;

    const originalContent = await fs.readFile(file, "utf8");
    let content = originalContent;

    for (const item of converted) {
      // Handle the actual extension and common mismatched extensions.
      for (const ext of new Set([item.ext, ".png", ".jpg", ".jpeg"])) {
        const oldPath = `/images/${item.stem}${ext}`;
        const newPath = `/images/${item.stem}.webp`;
        content = content.split(oldPath).join(newPath);
      }
    }

    if (content !== originalContent) {
      await fs.writeFile(file, content, "utf8");
      updatedFiles++;
      console.log(`Updated references: ${path.relative(root, file)}`);
    }
  }
}

console.log(`\nConverted ${converted.length} image(s).`);
console.log(`Updated ${updatedFiles} source file(s).`);
console.log("Original image files have been preserved.");
