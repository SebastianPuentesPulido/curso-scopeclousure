// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins+=coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(3);

function moneyBox() {
    let savedCoins = 0;
    function countCoins(coins) {
        savedCoins += coins;
        console.log(`MoneyBox: $${savedCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(4);
myMoneyBox(12);

console.log("\n Ana: \n");
const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);