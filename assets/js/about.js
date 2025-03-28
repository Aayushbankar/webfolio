document.addEventListener("DOMContentLoaded", () => {
    const infoCards = document.querySelectorAll(".info-card");

    infoCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0px 0px 15px rgba(255, 0, 60, 0.7)";
        });

        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "none";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const infoCards = document.querySelectorAll(".info-card");

    infoCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0px 0px 15px rgba(255, 0, 60, 0.7)";
        });

        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "none";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

// Smooth Page Transition Effect
document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let href = link.getAttribute("href");

        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = href;
        }, 400); // Matches the transition time
    });
});

