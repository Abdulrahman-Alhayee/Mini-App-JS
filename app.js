// تهيئة تطبيق Telegram
if (window.Telegram) {
    const tg = window.Telegram.WebApp;

    // إعداد واجهة المستخدم
    tg.ready();
    tg.expand(); // توسيع النافذة
    tg.setHeaderColor("#4CAF50"); // لون الهيدر

    // زر الرئيسي (Main Button)
    tg.MainButton.setText("Close").show();
    tg.MainButton.onClick(() => tg.close());

    // زر الرجوع (Back Button)
    tg.BackButton.show();
    tg.BackButton.onClick(() => tg.close());
}

// زر التفاعل في التطبيق
document.getElementById('actionButton').addEventListener('click', () => {
    document.getElementById('result').textContent = 'Button Clicked!';
});