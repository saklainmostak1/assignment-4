function publicBusFare(people){
    let publicBusFare = 250;
    let PeopleInOtherTransport = people % 50;
    let peopleInPublicBus = PeopleInOtherTransport % 11;
    if( PeopleInOtherTransport >= 11){
        let publicBusCost = peopleInPublicBus * publicBusFare;
        return publicBusCost;
    }
    else if (typeof people !== 'number'){
        return 'enter a number please!!!!'
    }
    else {
        return PeopleInOtherTransport * publicBusFare;
    }
}
let sumOfPeople = 10;
const publicBusFee = publicBusFare(sumOfPeople);
console.log(publicBusFee);