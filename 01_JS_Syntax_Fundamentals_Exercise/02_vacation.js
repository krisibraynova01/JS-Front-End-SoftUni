function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;
    if (dayOfWeek == "Friday") {
        if (typeOfGroup == "Students") {
            totalPrice += 8.45 * groupOfPeople
            if (groupOfPeople >= 30) {
                totalPrice -= totalPrice * 0.15
            }
        } else if(typeOfGroup == "Business") {
            let pricePerPerson = 10.90
            totalPrice += groupOfPeople * pricePerPerson
            if (groupOfPeople >= 100) {
                totalPrice -= pricePerPerson * 10
            }
        } else if (typeOfGroup == "Regular") {
            totalPrice += groupOfPeople * 15
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice -= totalPrice * 0.05
            }
        }
    } else if (dayOfWeek == "Saturday") {
        if (typeOfGroup == "Students") {
            totalPrice += 9.80 * groupOfPeople
            if (groupOfPeople >= 30) {
                totalPrice -= totalPrice * 0.15
            }
        } else if(typeOfGroup == "Business") {
            let pricePerPerson = 15.60
            totalPrice += groupOfPeople * pricePerPerson
            if (groupOfPeople >= 100) {
                totalPrice -= pricePerPerson * 10
            }
        } else if (typeOfGroup == "Regular") {
            totalPrice += groupOfPeople * 20
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice -= totalPrice * 0.05
            }
        }
    } else if (dayOfWeek == "Sunday") {
        if (typeOfGroup == "Students") {
            totalPrice += 10.46 * groupOfPeople
            if (groupOfPeople >= 30) {
                totalPrice -= totalPrice * 0.15
            }
        } else if(typeOfGroup == "Business") {
            let pricePerPerson = 16
            totalPrice += groupOfPeople * pricePerPerson
            if (groupOfPeople >= 100) {
                totalPrice -= pricePerPerson * 10
            }
        } else if (typeOfGroup == "Regular") {
            totalPrice += groupOfPeople * 22.50
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice -= totalPrice * 0.05
            }
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
