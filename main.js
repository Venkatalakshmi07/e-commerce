let dataStore = [
    { id:1, img :"girls-wear.jfif", title :"girls-wear", price:500 , rating:"5-stars"},
    {id:2, img :"1.webp", title :"women-wear", price:1000 , rating:"4-stars"},
    { id:3, img :"children-wear.jfif 1.jpg", title :" children-wear", price:500 , rating:"5-stars"},
    {id:4, img :"u3x3k_256.webp", title :"girls-wear", price:1000 , rating:"4-stars"},
    { id:5, img :"7vifo_512.jpg", title :"girls-earrings", price: 80, rating:"5-stars"},
    { id:6, img :"stock-photo-sexy-girl-with-heart-bracelet-on-her-wrist-visual-that-can-be-used-in-e-commerce-online-sales-and-2103488996.jpg", title :"", price:1000 , rating:"5-stars"},
    {id:7, img :"girls-footwear.jfif", title :"girls-footwear", price: 500, rating:"4-stars"},
    { id:8, img :"smart-watches.jfif", title :"smart-watches", price: 2700, rating:"5-stars"},
    { id:9, img :"kurta-wear.jfif", title :"kurta-wear", price: 750, rating:"5-stars"},
    { id:10, img :"avaasa-wear.jfif", title :"avaasa-wear", price: 800, rating:"4-stars"},
    {id:11, img :"images.jfif", title :"children-wear", price: 500, rating:"5-stars"},
    {id:12, img :"kids-images.jpg", title :"children-wear", price: 800, rating:"4-stars"},
  
  
];
let data = "";
dataStore.map(function myFunction(items){
data += `
<div class="col-lg-4" data-id="${items.id}">
<div class="e-commerce-cards">
<h6>id:- ${items.id}
<img src=${items.img} alt="">
<h4>title:- ${items.title}</h4>
<h6>price:- ${items.price}</h6>
<p>rating:- ${items.rating}</p>
<button onclick="addToCart(${items.id})">Add To Cart</button>
</div>
</div>
`
document.querySelector(".e-commerce-cards").innerHTML = data;
});
function deleteButton(id){
    const deleteItems = document.querySelector(`[data-id="${id}"]`);
    deleteItems.style.display = "none";
const filterArray = dataStore.filter(function filterFunction(items){
return items.id !== id;
});
dataStore = filterArray;
console.log(dataStore );
};

