const imageInput = document.getElementById('meter-image');
const dropZone = document.getElementById('drop-zone');
const previewContainer = document.getElementById('preview-container');
const imagePreview = document.getElementById('image-preview');
const predictBtn = document.getElementById('predict-btn');
const resultBox = document.getElementById('result-box');
const resultText = document.getElementById('result-text');

// คลิกที่กล่องเพื่อเลือกรูป
dropZone.addEventListener('click', () => imageInput.click());

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            imagePreview.src = event.target.result;
            previewContainer.classList.remove('hidden');
            resultBox.classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
});

// จำลองการทำงาน AI อ่านค่า
predictBtn.addEventListener('click', () => {
    predictBtn.textContent = "กำลังประมวลผล...";
    setTimeout(() => {
        predictBtn.textContent = "ให้ AI ทำนายค่ามิเตอร์";
        resultBox.classList.remove('hidden');
        // ตัวอย่างผลลัพธ์มาตรฐาน 4 ดำ 3 แดง
        resultText.textContent = "ดำ: [ 1 8 7 6 ] | แดง: [ 0 6 4 ] (1876.064 ลบ.ม.)";
    }, 1000);
});