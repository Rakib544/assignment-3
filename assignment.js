// https://github.com/Rakib544/assignment-3


function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000; //converting kilometer to meter

    if (kilometer < 0) { // checking if the value of kilometer is negative or not
        return "distance can't be negative";
    }

    return meter; // returning meter value
}

function budgetCalculator(totalWatch, totalPhone, totalLaptop) {

    if (totalWatch && totalPhone && totalLaptop < 0) { // checking if the value is negative or not
        return "products can't be negative";
    }

    totalWatchPrize = totalWatch * 50; // calculating total watch prize
    totalPhonePrize = totalPhone * 100; //calculating total phone prize
    totalLaptopPrize = totalLaptop * 500; // calculating total laptop prize
    total = totalWatchPrize + totalPhonePrize + totalLaptopPrize; // calculating total prize

    return total; // returning total prize
}

function hotelCost(day) {
    var totalCost = 0;

    if (day < 0) { // checking if the day is negative or not
        return "day can't be negative";
    } else if (day <= 10) {
        totalCost = day * 100; // calculating total cost
    } else if (day <= 20) {
        var firstPartCost = 10 * 100;
        var remaining = day - 10; // calculating second part days
        var secondPartCost = remaining * 80;
        totalCost = (firstPartCost + secondPartCost); //calculating total cost
    } else {
        var firstPartCost = 10 * 100;
        var secondPartCost = 10 * 80;
        var remaining = day - 20; // calculating third part days
        var thirdPartCost = remaining * 50; // calculating third part cost
        totalCost = (firstPartCost + secondPartCost + thirdPartCost); // calculating total cost
    }

    return totalCost; // returning total cost value
}


function megaFriend(friendList) {
    var megaName = friendList[0];

    if (friendList.length == 0) { // checking if the friendList array is empty or not
        return "please provide some name";
    }

    for (i = 0; i < friendList.length; i++) {

        if (friendList[i].length > megaName.length) { // checking condition for finding the meganame
            megaName = friendList[i] // assign the mega Name in the meganame variable
        }
    }

    return megaName; //returning mega friend name
}

