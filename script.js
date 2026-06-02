const music = document.getElementById("music");
const btn = document.getElementById("playBtn");

let playing = false;

btn.addEventListener("click", () => {

if(!playing){

music.play();
btn.innerHTML = "⏸ Pausar";

}else{

music.pause();
btn.innerHTML = "▶ Reproduzir";

}

playing = !playing;

});

const startDate = new Date("2026-05-05");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days =
Math.floor(
diff / (1000*60*60*24)
);

document.getElementById("daysCounter")
.innerHTML = `${days} dias`;

}

updateCounter();

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(
[
{
opacity:0,
transform:"translateY(50px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],
{
duration:1000,
fill:"forwards"
}
);

}

});

});

document.querySelectorAll(".memory")
.forEach(item=>observer.observe(item));
