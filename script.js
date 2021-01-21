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
})
