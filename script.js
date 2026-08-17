const btn = document.getElementById('annoyingBtn');
const message = document.getElementById('message');

const messages = [
    "Hụt rồi cưng ơi! 😜",
    "Còn lâu mới bấm được!",
    "Chậm như sên ấy!",
    "Cố lên, gần được rồi... mà đùa đấy haha!",
    "Mỏi tay chưa bạn hiền?"
];

btn.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 150));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
});

btn.addEventListener('click', () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    message.innerText = randomMsg;
});