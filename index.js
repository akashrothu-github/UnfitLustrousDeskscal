// You are given an object product with the properties id, name, price, and category. Perform the following operations:
// 1.	Access the price property and print it.
// 2.	Modify the category property to “Electronics”.
// 3.	Add a new property inStock to the product object with the value true.
// 4.	Delete the id property from the product object.
var product={
  id:1,
  name:"laptop",
  price:20000,
  category:"electronics"
}
console.table(product);
console.log(product.price);
console.table(product);
product.category="Electronics";  
console.table(product);
product.inStock=true;
console.table(product);
delete product.id;
console.table(product);
console.table(product);
console.table(product);
console.table(product);