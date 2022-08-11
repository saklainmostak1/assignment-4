function isBestFriend(friends1, friends2){
    if  ( typeof friends1 !== 'object' && typeof friends2 !== 'object' ){
        return 'enter a object';
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
// let guys1 = 10;
// let guys2 = 20;
const bestFriendOrNot = isBestFriend(guys1, guys2);
console.log(bestFriendOrNot);
