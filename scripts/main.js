var facts = ['Named after the Roman God of war, Mars is the fourth planet from the sun in our solar system', 'Mars is the second smallest planet in the solar system after Mercury. With a diameter (distance through the middle) of 6,791 kilometres, it’s roughly half the size of Earth.', 'It can get pretty cold on Mars –– much colder than our own planet, since it’s further away from the sun. At the equator, temperatures can reach 20°C, but at its poles they can plummet to as low as -140°C.', 'You could jump around three times higher on Mars than you can on Earth. Boing! This is because the planet’s gravity – the force that keeps us on the ground – is much weaker.', 'Mars is also known as the ‘Red Planet’ because, well, it’s red! This signature colour comes from the large amount of a chemical called iron oxide (or ‘rust’ as you might know it) in its rocks and soil.', 'A day on Mars is 24 hours and 37 minutes –– only a little bit longer than a day on our own planet. A year on Mars, however, is almost twice as long, lasting 687 Earth days! This is because it takes a lot longer than Earth to complete its orbit around the Sun.'];
var fuelStatus = 100;
var speed = 16150;
var gforce = 1.9;
var distance = 23900;


//give natural number in order ramdomize facts and display rnd fact from array in alert
function factsAlert() {

    var number = Math.random() * 7;
    console.log(number);
    number = Math.floor(number);
    console.log(number);


    var messageToPrint = facts[number];
    console.log(messageToPrint);
    window.alert(messageToPrint);

}


function burnFuel() {
    //warn if fuel is 20 percent 
    if (fuelStatus == 20) {
        alert("Fuel status critical")
    }

    //decrease fuel by 1 as long as its above 0, when 0 stop decreasing
    if (fuelStatus > 0) {
        fuelStatus = fuelStatus - 1;
        // console.log(fuelStatus);
        document.getElementById("fuelStatus").innerHTML = fuelStatus + '%';
    } else {
        alert("Well, sh*t"),
            clearInterval(burnInterval);
    }

}

// decrease fuel every 10 sec
var burnInterval = setInterval(function() {
    burnFuel()
}, 10000)

//increase speed and stop at highest speed
function increaseSpeed() {
    speed = speed + 153;
    document.getElementById("mph").innerHTML = speed + "mph";

    if (speed == 29308) {
        alert("Maximum speed reached."),
            clearInterval(speedInterval)
    }
}

//increase speed every sec
var speedInterval = setInterval(function() {
    increaseSpeed()
}, 1000)


//same thing for gforce and distance
function increaseGForce() {
    gforce = gforce + 0.5;
    document.getElementById("gforce").innerHTML = gforce + 'g';

    if (gforce == 2.9) {
        clearInterval(gForceInterval);
    }

}

var gForceInterval = setInterval(function() {
    increaseGForce()
}, 30000)


function decreaseDistance() {
    distance = distance - 20;
    document.getElementById("km").innerHTML = distance + 'km';

    if (distance == 0) {
        clearInterval(distanceInterval);
    }

}

var distanceInterval = setInterval(function() {
    decreaseDistance()
}, 1000)