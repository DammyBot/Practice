// Display the hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector("#nav");
const hamburgerOnClick = () => {
    hamburger.classList.toggle("display");
    navigation.classList.toggle("show1");
}
hamburger.addEventListener("click",hamburgerOnClick)


// Lazy load the images
const allImages = document.querySelectorAll("img[data-src]");

const conversion = (images) =>{
    images.setAttribute("src",images.getAttribute("data-src"));
    images.onload=()=>{
        images.removeAttribute("data-src")
    }
}

const imageObserver = new IntersectionObserver((items,observer)=>{
    items.forEach(item=>{
        if(item.isIntersecting){
            conversion(item.target);
            observer.unobserve(item.target);
        }
    })
})

allImages.forEach(image=>{
    imageObserver.observe(image)
})


// Slide the images into view
const container = document.querySelectorAll(".container");
const conatainerObserver = new IntersectionObserver(items=>{
    items.forEach(item=>{
        item.target.classList.toggle("conShow",item.isIntersecting);
    })
},{
    threshold:.2,
})
container.forEach(con=>{
    conatainerObserver.observe(con);
})


// Display the card containers
const cards = document.querySelectorAll(".card");
const cardsObserver = new IntersectionObserver(items=>{
    items.forEach(item=>{
        item.target.classList.toggle("show",item.isIntersecting)
    })
},{
    threshold:1,
})
cards.forEach(card=>{
    cardsObserver.observe(card);
})

// Display number of times visited
const visited = document.querySelector(".visited");
const visitObserver = new IntersectionObserver(items=>{
    items.forEach(item=>{
        item.target.classList.toggle("display",item.isIntersecting)
    })
},{
    threshold:.2,
})
visitObserver.observe(visited)

// Show the number of times visited
const timesVisisted = document.querySelector("#timesVisited");
let value1 = Number(localStorage.getItem("value"));
if(value1>0){
    timesVisisted.textContent = value1;
}else{
    timesVisisted.textContent = 0
}
value1++;
localStorage.setItem("value",value1);