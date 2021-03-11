if (location.protocol !== 'https:') {
    if(location.protocol !== 'file:'){
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
}

window.addEventListener('load', ()=>{
    //Video YouTube src URLs
    const videos = ["https://www.youtube.com/embed/HMfRz-niVME" ,"https://www.youtube.com/embed/AyUyBYKExpg", "https://www.youtube.com/embed/z6Y962vX8do", "https://www.youtube.com/embed/L0HL_Lfgo40"];
    var index = 0;

    //Plyr constructor
    const player = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress','mute','volume', 'airplay', 'settings','fullscreen'],
        fullscreen: {enabled: true, fallback: true, iosNative: true, container: '#player'}
    });

    document.getElementById("btnPrev").addEventListener("click", goToPrev);
    document.getElementById("btnNext").addEventListener("click", goToNext);


    ////////////////////////////////////////
    ////////////VIDEO FUNCTIONS////////////
    //////////////////////////////////////
    function goToNext(){
        index++;
        if(index > videos.length - 1){
            index = 0;
        }
        
        player.source = {
            type: 'video',
            sources: [{
                src: videos[index],
                provider: 'youtube'
            }],
        }
    }

    function goToPrev(){
        index--;
        if(index < 0){
            index = videos.length -1;
        }

        player.source = {
            type: 'video',
            sources: [{
                src: videos[index],
                provider: 'youtube'
            }],
        }
    }
});
