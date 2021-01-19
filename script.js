var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rendered: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json'
})


document.getElementById('anim').addEventListener('click', 
function(){ 
    // x = document.getElementById('anim').getElementsByTagName('img');
    // x.display = "none";
    animation.goToAndPlay(0)
    animation.play();
    // x.display = "inline-block" 
})