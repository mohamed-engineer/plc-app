// التعامل مع المسار الرئيسي (/)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/page.tsx'));
  });
//src\app\page.tsx
  // تشغيل الخادم
  app.listen(3000, () => console.log('الخادم يعمل على http://localhost:3000'));