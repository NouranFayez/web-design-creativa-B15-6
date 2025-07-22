// let x = document.getElementsByTagName("div")
// console.log(x);
// x[1].textContent = "hello"
// x = document.getElementsByClassName("col-md-4")
// console.log(x);
// x = document.getElementById("test")
// console.log(x);
// let x = document.querySelector(".col-md-4")
// console.log(x);
// let div = document.querySelector("#test")
// div.textContent += " all"
// console.log(div.textContent);
// console.log(div.innerText);
// console.log(div.innerText == "hello all")
// console.log(div.textContent == "hello all")
// div.innerHTML = "<h1>hello</h1>"



let test = document.querySelector("#test")
// console.log(test.classList);
// console.log(test.className)

// test.classList.remove("text-white")
// test.classList.add("text-danger")
// test.classList.toggle("text-white")

// test.className += " text-success"
const myBtn= document.querySelector("#myBtn")
myBtn.addEventListener("click", function(e){
    console.log(e.target);
    console.log(myBtn);
    console.log(this);
    // console.log("hello")
    test.classList.toggle("d-none")
    // this.innerText = "hide"
    this.innerText == "show" ? this.innerText = "hide" : this.innerText = "show"
    test.classList.toggle("bg-danger")
    test.classList.toggle("bg-success")
})