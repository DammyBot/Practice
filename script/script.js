const imageData = document.querySelectorAll("img[data-src]");

const conversion = (image) => {
    image.setAttribute("src",image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    }
}

if ("IntersectionObserver" in window){
    const observer = new IntersectionObserver((items,observer) => {
        items.forEach((item) => {
            if (item.isIntersecting){
                conversion(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imageData.forEach((item)=>{
        observer.observe(item)
    })
}else{
    imageData.forEach((image) => {
        conversion(image);
    })
}