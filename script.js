/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт загружен!");

    const sections = document.querySelectorAll(".content");
    const images = document.querySelectorAll(".content img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
    
    const filterInput = document.createElement("input");
    filterInput.type = "text";
    filterInput.placeholder = "Поиск по разделам...";
    filterInput.style.display = "block";
    filterInput.style.margin = "20px auto";
    filterInput.style.padding = "10px";
    filterInput.style.width = "80%";
    filterInput.style.fontSize = "16px";
    document.body.insertBefore(filterInput, document.body.firstChild);

    filterInput.addEventListener("input", () => {
        const searchText = filterInput.value.toLowerCase();
        sections.forEach(section => {
            const title = section.querySelector("h2").innerText.toLowerCase();
            section.style.display = title.includes(searchText) ? "block" : "none";
        });
    });
    images.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.dataset.hover;
        if (hoverSrc) {
            img.addEventListener("mouseenter", () => {
                img.src = hoverSrc;
            });
            img.addEventListener("mouseleave", () => {
                img.src = originalSrc;
            });
        }
    });
});