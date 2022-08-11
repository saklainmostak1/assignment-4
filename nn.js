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
        return ' enter a number please!!!!'
    }
}
const totalOil = oilPrice(1, 2, 3);
console.log(totalOil);