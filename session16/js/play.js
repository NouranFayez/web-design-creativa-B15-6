// const data = document.querySelector("#data")

// const div = document.createElement("div")

// data.appendChild(div)

// div.textContent = "test"
// div.className= "col-md-4 bg-dark text-white"
// div.style.height = "500px"
// div.setAttribute("id", "test")

// const all = [
// {
// userId: 1,
// id: 1,
// title: "delectus aut autem",
// completed: false
// },
// {
// userId: 1,
// id: 2,
// title: "quis ut nam facilis et officia qui",
// completed: false
// },
// {
// userId: 1,
// id: 3,
// title: "fugiat veniam minus",
// completed: false
// },
// {
// userId: 1,
// id: 4,
// title: "et porro tempora",
// completed: true
// },
// {
// userId: 1,
// id: 5,
// title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
// completed: false
// },
// {
// userId: 1,
// id: 6,
// title: "qui ullam ratione quibusdam voluptatem quia omnis",
// completed: false
// },
// {
// userId: 1,
// id: 7,
// title: "illo expedita consequatur quia in",
// completed: false
// },
// {
// userId: 1,
// id: 8,
// title: "quo adipisci enim quam ut ab",
// completed: true
// },
// {
// userId: 1,
// id: 9,
// title: "molestiae perspiciatis ipsa",
// completed: false
// },
// {
// userId: 1,
// id: 10,
// title: "illo est ratione doloremque quia maiores aut",
// completed: true
// }
// ]

            // <div class="col-md-4 col-12 p-3">
            //     <div class="p-3 border border-3 border-success">
            //         <h3>name</h3>
            //         <p>body</p>
            //     </div>
            // </div>

// const createMyEle = (newEle, parent, classes, txt) => {
//     let myEle = document.createElement(newEle)
//     parent.appendChild(myEle)
//     if(classes) myEle.className = classes
//     if(txt) myEle.textContent = txt
//     return myEle
// }

// all.forEach(el=>{
//     let x = `            <div class="col-md-4 col-12 p-3">
//                 <div class="p-3 border border-3 border-success">
//                     <h3>${el.title}</h3>
//                     <p>${el.body}</p>
//                 </div>
//             </div>
// `
// data.innerHTML +=x

    // let outerDiv = document.createElement("div")
    // outerDiv.className = "col-md-4 col-12 p-3"
    // data.appendChild(outerDiv)
    
    // let innerDiv = document.createElement("div")
    // innerDiv.className = "p-3 border border-3 border-success"
    // outerDiv.appendChild(innerDiv)

    // let h3 = document.createElement("h3")
    // innerDiv.appendChild(h3)
    // h3.textContent = el.title

    // let p = document.createElement("p")
    // innerDiv.appendChild(p)
    // p.textContent = el.id
  
//     let outerDiv = createMyEle("div", data, "col-md-4 col-12 p-3")
//     let innerDiv = createMyEle("div", outerDiv, "p-3 border border-3 border-success")
//     createMyEle("h3", innerDiv,null, el.title)
//     createMyEle("h4", innerDiv,null, el.id)
    
// })





// let x = [1,2, 3 ,4 ,5 ]

// let user = { name:"", id:1 }

// user["name"]
// user.name
// x[1]

// console.log("gsvjg")


// document.write("test")

// document.querySelector("div div")

// e.textContet
// e.innerText
// e.innerHTML
// e.classList => add remove toggle 
// e.className

// e.href
// e.style.fontSize = "15px"
// e.id

// e.setAttribute("id", "test")



// data-id.  data-title data-

// e.getAttribute("data-id")



// li = document.createElement("li")
// div.appendChild(li)

// li.remove()



// let da= [1,2,3]
// da.forEach(el=>{

// })

const images = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "images/1.png",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "images/1.png",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "images/1.png",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "images/1.png",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "images/1.png",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "images/1.png",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "images/1.png",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "images/1.png",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "images/1.png",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  }
]

// <div class="col-4 p-3">
// <img src="images/1.png" class="img-fluid" alt="title" title="test">
// </div>

const data = document.querySelector("#data")

images.forEach(image => {
    
    let div = document.createElement("div")
    div.setAttribute("class", "col-4 p-3")
    data.appendChild(div)

    let img = document.createElement("img")
    // img.setAttribute("class", "img-fluid")
    // img.setAttribute("title", "test")
    // img.setAttribute("src", image.url)
    // img.setAttribute("alt", image.title)
    let attrs = {
        class:"img-fluid", 
        "title":"test",
        "src": image.url,
        alt: image.title
    }
    for( key in attrs ) img.setAttribute(key, attrs[key])
    div.appendChild(img)

    create(div, "img", attrs)
})


let a = {
    class:"img-fluid",
"title": "test",
"src": "image.url",
"alt": "image.title"
}
let x = [
    {a:"class", val:"abc"},

]
for( key in a){
    console.log( key, " - ", a[key]);
    
}