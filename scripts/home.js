let topVisible = false;
let bottomVisible = true;
let swiper =null;



init = () => {
    document.addEventListener("scroll", handleScroll);
    console.log("onload home")
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}

setScrollInfoVisibility = () => {
    document.getElementById("topInfo").style.visibility = 'hidden';
    document.getElementById("bottom").style.visibility = 'visible'
}


handleScroll = (e) => {
    let scrollPosition = getScrollPercent();
    let topScrollInfo = document.getElementById("topInfo");
    let bottomScrollInfo = document.getElementById("bottomInfo");

    if(scrollPosition > 0 && !topVisible) {
        topScrollInfo.classList.add("infoVisible");
        topVisible = true;
    } else if (scrollPosition <= 0 && topVisible) {
        topScrollInfo.classList.remove("infoVisible");
        topVisible = false;
    }

    if(scrollPosition < 100 && !bottomVisible) {
        bottomScrollInfo.style.visibility = "visible";
        bottomScrollInfo.classList.add("infoVisible");
        bottomVisible = true;
    } else if (scrollPosition >= 100 && bottomVisible) {
        bottomScrollInfo.classList.remove("infoVisible");
        setTimeout(() => {
            bottomScrollInfo.style.visibility = "hidden";
        }, 500);
        bottomVisible = false;
    }
    // if(scrollPosition === 100) {
    //     bottomScrollInfo.style.visibility = "hidden"
    // }
    // if(scrollPosition === 0) {
    //     topScrollInfo.style.visibility = "hidden"
    // }
}

getScrollPercent = () => {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

window.addEventListener('load', init);
