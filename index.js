setInterval(getTime, 1000)

function getTime() {

    const currDate = new Date()
    const sec = currDate.getSeconds()
    const min = currDate.getMinutes()
    const hour = currDate.getHours()
    console.log(currDate)
    console.log(hour, min, sec)
}

function setRotation() {

    
}

