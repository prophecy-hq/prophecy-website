var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rendered: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://github.com/ProphecyHQ/Prophecy-Website/blob/siddharth/data.json'
})


document.getElementById('anim').addEventListener('click', 
function(){ 
    animation.goToAndPlay(0)
    animation.play();
})