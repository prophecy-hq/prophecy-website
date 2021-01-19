var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
})


document.getElementById('anim').addEventListener('click', 
function(){ 
    animation.goToAndPlay(0)
    animation.play(); 
})