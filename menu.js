var pizza = document.querySelector('.pizza-container')
var salads = document.querySelector('.salads-container')
var starter = document.querySelector('.starter-container')

var pizzaBtn = document.querySelector('.pizza-page')
var saladsBtn = document.querySelector('.salads-page')
var starterBtn = document.querySelector('.starter-page')

saladsBtn.onclick = function(){
    pizza.style.display = "none";
    starter.style.display = "none";
    salads.style.display = "block";
    saladsBtn.id = "active-menu-page"
    pizzaBtn.removeAttribute('id')
    starterBtn.removeAttribute('id')
}

pizzaBtn.onclick = function(){
    salads.style.display = "none";
    starter.style.display = "none";
    pizza.style.display = "block";
    pizzaBtn.id = "active-menu-page";
    saladsBtn.removeAttribute('id')
    starterBtn.removeAttribute('id')
}

starterBtn.onclick = function(){
    pizza.style.display = "none";
    salads.style.display = "none";
    starter.style.display = "block";
    starterBtn.id = "active-menu-page"
    pizzaBtn.removeAttribute('id')
    saladsBtn.removeAttribute('id')

}