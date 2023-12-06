function roadRadar(speed, area) {
    const motorway_limit = 130;
    const intersate_limit = 90;
    const city_limit = 50;
    const residential_limit = 20;
    let diff;
    let status = ''
    if (area == "city") {
        if (speed > city_limit) {
            diff = speed - city_limit;
            if (diff <= 20) {
                status = "speeding"
            } else if (diff <= 40) {
                status = "excessive speeding"
            } else {
                status = "reckless driving"
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${city_limit} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${city_limit} zone`)
        }
    } else if (area == "residential") {
        if (speed > residential_limit) {
            diff = speed - residential_limit;
            let status;
            if (diff <= 20) {
                status = "speeding"
            } else if (diff <= 40) {
                status = "excessive speeding"
            } else {
                status = "reckless driving"
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residential_limit} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${residential_limit} zone`)
        }
    } else if (area == "interstate") {
        if (speed > intersate_limit) {
            diff = speed - intersate_limit;
            let status;
            if (diff <= 20) {
                status = "speeding"
            } else if (diff <= 40) {
                status = "excessive speeding"
            } else {
                status = "reckless driving"
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${intersate_limit} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${intersate_limit} zone`)
        }
    } else if (area == "motorway") {
        if (speed > motorway_limit) {
            diff = speed - motorway_limit;
            let status;
            if (diff <= 20) {
                status = "speeding"
            } else if (diff <= 40) {
                status = "excessive speeding"
            } else {
                status = "reckless driving"
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorway_limit} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${motorway_limit} zone`)
        }
    }

}
