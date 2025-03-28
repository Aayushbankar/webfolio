document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".floating-node");

    document.addEventListener("mousemove", (e) => {
        projects.forEach(node => {
            const dx = e.clientX - node.offsetLeft;
            const dy = e.clientY - node.offsetTop;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            node.style.transform = `translate(${dx / distance * 10}px, ${dy / distance * 10}px)`;
        });
    });

    projects.forEach(node => {
        node.addEventListener("click", () => {
            const effectType = node.dataset.effect;
            triggerProjectReveal(node, effectType);
        });
    });
});

// Expanding animations per project
function triggerProjectReveal(node, effectType) {
    const revealPanel = document.createElement("div");
    revealPanel.classList.add("project-reveal", effectType);
    
    const title = node.dataset.title;
    const desc = node.dataset.desc;
    
    revealPanel.innerHTML = `<h2>${title}</h2><p>${desc}</p>`;
    document.body.appendChild(revealPanel);
    
    if (effectType === "glitch") glitchEffect(revealPanel);
    if (effectType === "hex-decrypt") hexDecryptEffect(revealPanel);
    if (effectType === "wave-spread") waveSpreadEffect(node);
    if (effectType === "warp-scroll") warpScrollEffect(revealPanel);
}

// 1️⃣ Glitch Effect (Kafka AI)
function glitchEffect(element) {
    element.classList.add("glitch-active");
    setTimeout(() => element.classList.remove("glitch-active"), 1000);
}

// 2️⃣ Hex Grid Decryption (Password Generator)
function hexDecryptEffect(element) {
    let hexChars = "0123456789ABCDEF";
    let hexText = "";
    for (let i = 0; i < 300; i++) {
        hexText += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
    
    let index = 0;
    let interval = setInterval(() => {
        if (index < hexText.length) {
            element.innerHTML += hexText.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 5);
}

// 3️⃣ Neural Wave Spread (Logic Gate Simulator)
function waveSpreadEffect(node) {
    const ripple = document.createElement("div");
    ripple.classList.add("wave-effect");
    node.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
}

// 4️⃣ Digital Warp Scroll (IT Dept Website)
function warpScrollEffect(element) {
    element.classList.add("warp-scroll-active");
}
