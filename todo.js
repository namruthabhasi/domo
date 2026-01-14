// // let btn =document.querySelector('#btn')
// // //document.getElementId("btn")
// // btn.addEventListener("click",additem)
// const additem=()=>{
//     //step1. Read user input from textbox
//     let userinput=document.querySelector("input").value//testcontent(can't ne used here)
//     console.log(userinput);
//     let listitem=document.createElement("li")
//     listitem.textContent=userinput
//     console.log(listitem);


// }
// let btn=document.querySelector('#btn')
// btn=additem.addEventListener("Click",additem)

let btn = document.querySelector("#btn");
function additem(){
    //get the value
    let userinput = document.querySelector("#input").value

    //create a li
    let listitem = document.createElement("li");

    //add value as content to the li
    listitem.textContent=userinput;

    console.log(listitem);
    console.log(userinput);

    //target the list
    let list = document.querySelector("#todo");
    //append the item to the list
    list.appendChild(listitem);


}
btn.addEventListener("click", additem);
