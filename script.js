document.addEventListener("DOMContentLoaded", () => {
    const envelopeWrapper = document.querySelector(".envelope-wrapper");
    const envelope = document.querySelector(".envelope");
    const letterContainer = document.querySelector(".letter-container");
    const body = document.body;

    envelopeWrapper.addEventListener("click", () => {
        envelope.classList.add("open");
        envelopeWrapper.classList.add("open");

        // Delay opening the letter slightly after the envelope flap opens
        setTimeout(() => {
            letterContainer.classList.add("open");
            createFloatingElements();

            // Thêm class 'hidden' để ẩn hoàn toàn phong bì sau khi thư đã mở
            setTimeout(() => {
                envelopeWrapper.classList.add("hidden");
            }, 1000); // Thêm một độ trễ nhỏ để hiệu ứng mở thư được mượt mà trước khi ẩn phong bì
        }, 200); // Adjust this delay as needed
    });

    function createFloatingElements() {
        const numElements = 30; // Số lượng trái tim và bong bóng
        const colors = ["#ff69b4", "#ff4d6d", "#ff99cc"]; // Màu trái tim
        const minSizeHeart = 15;
        const maxSizeHeart = 30;
        const minSizeBubble = 20;
        const maxSizeBubble = 40;

        for (let i = 0; i < numElements; i++) {
            const type = Math.random() < 0.5 ? "heart" : "bubble"; // Ngẫu nhiên trái tim hoặc bong bóng
            const element = document.createElement("div");
            element.classList.add(type);

            if (type === "heart") {
                const size = Math.random() * (maxSizeHeart - minSizeHeart) + minSizeHeart;
                element.style.width = `${size}px`;
                element.style.height = `${size}px`;
                element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                element.style.transform = `rotate(-45deg)`; // Đảm bảo trái tim luôn xoay đúng hướng
            } else {
                // type === 'bubble'
                const size = Math.random() * (maxSizeBubble - minSizeBubble) + minSizeBubble;
                element.style.width = `${size}px`;
                element.style.height = `${size}px`;
                element.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.2})`;
                element.style.border = `1px solid rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`;
            }

            element.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên theo chiều ngang
            element.style.bottom = `-50px`; // Bắt đầu từ dưới màn hình

            // Thời gian animation ngẫu nhiên
            const animationDuration = Math.random() * 5 + 5; // 5 đến 10 giây
            const animationDelay = Math.random() * 3; // Trễ ngẫu nhiên 0 đến 3 giây

            if (type === "heart") {
                element.style.animation = `flyHeart ${animationDuration}s linear ${animationDelay}s infinite`;
            } else {
                element.style.animation = `flyBubble ${animationDuration}s linear ${animationDelay}s infinite`;
            }

            body.appendChild(element);
        }
    }
});
