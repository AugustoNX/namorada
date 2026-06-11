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


const startDate = new Date("2026-05-05T20:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCounter();

setInterval(updateCounter,1000);


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
