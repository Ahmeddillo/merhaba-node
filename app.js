const http = require('http');
const { Pool } = require('pg');

// SİHİRLİ NOKTA: Eğer Render'daysa 'DATABASE_URL' kullan, yereldeyse kendi bilgilerini kullan.
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Hello@localhost:5432/test_db';

const pool = new Pool({
  connectionString: connectionString,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false // Render'da SSL şart!
});

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  let dbStatus = 'Bağlanıyor...';
  try {
    const result = await pool.query('SELECT NOW()'); // Basit bir test sorgusu
    dbStatus = 'Veritabanına başarıyla bağlandık! Saat: ' + result.rows[0].now;
  } catch (err) {
    dbStatus = 'Hata oluştu: ' + err.message;
  }

  const html = `
    <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
      <h1>🚀 Node.js + PostgreSQL Testi</h1>
      <p style="padding: 20px; background: #f4f4f4; border-radius: 10px;">${dbStatus}</p>
    </div>
  `;
  res.end(html);
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Sunucu http://localhost:${port} adresinde hazır!`));