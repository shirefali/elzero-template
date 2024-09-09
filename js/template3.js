let skillsSec = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

let statsSec = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats-card h3");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= skillsSec.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    if (window.scrollY >= statsSec.offsetTop - 300) {
        if (!started) {
            nums.forEach((num) => increaseNums(num));
        }
        started = true;
    }
}

function increaseNums(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal)
}