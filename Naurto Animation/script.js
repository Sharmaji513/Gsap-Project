var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove" , function(dets){
    // console.log(dets.x ,dets.y)
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"

})

document.querySelector("#overlay1").addEventListener("mousemove" , function(dets){
    // console.log("hui hui")
    document.querySelector("#elem1 img").style.scale = 1;
    document.querySelector("#elem1 img").style.opacity = 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem1 img").style.left = (dets.x - 370) + "px"
    document.querySelector("#elem1 img").style.top = (dets.y - 450) + "px"


})

document.querySelector("#overlay1").addEventListener("mousemove" , function(dets){
    // console.log("hui hui")
    document.querySelector("#elem1 img").style.scale = 1;
    document.querySelector("#elem1 img").style.opacity = 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem1 img").style.left = (dets.x - 370) + "px"
    document.querySelector("#elem1 img").style.top = (dets.y - 450) + "px"

})
document.querySelector("#overlay1").addEventListener("mouseleave" , function(dets){
    // console.log("hui hui")
    document.querySelector("#elem1 img").style.scale = 0;
    document.querySelector("#elem1 img").style.opacity = 0;
    cursor.style.opacity = 1;
   
})




// second 
document.querySelector("#overlay2").addEventListener("mousemove" , function(dets){
    // console.log("hui hui")
    document.querySelector("#elem2 img").style.scale = 1;
    document.querySelector("#elem2 img").style.opacity = 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem2 img").style.left = (dets.x - 700) + "px"
    document.querySelector("#elem2 img").style.top = (dets.y - 450) + "px"

})
document.querySelector("#overlay2").addEventListener("mouseleave" , function(dets){
    // console.log("hui hui")
    document.querySelector("#elem2 img").style.scale = 0;
    document.querySelector("#elem2 img").style.opacity = 0;
    cursor.style.opacity = 1;
   
})
2
//third
document.querySelector("#overlay3").addEventListener("mousemove" , function(dets){
    // console.log("hui hui")
    document.querySelector("#elem3 img").style.scale = 1;
    document.querySelector("#elem3 img").style.opacity = 1;
    cursor.style.opacity = 0;
    document.querySelector("#elem3 img").style.left = (dets.x - 999) + "px"
    document.querySelector("#elem3 img").style.top = (dets.y - 450) + "px"

})
document.querySelector("#overlay3").addEventListener("mouseleave" , function(dets){
    // console.log("hui hui")
    document.querySelector("#elem3 img").style.scale = 0;
    document.querySelector("#elem3 img").style.opacity = 0;
    cursor.style.opacity = 1;
   
})
