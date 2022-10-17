document.querySelector('button').addEventListener('click', getPic)
function getPic(){


let page = Math.floor(Math.random()*20)
console.log(page)

fetch(`https://api.harvardartmuseums.org/object?size=1&page=${page}&apikey=20aa8fd2-d064-4bb1-b9b5-b7e0a652e31b`)



.then( res => res.json())
.then( data =>{
    console.log(data)
    document.querySelector('img').src= data.records[0].images[0].baseimageurl
    document.querySelector('h3').innerText = data.records[0].culture
    document.querySelector('h2').innerText = data.records[0].description
})
}