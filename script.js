const playBtn = document.getElementById("playBtn");
const music = document.getElementById("music");

playBtn.addEventListener("click", () => {
    music.play();

    document.querySelector(".counter")
        .scrollIntoView({
            behavior:"smooth"
        });
});

const startDate = new Date("2026-05-05");

const today = new Date();

const diff =
Math.floor(
(today - startDate) /
(1000 * 60 * 60 * 24)
);

document.getElementById("daysCounter")
.innerText = diff + " dias";

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".card img")
.forEach(img => {

img.addEventListener("click", () => {

modal.style.display = "flex";
modalImg.src = img.src;

});

});

modal.addEventListener("click", () => {
modal.style.display = "none";
});

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "absolute";
heart.style.left =
Math.random()*100+"vw";

heart.style.top = "-20px";

heart.style.fontSize =
(Math.random()*20+10)+"px";

heart.style.animation =
`fall ${Math.random()*5+5}s linear`;

document
.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,500);

const style =
document.createElement("style");

style.innerHTML = `
@keyframes fall{
to{
transform:translateY(110vh);
}
}
`;

document.head.appendChild(style);
