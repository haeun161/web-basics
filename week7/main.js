const textEl= document,getElementById("demo");

window.addEventListener("resize", function() {
    //console. log(window.innerWidth);
    window.innerWidth>= 960
    ? (textEl.innerHTML="데스크탑")
    : window.innerWidth>= 768
    ?(textEl.innerHTML="테블릿PC")
    :(textEl.innerHTML="스마트폰")
});