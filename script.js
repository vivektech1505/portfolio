let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner")

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night")
})
let typingEffect = new Typed("#text",{
    strings:["Amit Kumar","Vivek Kumar", "Abhishek Kumar", "Sumit Kumar","Abhay Kumar"],
    loop:true,
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000

})