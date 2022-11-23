let allTotal = 0 

function addToCart(element) {
    let mainEl = element.closest(".single-item")
    let price = mainEl.querySelector(".price").innerText
    let name = mainEl.querySelector("h3").innerText
    let quantity = mainEl.querySelector("input").value
    let cartItems = document.querySelector(".cart-items")

    quantity = parseInt(quantity)
    price = price.substring(1)
    price = parseInt(price)

    if(quantity > 0) {
        let totalPrice = price * quantity
        allTotal += totalPrice
       

        cartItems.innerHTML += `<div class="cart-single-item"> 
        <h3> ${name}</h3>
        <p>  $${totalPrice} x ${quantity}= $<span>${totalPrice}</span></p>
        <button onclick="removeFromCart(this)">Ukloni</button>
        </div>`;
    
    document.querySelector(".total").innerText = 'Total price: $' + allTotal

    element.innerText = "Added"
    element.setAttribute("disabled", "true")

} else {
    alert("Choose a quantity")
}
}

function removeFromCart (element) {
    let mainEl = element.closest(".cart-single-item")
    let price = mainEl.querySelector("p span").innerText
    let name = mainEl.querySelector("h3").innerText
    let bags = document.querySelectorAll(".single-item")

    allTotal = allTotal - price;
    document.querySelector('.total').innerText = `Ukupno $${allTotal}`; 
  
    
    mainEl.remove()

    bags.forEach( function (bag) {  
        
        let itemName = bag.querySelector('.si-content h3').innerText;
        
        console.log(itemName);

        if(itemName === name) {
           
            bag.querySelector(".actions input").value = 0
            bag.querySelector(".actions button").removeAttribute("disabled")
            bag.querySelector(".actions button").innerText = "Add"
        }
    });
}
