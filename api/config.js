// Vercel Serverless Function
// Settings → Environment Variables 에 FIREBASE_DB_URL 을 등록하면,
// 여기서 그 값을 읽어와 브라우저(클라이언트)에 건네줘요.
// 이 방식 덕분에 실제 주소는 코드/깃 저장소에 그대로 박히지 않아요.

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    firebaseDbUrl: process.env.FIREBASE_DB_URL || ''
  });
};
