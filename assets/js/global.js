document.addEventListener("DOMContentLoaded", () => {
    const fluidBG = document.createElement("div");
    fluidBG.id = "fluid-bg";
    document.body.appendChild(fluidBG);

    document.addEventListener("mousemove", (e) => {
        let x = (e.clientX / window.innerWidth) * 2 - 1;
        let y = (e.clientY / window.innerHeight) * 2 - 1;
        fluidBG.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
});
