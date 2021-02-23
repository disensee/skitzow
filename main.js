window.addEventListener('load', ()=>{
    //Video file paths
    const videos = ["media/videos/TheStormVideo.mp4","media/videos/Outlaw.mp4", "media/videos/walktheplank.mp4"];
    var index = 0;

    //Plyr constructor
    const player = new Plyr('#player',{
        controls: ['play', 'progress','mute','volume', 'airplay', 'settings','fullscreen'],
    });

    player.source = {
        type: 'video',
        title: 'The Storm',
        sources: [{
            src: videos[index],
            type: 'video/mp4',
            size: 1080
        }],
    }; 
    var btnNextContainer = document.getElementById('btnNextContainer');
    var btnPrevContainer = document.getElementById('btnPrevContainer');

    //Make site responsive for mobile
    const mq = window.matchMedia('(max-width: 575px)');
    function handleMqMatch(e){
        if(e.matches){
            btnPrevContainer.classList.remove('order-first');
            document.getElementById('player-container').classList.add('order-first');

            btnPrevContainer.innerHTML = '';
            btnNextContainer.innerHTML = `<pre id="btnPrev" style="margin-right: 20px;"><</pre> 
                                        <pre id="btnNext" style="margin-left: 20px;">></pre>`;
        }else{
            btnPrevContainer.classList.add('order-first');
            document.getElementById('player-container').classList.remove('order-first');

            btnPrevContainer.innerHTML = '<pre id="btnPrev"><</pre>';
            btnNextContainer.innerHTML = '<pre id="btnNext">></pre>';
        }
        var btnNext = document.getElementById('btnNext');
        var btnPrev = document.getElementById('btnPrev');
        btnNext.addEventListener('click', goToNext);
        btnPrev.addEventListener('click', goToPrev);
    }
    mq.addListener(handleMqMatch);
    handleMqMatch(mq);
    
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
            title: '',
            sources: [{
                src: videos[index],
                type: 'video/mp4',
                size: 1080
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
            title: '',
            sources: [{
                src: videos[index],
                type: 'video/mp4',
                size: 1080
            }],
        }
    }
});
