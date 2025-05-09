//Hamburger icon toggle
const navicon = document.querySelector(".hamburger i");
const navbar= document.querySelector('.nav .pages');
if (navicon){
    navicon.addEventListener('click',() => {
        navbar.classList.toggle("active");
    });
}

//Scroll animation
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});
const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el)=> observer.observe(el));

const observer2 = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});
const hidden2 = document.querySelectorAll(".hidden2");
hidden2.forEach((el)=> observer2.observe(el));

//Switch image in product details page
function swapImg(picNum){
    let bigImg = document.querySelector(".largepic img");
    let miniImg = document.querySelector(`.minipic .${picNum}`);
    bigImg.src=`${miniImg.src}`;
}
 
// Open product detail page from shop
