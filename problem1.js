
function maximumBuyProduct(money, productPrice) {
//    mengurutkan harga product dari yang terkecil
    productPrice.sort((a,b)=> a - b);
    let count = 0; 
    for (let price of productPrice) {
        if (money >= price) {
            count++;
            money-=price
        } else {
            break;
        }
    }
     return count;    
    }

    
    console.log(maximumBuyProduct(50000, [25000, 25000, 10000, 14000]))      
    console.log(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])) 
    console.log(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000]))  
    console.log(maximumBuyProduct(4000, [7500, 3000, 2500, 2000]))          
    console.log(maximumBuyProduct(0, [10000, 30000]))     
  
 