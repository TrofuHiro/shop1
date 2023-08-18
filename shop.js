// เมื่อคลิกที่ปุ่มแสดง Overlay
document.getElementById("showOverlayButton").addEventListener("click", function() {
    // แสดง Overlay
    document.querySelector(".overlay").style.display = "block";
});

// เมื่อคลิกที่ปุ่มปิด Overlay
document.getElementById("closeOverlayButton").addEventListener("click", function() {
    // ซ่อน Overlay
    document.querySelector(".overlay").style.display = "none";
});
document.getElementById("cartIcon1").addEventListener("click", function() {
    var box = document.getElementsByClassName("box1")[0];
    box.style.display = "block";
});
document.getElementById("cartIcon2").addEventListener("click", function() {
    var box = document.getElementsByClassName("box2")[0];
    box.style.display = "block";
});
document.getElementById("cartIcon3").addEventListener("click", function() {
    var box = document.getElementsByClassName("box3")[0];
    box.style.display = "block";
});
document.getElementById("cartIcon4").addEventListener("click", function() {
    var box = document.getElementsByClassName("box4")[0];
    box.style.display = "block";
});
const boxes = document.querySelectorAll('.box_');

  boxes.forEach(box => {
    const quantityElement = box.querySelector('.quantity');
    const decreaseButton = box.querySelector('.decreaseButton');
    const increaseButton = box.querySelector('.increaseButton');
  
    let quantity = 0;
  
    decreaseButton.addEventListener('click', () => {
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
      }
    });
  
    increaseButton.addEventListener('click', () => {
      quantity++;
      quantityElement.textContent = quantity;
    });
  });
  function DOMContentLoaded(val) {
    const box = document.querySelector(val);
    const quantityElement = box.querySelector('.quantity');

    // ซ่อนกล่อง
    box.style.display = "none";

    // เปลี่ยนค่าจำนวนสินค้าในกล่องเป็น 0
    quantityElement.textContent = "0";
}

function calculateTotal() {
    var ga = parseInt(document.getElementById("ch_1").textContent);
    var va = parseInt(document.getElementById("ch_2").textContent);
    var ro = parseInt(document.getElementById("ch_3").textContent);
    var pl = parseInt(document.getElementById("ch_4").textContent);
    let prices = [300 * ga, 500 * va, 350 * ro, 1000 * pl]; // ราคาสินค้าแต่ละรายการ
    let total = 0;

    // คำนวณราคาที่รวมกันของสินค้าที่ให้มาทั้งหมด
    for (let price of prices) {
        total += price;
    }

    // แสดงผลราคาที่รวมกันในแท็ก <label>
    let labelElement = document.getElementById("totalLabel");
    labelElement.innerHTML = "รวมราคา: " + total + " บาท";

    // เช็คค่า total และปรับการแสดงผล
    if (total >= 1000) {
        let discountedTotal = total * 0.9;
        let labelElement1 = document.getElementById("totalLabel1");
        labelElement1.innerHTML = "ลดเหลือ: " + discountedTotal + " บาท";
}
}
// เรียกใช้ฟังก์ชัน calculateTotal ทุก 100 มิลลิวินาที
setInterval(calculateTotal, 100);
function sub_(){
    location.reload();
    alert('รอของเลยน้อง')
}

let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            const slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 2000); // เปลี่ยนรูปทุก 2 วินาที
        }