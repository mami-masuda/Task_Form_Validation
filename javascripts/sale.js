const productElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function Product(id, name, price) {
  this.id = id;
  this.name = name;
  this.price = price;
}

const products = [
  new Product(0, 'オリジナルブレンド200g', 500),
  new Product(1, 'オリジナルブレンド500g', 900),
  new Product(2, 'スペシャルブレンド200g', 700),
  new Product(3, 'スペシャルブレンド500g', 1200)
];

function add() {
  const productID = parseInt(productElement.value);
  const number = parseInt(numberElement.value);

  let flag = true

  let purchase = {
    id: productID,
    name: products[productID].name,
    price: products[productID].price,
    number: number,
  };

  purchases.forEach(function (element) {
    if (element.id == purchase.id) {
      element.number += purchase.number;
      flag = false;
    }
  }
  );

  if (flag) {
    purchases.push(purchase);
  }

  window.alert(`${display()}\n\n小計${subtotal()}円`);
}

function display() {
  return purchases.map(purchase => `${purchase.name} ${purchase.price}円が${purchase.number}点`).join('\n');
}

function subtotal() {
  return purchases.reduce((prev, purchase) => { return prev + purchase.price * purchase.number }, 0);
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()}\n\n小計は${sum}円、送料は${postage}円で、合計は${sum + postage}円です。`);
  purchases = [];
  productElement.value = "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}