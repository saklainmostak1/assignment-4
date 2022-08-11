// Ans number 1:
// Convert radian to degree :
//-------------------------//

function radianToDegree(radian){
    if(typeof radian !== 'number'){
       return ('Enter a number please!!!')
    }
    else{
        const degree =  57.2958 * radian;
        return degree;
    }

}
const totalRadian = radianToDegree(100);
console.log(totalRadian);

// End //
//-----------------------------//

// Ans number 2:
// Is javascript file or not //
//--------------------------///

function isJavaScriptFile(file){
    if  (typeof file !== 'string'){
        return "Enter a file name please!!!!"
    }
    else if ( file.endsWith('.js') ){
        return true;
    }
    else {
        return false;
    }
}
let fileName = isJavaScriptFile('java.js');
console.log(fileName);

// End //
//-----------------------------------//

// Ans number 3:
//total oil price //
//------------------------------//
function oilPrice(dieselQuantity, petrolQuantity, octenQuantity){
    if(typeof dieselQuantity == 'number' && typeof petrolQuantity == 'number' && typeof octenQuantity == 'number'){

        const dieselPrice = 114;
        const petrolPrice = 130;
        const octenPrice = 135;
    
        const totalDieselPrice = dieselQuantity * dieselPrice;
        const totalPetrolPrice = petrolQuantity * petrolPrice;
        const totalOctenPrice  = octenQuantity  * octenPrice;
        // console.log( totalDieselPrice, totalPetrolPrice, totalOctenPrice);
    
        const totalCost = totalDieselPrice + totalPetrolPrice + totalOctenPrice;
        return totalCost;
    }
    else{
        return ' Enter a number please!!!!'
    }
}
const totalOil = oilPrice(2, 4, 3);
console.log(totalOil);

//End //
//-------------------------///
// Ans number 4:
// best friends or not //
//------------------------------//
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
let sumOfPeople = 100;
const publicBusFee = publicBusFare(sumOfPeople);
console.log(publicBusFee);

// End//
//----------------------//

// Ans number 5:
// best friends or not //
//------------------------------//
function isBestFriend(friends1, friends2){
    if ( typeof friends1 !== 'object' && typeof friends2 !== 'object' ){
        return 'Enter a object please!!!';
    }
    else if (friends1.friend === friends2.name && friends2.friend === friends1.name) {
        return true;
    }
    else{
        return false;
    }
}
let guys1 = { name: 'shanto', friend: 'saklain' };
let guys2 = { name: 'saklain', friend: 'shanto' };

const bestFriendOrNot = isBestFriend(guys1, guys2);
console.log(bestFriendOrNot);

// end //
//--------------------------------//