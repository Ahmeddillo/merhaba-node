const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // Artık HTML gönderiyoruz!

  // Burası senin sitenin tasarımı
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node.js Merhaba</title>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            height: 100vh; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            margin: 0; 
            color: white;
          }
          .card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            border: 1px solid rgba(255, 255, 255, 0.18);
            text-align: center;
          }
          h1 { margin-bottom: 1rem; font-size: 2.5rem; }
          p { font-size: 1.2rem; opacity: 0.9; }
          .rocket { font-size: 4rem; margin-bottom: 1rem; display: block; }
        </style>
      </head>
      <body>
        <div class="card">
          <span class="rocket">🚀</span>
          <h1>Selam Ahmet!</h1>
          <p>Node.js dünyasına çok şık bir giriş yaptın.</p>
          <p><strong>Status 139</strong> burada sana ulaşamaz!</p>
        </div>
      </body>
    </html>
  `;

  res.end(html);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde hazır!`);
});