setInterval(getTime, 1000)

const minHand = document.querySelector("[data-minute]")
const secHand = document.querySelector("[data-second]")
const hourHand = document.querySelector("[data-hour]")

function getTime() {

    const currDate = new Date()
    const sec = currDate.getSeconds()/60
    const min = (sec+currDate.getMinutes())/60
    const hour = (min+currDate.getHours())/12

    setRotation(hourHand, hour)
    setRotation(minHand, min)
    setRotation(secHand, sec)
    
}

function setRotation(element, rotationVal) {
    
    //console.log("rotation value", 0.5*360)
    element.style.setProperty('--hand-rotate', rotationVal * 360)
}

