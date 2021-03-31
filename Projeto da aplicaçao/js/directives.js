Vue.directive('rotate-on-scroll', function(el, binding){
    window.addEventListener('scroll', function(){
        var rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;
        el.style.transform = rotation;
    })
})