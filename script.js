var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rendered: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json'
})


document.getElementById('anim').addEventListener('click', 
function(){ 
    animation.goToAndPlay(0)
    animation.play();

    copyToClipBoard("hello@prophecy.one");
    
    setTimeout(function() {
        document.getElementById("copied-to-clipboard-container").className +=  " showCopiedText";
    }, 1000);

    setTimeout(function() {
        document.getElementById("copied-to-clipboard-container").className +=  " opacity1";
    }, 1400);
    
    setTimeout(function() {
        document.getElementById("copied-to-clipboard-container").classList.remove("showCopiedText");
        document.getElementById("copied-to-clipboard-container").className +=  " hideCopiedText";
        document.getElementById("copied-to-clipboard-container").classList.remove("opacity1");
    }, 3000);

        document.getElementById("copied-to-clipboard-container").classList.remove("hideCopiedText");
})



const copyToClipBoard = (str) =>
{
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};