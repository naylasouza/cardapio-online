const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const carttModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("close-modal-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressImput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")


cartBtn.addEventListener("click", function(){
    carttModal.style.display = "flex"
})

carttModal.addEventListener("click", function(event){
    if(event.target === carttModal){
        carttModal.style.display = "none"
    }
})
closeModalBtn.addEventListener("click", function(){
    carttModal.style.display = "none"
})
