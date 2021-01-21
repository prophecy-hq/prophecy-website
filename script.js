var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rendered: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/data.json'
})


document.getElementById('anim').addEventListener('click', 
function(){ 
    animation.goToAndPlay(0)
    animation.play();
})


window.onload = function() {

    document.getElementById("animheader").after.className += " slidein";
    document.getElementById("animleft").className += " fadein";
    document.getElementById("animright").className += " fadein";

    
}