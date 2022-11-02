const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting);
        // if (entry.isIntersecting){observer.unobserve(entry.target)}
    })
},{
    threshold:.5,
})
cards.forEach(card=>{
    observer.observe(card)
})

const visited = document.querySelector(".visited");
const divObserver = new IntersectionObserver(items=>{
    items.forEach(item=>{
        item.target.classList.toggle("display",item.isIntersecting)
    })
},{
    threshold:.5,
})
divObserver.observe(visited);

let timesVisited = localStorage.getItem("neVisit");
const valueVisit = document.querySelector("#timesVisited");
if(timesVisited > 0){
    valueVisit.textContent = timesVisited;
}else{
    valueVisit.textContent = 0;
}
timesVisited++
localStorage.setItem("neVisit",timesVisited)

const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector("#nav")
const displayEvent=()=>{
    navigation.classList.toggle("show1");
    hamburger.classList.toggle("display");
}
hamburger.addEventListener("click",displayEvent)

const newImages = document.querySelectorAll(".image[data-src]");

const imageObserver = new IntersectionObserver((callback)=>{
    callback.forEach(image=>{
        image.target.setAttribute("src",image.target.getAttribute("data-src"));
        image.target.onload=()=>{
            image.target.removeAttribute("data-src");
        }
        if(image.isIntersecting){imageObserver.unobserve(image.target)}
    })
})

newImages.forEach(image=>{
    imageObserver.observe(image)
})