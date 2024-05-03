console.log("Music can chnge your world");

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrl = document.getElementById("ctrl");


song.addEventListener("loadedmetadata", () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
    console.log("cliked")
});
ctrl.addEventListener("click", () => {
    if (ctrl.classList.contains("fa-pause")) {
        song.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");


    } else {
        song.play();
        ctrl.classList.remove("fa-play");
        ctrl.classList.add("fa-pause");

    }
});

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.addEventListener("click", () => {
    song.play();
    song.currentTime = progress.value;
    ctrl.classList.remove("fa-pause");
    ctrl.classList.add("fa-play");

})