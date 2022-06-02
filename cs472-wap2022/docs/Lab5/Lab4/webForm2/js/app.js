/**app.js */
let addButton = document.getElementById("addProduct");
addButton.addEventListener("click", addNewProductForm);
function addNewProductForm(){
   let product_no = document.getElementById("product_no");
   let quantity = document.getElementById("quantity");
   let name = document.getElementById("name");
   let supplier = document.getElementById("supplier");
   let unit = document.getElementById("unit");
   let date = document.getElementById("date");

   alert(
     `
      Product no:  ${product_no.value} 
      Quantity: ${quantity.value} 
      Name: ${name.value} 
      Supplier: ${supplier.value} 
      Unit Price: ${unit.value}
      Date: ${date.value}
      `
   );
}