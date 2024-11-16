

let myCount = 0;
handleSlide();



function  handleSlide () {
    var selectElements = document.querySelectorAll(".image_slide");

    let i;

    for (i = 0; i < selectElements.length; i++){
        selectElements[i].style.display = "none"

    }
    myCount++;
    console.log(myCount)
    if(myCount > selectElements.length) {
        myCount = 1
        console.log("its one")
    }

    selectElements[myCount-1].style.display = "block";

    setTimeout(() => {
        handleSlide();
    }, 5000)
}
