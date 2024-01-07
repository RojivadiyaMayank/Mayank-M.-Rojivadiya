a = document.getElementById("moreab");
a.addEventListener("mouseover", function(){
    a.innerHTML = "why not?"
})
a.addEventListener("mouseout", function(){
    a.innerHTML = "more about me"
})


document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text123", {
        strings: ["Software Engineer", "Frontend Developer", "Web Developer"],
        typeSpeed: 120,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
});

