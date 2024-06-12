interface Product{
name:string,
price:number,
quantity:number,

}
class ShoppingCart{
private items:CartItem[]//allowing a security feature that only get the items not to add items 

constructor(){
    this.items=[]
}
addItem(item:CartItem){
this.items.push(item)

}
getItems(){
    return this.items
}
totalPrice(){
    return this.items.reduce((acc,cartItem)=>{
        console.log("total price",cartItem.quantity*cartItem.price)
        return acc+(cartItem.quantity*cartItem.price)
    },0)

}


}
// const sc=new ShoppingCart()
// sc.getItems()

class CartItem implements Product{

    constructor(public name:string,public price:number,public quantity:number){//automatically instance is created now dont need to write this.name,this.price

    }


}
const cart=new ShoppingCart();
const product_buttons=document.querySelectorAll("button");
product_buttons.forEach((product_button,i)=>{
    const quantity_input=document.getElementById("input-quantity") as HTMLInputElement
   // const quantity_input2=document.getElementById("input-quantity2") as HTMLInputElement

 // const quantity_input=document.querySelectorAll(".quantity")[index] as HTMLInputElement;
    product_button.addEventListener('click',()=>{

        const name=product_button.getAttribute("data-name")
        const price=product_button.getAttribute("data-price")
        const quantity=quantity_input.value;
      
        console.log("quantity:",quantity)
        if(name && price && quantity){
            const cartitem=new CartItem(name,parseFloat(price),parseFloat(quantity))
            cart.addItem(cartitem)
        }
        renderData()

    })
})
const cartItems=document.getElementById("cartItems") as HTMLUListElement
const totalPrice=document.getElementById("totalPrice") as HTMLUListElement
const renderData=()=>{
    cartItems.innerText=""
    cart.getItems().forEach((item)=>[
        cartItems.innerHTML+=`<li>${item.name} &#x20b9; ${item.price}</li> quantity: ${item.quantity}`
    ])
    totalPrice.innerHTML=`&#x20b9;${cart.totalPrice()}`
}
