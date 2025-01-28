const reviews = [
    {
        id:1,
        name:"Batman",
        job:"React developer",
        img:"batman.jpg",
        text:"Builds dynamic user interfaces using React. Focuses on component-based architecture, state management, and hooks. Ensures responsive design and seamless user experience."
    },
    {
        id:2,
        name:"superman",
        job:"angular developer",
        img:"superman.jpg",
        text:"Develops robust web applications using Angular. Utilizes TypeScript, two-way data binding, and dependency injection. Creates modular, maintainable code with a focus on performance."
    },
    {
        id:3,
        name:"black adam",
        job:"express developer",
        img:"black adam.jpg",
        text:"Creates server-side applications using Express.js.Manages routing, middleware, and RESTful APIs. Ensures efficient handling of HTTP requests and seamless integration with databases."
    },
    {
        id:4,
        name:"wonder woman",
        job:"javascript developer",
        img:"wonder woman.jpg",
        text:"Writes versatile code for web applications. Proficient in ES6+, DOM manipulation, and asynchronous programming. Ensures cross-browser compatibility and enhances user interactions."
    }
]

const image = document.getElementById("img")
let title = document.getElementById("title")
let profile = document.getElementById("profile")
let text = document.getElementById("about")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const randomBtn = document.getElementById("random")

let currentItem = 0

function showPerson(){
    title.innerHTML = reviews[currentItem].name
    profile.innerHTML  = reviews[currentItem].job
    text.innerHTML = reviews[currentItem].text
    image.src = reviews[currentItem].img
}

nextBtn.addEventListener("click", (e)=>{
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson()
})
prevBtn.addEventListener("click", (e)=>{
    currentItem--
    if(currentItem < 0 ){
        currentItem = 3
    }
    showPerson()
})

randomBtn.addEventListener("click",(e)=>{
    currentItem = Math.floor(Math.random()* reviews.length)
    showPerson()
})