setInterval(()=>{
    let video = document.querySelectorAll('.video-stream');
    if(document.querySelector('div.ad-showing')){
        if(document.querySelector('.ytp-ad-skip-button')){
            document.querySelector('.ytp-ad-skip-button').click();
        }
        else{
            video[0].currentTime = video[0].duration;
        }
    }
    console.log('checking')
}, 1000)