const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

const IMAGES = path.join(__dirname, "..", "public", "images")
const LOJA = path.join(IMAGES, "loja")

const EXCLUDE = new Set([
  "logo.png",
  "favicon.png",
  "director.png",
  "director1.png",
  "partners.png",
  "100x100.jpg",
  "500x400.jpg",
  "600x400.jpg",
  "600x600.jpg",
  "800x500.jpg",
  "800x600.jpg",
  "1920x960.jpg",
])

const pool = fs
  .readdirSync(IMAGES, { withFileTypes: true })
  .filter((e) => e.isFile())
  .map((e) => e.name)
  .filter((n) => /\.(jpg|jpeg|png|webp)$/i.test(n))
  .filter((n) => !EXCLUDE.has(n))
  .sort()

// deterministic shuffle so runs are reproducible
function seededShuffle(arr, seed) {
  const a = [...arr]
  let s = seed
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const shuffled = seededShuffle(pool, 42)
console.log(`Pool: ${shuffled.length} real photos`)

const targets = [
  ...["s_0.webp", "s_1.webp", "s_2.webp", "s_3.webp", "s_4.webp"].map((f) => `sliders/${f}`),
  ...["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp"].map((f) => `categories/${f}`),
  ...Array.from({ length: 8 }, (_, i) => `featured-products/${String(i + 1).padStart(2, "0")}.webp`),
  ...Array.from({ length: 10 }, (_, i) => `new-arrival/${String(i + 1).padStart(2, "0")}.webp`),
  ...Array.from({ length: 8 }, (_, i) => `product-images/${String(i + 1).padStart(2, "0")}.jpg`),
  ...Array.from({ length: 10 }, (_, i) => `brands/${String(i + 1).padStart(2, "0")}.webp`),
  "extra-images/promo-large.webp",
]

async function run() {
  let poolIdx = 0
  for (const rel of targets) {
    const target = path.join(LOJA, rel)
    let width = 600
    let height = 600
    try {
      const meta = await sharp(fs.readFileSync(target)).metadata()
      if (meta.width && meta.height) {
        width = meta.width
        height = meta.height
      }
    } catch {
      // keep defaults
    }

    const srcName = shuffled[poolIdx % shuffled.length]
    poolIdx++
    const srcPath = path.join(IMAGES, srcName)

    const isJpg = /\.jpe?g$/i.test(rel)
    let pipeline = sharp(srcPath).resize(width, height, { fit: "cover", position: "attention" })
    pipeline = isJpg ? pipeline.jpeg({ quality: 85 }) : pipeline.webp({ quality: 82 })

    const buffer = await pipeline.toBuffer()
    fs.writeFileSync(target, buffer)
    console.log(`${rel}  <-  ${srcName}  (${width}x${height})`)
  }

  // wordmark-only crop of the real logo for compact header placements
  const logoBuf = fs.readFileSync(path.join(IMAGES, "logo.png"))
  const logoMeta = await sharp(logoBuf).metadata()
  const cropHeight = Math.round(logoMeta.height * 0.74)
  const wordmarkBuf = await sharp(logoBuf)
    .extract({ left: 0, top: 0, width: logoMeta.width, height: cropHeight })
    .png()
    .toBuffer()
  fs.writeFileSync(path.join(IMAGES, "logo-wordmark.png"), wordmarkBuf)
  console.log("logo-wordmark.png generated")

  // square app icon from the real favicon crop
  const favBuf = fs.readFileSync(path.join(IMAGES, "favicon.png"))
  const favMeta = await sharp(favBuf).metadata()
  const side = Math.min(favMeta.width, favMeta.height)
  const iconBuf = await sharp(favBuf)
    .extract({
      left: Math.floor((favMeta.width - side) / 2),
      top: Math.floor((favMeta.height - side) / 2),
      width: side,
      height: side,
    })
    .resize(512, 512)
    .png()
    .toBuffer()
  fs.writeFileSync(path.join(__dirname, "..", "src", "app", "icon.png"), iconBuf)
  console.log("src/app/icon.png generated")
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
