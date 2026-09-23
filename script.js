function showInfo(){
    const infoDiv = document.getElementById("info");
    if (infoDiv.style.display === "none"){
        infoDiv.style.display = "flex";
    } else {
        infoDiv.style.display = "none";
    }   
}

const youtubeVideoIdForm = document.getElementById("youtubeVideoIdForm");
youtubeVideoIdForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let videoIdValue = document.getElementById('videoId').value;
    let url = videoIdValue;
    let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[?])|$))/gm;
    let videoid = "undefined";
    const match = regex.exec(url);

    if (match === null){
        document.getElementById("youtubeplayer").src = "https://www.youtube-nocookie.com/embed/" + videoIdValue + "?autoplay=1";
        return;
        //idk why the return is required here but if it ain't broke don't fix it i guess :D
        } else{
        videoid = match[3]; 
    }

if (videoid != null) {
    document.getElementById("youtubeplayer").src = "https://www.youtube-nocookie.com/embed/" + videoid + "?autoplay=1";
} else {
    document.getElementById("youtubeplayer").src = "https://www.youtube-nocookie.com/embed/" + videoIdValue + "?autoplay=1";
}
})