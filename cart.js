
export let cart  = JSON.parse(localStorage.getItem('cart'));  
if(!cart){

}
export function saveTostorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addOnCart(productID){
let xitem ='';
if(productID === cart.pid){
  xitem = cart.pid;
}
if(xitem){
  cart.quantity+=1;
}
else{
  cart.push({
    pid: productID,
    quantity: 1    
  });
}

saveTostorage();
}
export function removeCart(proDuctID){
  const newarr = [];
  cart.forEach((citem)=>{
if(citem.pid!==proDuctID){
    newarr.push(citem);
  }
  });
  cart = newarr;

  saveTostorage();
}