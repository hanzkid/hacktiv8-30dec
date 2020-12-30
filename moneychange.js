function getMoneyChange(money) {
  //your code here

  let moneyStockArr = Object.entries(moneyStocks);

  let moneyStock = moneyStockArr.reduce((money, curr) => Number(money) +  Number(curr[0] * curr[1]),0);

  if(money > moneyStock){
      console.log("Maaf uang kembalian tidak cukup");
      console.log('----------')

      return;
  }
  let moneyOuput = {};
  while(money >= 500 && moneyStock >= 500){  
    for(let i=moneyStockArr.length - 1;i>=0;i--){
        if(money >= moneyStockArr[i][0] && moneyStockArr[i][1] > 0){
            money -= moneyStockArr[i][0];
            moneyStockArr[i][1]--;
            if(!moneyOuput[moneyStockArr[i][0]]){
                moneyOuput[moneyStockArr[i][0]] = 0;
            }
            moneyOuput[moneyStockArr[i][0]]++;
            break;
        }
    }
  }
  let moneyOuputArr = Object.entries(moneyOuput);
  moneyStockArr.forEach(v => moneyStocks[v[0]] = v[1]);

  if(moneyOuputArr.length == 0){
      console.log("Maaf uang kembalian tidak cukup");
      console.log('----------')

      return;
  }
  for(let i=moneyOuputArr.length - 1;i>=0;i--){
      console.log(`${moneyOuputArr[i][0]} ${moneyOuputArr[i][1]} lembar`);
  }
  console.log('----------')

//   return moneyStock;
  
}

const moneyStocks = {
  100000: 1,
  50000: 2,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
}

// console.log(getMoneyChange(1));

getMoneyChange(75000)
/*
  50000 1 lembar
  20000 1 lembar
  5000 1 lembar
*/

getMoneyChange(190000)
/*
  100000 1 lembar
  50000 1 lembar
  20000 2 lembar
*/

getMoneyChange(190000)
/*
  Maaf uang kembalian tidak cukup
*/

getMoneyChange(100000)
/*
  20000 1 lembar
  10000 5 lembar
  5000 4 lembar
  1000 10 lembar
*/

getMoneyChange(400)
/*
  Maaf uang kembalian tidak cukup
*/

console.log(moneyStocks)
/*
{ '500': 5,
  '1000': 0,
  '5000': 0,
  '10000': 0,
  '20000': 0,
  '50000': 0,
  '100000': 0 
}
*/
