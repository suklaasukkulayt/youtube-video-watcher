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
    var url = videoIdValue;
    let videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
if (videoid != null) {
    document.getElementById("youtubeplayer").src = "https://www.youtube-nocookie.com/embed/" + videoid[1] + "?autoplay=1";
} else {
    document.getElementById("youtubeplayer").src = "https://www.youtube-nocookie.com/embed/" + videoIdValue + "?autoplay=1";
}
    
})