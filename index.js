window.addEventListener('scroll', function (e) {
    let page = window.pageYOffset

    if (page === 0) {
        document.getElementById('header').className = "header";
        let links = document.querySelectorAll('.navs > ul > li > .nav-link')
        links = Array.from(links)
        links.forEach(link => {
            link.className = "nav-link"
        })

    }
    if (page > 0) {
        document.getElementById('header').classList.add("header-scroll")
        let links = document.querySelectorAll('.navs > ul > li > .nav-link')
        console.log(links)
        links = Array.from(links)
        links.forEach(link => {
            link.classList.add("scroll-nav")
        })
    }
})
let links = document.querySelectorAll('.navs > ul > li > a')
links = Array.from(links);
links.forEach(element => {
    element.addEventListener('click',function(e){
      let element= document.getElementById(e.target.hash.slice(1));
       element.classList.add("scroll");

    })
    
});