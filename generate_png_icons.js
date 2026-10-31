import fs from 'fs';
import zlib from 'zlib';

function createCrcTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  return table;
}

const crcTable = createCrcTable();
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = data.length;
  const chunk = Buffer.alloc(4 + 4 + len + 4);
  chunk.writeUInt32BE(len, 0);
  typeBuf.copy(chunk, 4);
  data.copy(chunk, 8);
  const toCrc = Buffer.concat([typeBuf, data]);
  chunk.writeUInt32BE(crc32(toCrc), 8 + len);
  return chunk;
}

function generatePng(size, filename) {
  const width = size;
  const height = size;

  // Raw image data: filter byte (0) + width * 4 bytes (RGBA) per row
  const raw = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;

  const center = size / 2;
  const radius = size * 0.44;

  for (let y = 0; y < height; y++) {
    raw[offset++] = 0; // Filter None
    const ny = (y - center) / center;

    for (let x = 0; x < width; x++) {
      const nx = (x - center) / center;
      const dist = Math.sqrt(nx * nx + ny * ny);

      // Indigo to Purple gradient
      const t = (x + y) / (width + height);
      let r = Math.round(79 + (147 - 79) * t);
      let g = Math.round(70 + (51 - 70) * t);
      let b = Math.round(229 + (234 - 229) * t);
      let a = 255;

      // Rounded squircle border
      const p = 4; // superellipse power
      const squircleDist = Math.pow(Math.abs(nx), p) + Math.pow(Math.abs(ny), p);
      if (squircleDist > 1.0) {
        a = 0; // Transparent outside
      }

      // Draw stylized Sigma glyph in gold / white inside
      if (squircleDist <= 0.75) {
        // Draw Sigma bars
        const inTopBar = ny >= -0.35 && ny <= -0.22 && nx >= -0.25 && nx <= 0.25;
        const inBottomBar = ny >= 0.22 && ny <= 0.35 && nx >= -0.25 && nx <= 0.25;
        const inDiagonal1 = Math.abs((ny + 0.28) - 1.1 * (nx + 0.25)) < 0.08 && nx >= -0.25 && nx <= 0.02 && ny <= 0.02;
        const inDiagonal2 = Math.abs((ny - 0.28) + 1.1 * (nx + 0.25)) < 0.08 && nx >= -0.25 && nx <= 0.02 && ny >= -0.02;

        if (inTopBar || inBottomBar || inDiagonal1 || inDiagonal2) {
          r = 255;
          g = 255;
          b = 255;
        }

        // Draw sparkle dot
        if (Math.hypot(nx - 0.28, ny + 0.28) < 0.06) {
          r = 253;
          g = 224;
          b = 71; // gold
        }
      }

      raw[offset++] = r;
      raw[offset++] = g;
      raw[offset++] = b;
      raw[offset++] = a;
    }
  }

  const idatData = zlib.deflateSync(raw);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; // compression deflate
  ihdr[11] = 0; // filter adaptive
  ihdr[12] = 0; // interlace none

  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', idatData),
    makeChunk('IEND', Buffer.alloc(0))
  ]);

  fs.writeFileSync(filename, png);
  console.log('Created ' + filename + ' (' + png.length + ' bytes)');
}

generatePng(192, 'public/pwa-192x192.png');
generatePng(512, 'public/pwa-512x512.png');
generatePng(180, 'public/apple-touch-icon.png');
