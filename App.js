
































/* const divC = document.getElementsByClassName("C")[1];

const divId = document.getElementById("Phyt");

const divtg = document.getElementsByTagName("div")[0,1,2,3];
 
const divCq = document.querySelectorAll("#Phyt");

divCq.forEach((x)=>{
    console.log(x);
}) */

// let ul = document.createElement("ul");

// document.body.appendChild(ul)




// let li = document.createElement("li")
// li.innerText = "Hello World"

// ul.appendChild(li)

// console.log(ul);



// let li = document.querySelector("ul");

// console.log(li.children[0]);






// console.log(div.setAttribute("style","background-color: yellow; padding:30px"));

// console.log(div.hasAttribute("style"));

const btn = document.querySelector("button")
// let count = document.querySelector(".count");
// let newcount = 0;
// console.log(count);


let div = document.querySelector("div")

btn.addEventListener("click" , ()=> {
//  newcount+=1;
//  div.style.backgroundColor = "blue"
//  count.innerHTML = newcount;

if(div.getAttribute("style") == "background-color: green;"){
    div.setAttribute("style" ,"background-color: blue;")
}else {
    div.setAttribute("style" ,"background-color: Yellow;")
}

})









































