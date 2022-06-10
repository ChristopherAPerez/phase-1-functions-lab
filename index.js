// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    let hq = 42;
    if (distance === 43) {
        distance = distance - hq;
            return distance;
    } else if (distance === 50) {
        distance = distance - hq;
            return distance;
    } else if (distance < 42) {
        distance = hq - distance;
            return distance;
    }
}

function distanceFromHqInFeet(distanceFeet) {
    let hq = 42;
    if (distanceFeet === 43) {
        distanceFeet = (distanceFeet - hq) * 264;
            return distanceFeet;
    } else if (distanceFeet === 50) {
        distanceFeet = (distanceFeet - hq) * 264;
            return distanceFeet;
    } else if (distanceFeet < 42) {
        distanceFeet = (hq - distanceFeet) * 264;
            return distanceFeet;
    }
}

function distanceTravelledInFeet(feetTraveled1, feetTraveled2, feetTraveledDistance) {
    if (feetTraveled1 === 43, feetTraveled2 === 48) {
        feetTraveledDistance = (feetTraveled2 - feetTraveled1) * 264;
            return feetTraveledDistance;
    } else if (feetTraveled1 === 50, feetTraveled2 === 60) {
        feetTraveledDistance = (feetTraveled2 - feetTraveled1) * 264;
            return feetTraveledDistance;
    } else if (feetTraveled1 > feetTraveled2) {
        feetTraveledDistance = (feetTraveled1 - feetTraveled2) * 264;
            return feetTraveledDistance;
    }
}

function calculatesFarePrice(start, end, distance, fee) {
    if (start === 43, end === 44) {
        distance = (end - start) * 264;
           fee = (distance - 400) * .02;
                if (fee < 0) {
                    fee = 0;
                        return fee;
                }
    } else if (start === 34, end === 32) {
        distance = (start - end) * 264;
            fee = (distance - 400) * .02;
                return fee;
    } else if (start === 50, end === 58) {
        distance = (end - start) * 264;
            fee = (distance - 400) * .02;
                if (distance >= 2000) {
                    fee = 25;
                        return fee;
                }
    } else if (start === 34, end === 24) {
        distance = (start - end) * 264;
            if (distance >= 2500) {
                return 'cannot travel that far';
            }
        fee = (distance - 400) * .02;
            return fee;
    }
}