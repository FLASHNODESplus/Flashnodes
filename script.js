
// Carousel functionality
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.plan-card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;
function updateCarousel(){
    const cardWidth = cards[0].offsetWidth + 30;
    track.style.transform = `translateX(${-currentIndex*cardWidth}px)`;
    cards.forEach((card,i)=>card.classList.toggle('active',i===currentIndex));
}
prevBtn.addEventListener('click',()=>{currentIndex=(currentIndex-1+cards.length)%cards.length;updateCarousel();});
nextBtn.addEventListener('click',()=>{currentIndex=(currentIndex+1)%cards.length;updateCarousel();});
updateCarousel();
// QR Modal
function openQR(upi){
    document.getElementById('qr-canvas')?.remove();
    const canvas = document.createElement('canvas'); canvas.id='qr-canvas';
    document.getElementById('qr-container').appendChild(canvas);
    new QRious({element:canvas,value:upi,size:200});
    document.getElementById('qr-modal').style.display='flex';
}
document.querySelector('#qr-modal .close-btn').addEventListener('click',()=>{document.getElementById('qr-modal').style.display='none';});