// present date
// const date = new Date();
// console.log(date);
// // particular date
// console.log(new Date("2021-05-23"));
// // with time
// console.log(new Date(2012,15,40,40,25,30,0));
// // only year
// console.log(new Date("2015"));
// get methods
// get present year
// const d = new Date();
// const year = d.getFullYear();
// console.log(year);
// present month
// const d = new Date();
// const month = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"];
// const year = month[ d.getMonth()]; 
// console.log(year);
// get hour
// const d = new Date();
// const hour =  d.getHours(); 
// console.log(hour);
// get dates
// const d = new Date();
// const day =  d.getDate();
// console.log(day);
// get minutes
// const d = new Date();
// const minutes =  d.getMinutes();
// console.log(minutes);
// get seconds
// const d = new Date();
// const seconds =  d.getSeconds();
// console.log(seconds);
// get milliseconds
// const d = new Date();
// const milliseconds =  d.getMilliseconds();
// console.log(milliseconds);
// set methods
// set year
// const d = new Date();
// const setyear = d.setYear(2021);
// console.log(d);
// set month
// const d = new Date();
// const setmonth = d.setMonth(10);
// console.log(d);
// set date
// const d = new Date();
// const setdate = d.setDate(28);
// console.log(d);
// set minutes
// const d = new Date();
// const setminutes = d.setMinutes(57);
// console.log(d);
// set hour
// const d = new Date();
// const sethour= d.setHours(11);
// console.log(d);
// set seconds
// const d = new Date();
// const setsecond= d.setSeconds(0);
// console.log(d);
// math methods
//round  method
console.log(Math.round(-3.5));
// ceil method
console.log(Math.ceil(4.2));
// floor method
console.log(Math.floor(5.7));
// trunc method
console.log(Math.trunc(7.6));
// sign method
console.log(Math.sign(3.5));
// random method
console.log(Math.random(-3.5));
console.log( Math.floor(Math.random()*10));
// sqrt method
console.log(Math.sqrt(196));
// power method
console.log(Math.pow(5,3));
// absoulte method
console.log(Math.abs(-3.5));
// math minimum
const array = [2334 ,2345 ,9750 ,764648];
console.log(Math.min.apply(null,array));
// math maximum
const array1 = [2334 ,2345 ,9750 ,764648];
console.log(Math.max.apply(null,array1));
// set time out
setTimeout(function myFunction(){
    console.log("Tripurna");
},7000);
// set interval
  setInterval(function myFunction(){
    console.log("Tripurna");
},3000);
// clear interval
const interval = setInterval(function myFunction(){
    console.log("Tripurna");
},14000);
setTimeout(function myFunction(){
    clearInterval(interval);
},7000);
// switch statement
const date = new Date().getDay();
let dates;
switch(date){
    case 0:
        dates="sunday"
        break
    case 1:
        dates="monday"
        break
    case 2:
        dates="Tuesday"
        break
    case 3:
        dates="wednesday"
        break
    case 4:
        dates="thursday"
        break
    case 5:
        dates="friday"
        break
    case 6:
        dates="saturday"
        break
        default:
        dates = "Tripurna"

}
console.log(dates);
const button = document.querySelector(".click-button");
window.addEventListener("scroll", function myFunction(){
    if(window.pageYOffset > 100){
        button.classList.add("click-button-active")
    }else{
        button.classList.remove("click-button-active") 
    }
});
// loop statement
// for loop
for(let i=0;i<10;i++)
{
    console.log(i);
}
// while loop
let i=0;
while(i<10){
    console.log(i);
    i++;
};
// dowhile loop
let x=0;
do{
    console.log(x);
    x++;
}
while(x<20);
// DOM intro
// const todo = document.querySelector(".todo");
// const div = document.createElement("div");
// const ul = document.createElement("ul");
// const li = document.createElement("li");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// li.innerText = "home";
// li1.innerText = "aboutus";
// li2.innerText = "contact";
// li3.innerText = "gallery";
// ul.appendChild(li);
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// div.appendChild(ul);
// ul.className = "unorderlist";
// div.className = "divison";
// todo.appendChild(div);
// li3.remove();


const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", function myFunction(e){
    e.preventDefault();
    const div = document.createElement("div");
    const li = document.createElement("li");
    const button = document.createElement("button");
    const complete = document.createElement("button");
    li.innerText = todoInput.value;


    div.appendChild(button);
    div.appendChild(complete);
    div.appendChild(li);
    button.innerText = "Delete";
    complete.innerText = "complete";
    button.addEventListener("click", function myFunction(){
        div.classList.toggle("delete-button");
    });
    complete.addEventListener("click", function myFunction(){
        li.classList.toggle("complete-active");
    });
    todoList.appendChild(div);
    todoInput.value="";
});
let emptyList = [];

// cart function
const cartItem = document.querySelector(".cart-items");
function cartIcon(){
    cartItem.classList.toggle("cart-items-active");
    if(emptyList.length === 0){
        document.querySelector(".cart-list").innerHTML = `<img src="empty cart.png">`;
    }else{
        let cards = "";
        emptyList.map(function myFunction(items){
        cards += `
    <div  data-id="${items.id}">
    <div class="cart-items-list d-flex justify-content-between align-items-center">
    
    <img src=${items.img} alt="">
  <div>  <h4>title:- ${items.title}</h4>
  <h6>price:- ${items.price}</h6></div>
    <i class="fa-solid fa-circle-xmark" onclick="deleteButton(${items.id})"></i>
    </div>
    </div>
    `
    document.querySelector(".cart-list").innerHTML = cards;
    });
    }
    
};
// Add to cart button
function addToCart(id){
const findItems = dataStore.find(function findList(items){
    return items.id === id;
});
if(findItems){
    const findItem = emptyList.findIndex(function indexFunction(items){
        return items.id === id;
        
    });
    if(findItem !== -1){
        alert("already item in the cart")
    }else{
        emptyList.push(findItems);
        console.log(emptyList);
    }
}

document.querySelector(".list-quantity").innerHTML = emptyList.length;
};
 function deleteButton(id){
    const cartItem = document.querySelector(`[data-id="${id}"]`);
    cartItem.style.display = "none";
    const filterArray = emptyList.filter(function filterFunction(items){
        return items.id !== id;
    });
    emptyList = filterArray;
    document.querySelector(".list-quantity").innerHTML = emptyList.length;

 }; 







