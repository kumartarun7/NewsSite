

window.addEventListener("load",()=>fetchnews("general"))

 async function fetchnews(query){

let res = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${query}/in.json`);
let data = await res.json();


console.log(data)


binddata(data.articles)


}





function binddata(results){


  const cardsContainer = document.getElementById("container");
  const newsCardTemplate = document.getElementById("card");


    results.forEach((results) => {
      if(!results.urlToImage) return;


      const card = document.getElementById("card");

    const clone = card.cloneNode(true);
    filldata(clone,results)
    document.getElementById("container").appendChild(clone);
    });


}


function filldata(clone,result){

const image = clone.querySelector("#image")
const des= clone.querySelector("#des")
const date = clone.querySelector("#date")
const title= clone.querySelector("#title")

image.src= result.urlToImage
des.innerHTML=result.description
title.innerHTML=result.title

const Date1 = new Date(result.publishedAt).toLocaleString("en-US",{timeZone: "Asia/Jakarta"})

date.innerHTML = `${result.source.name}____${Date1}`


clone.firstElementChild.addEventListener("click",()=>{

  window.open(result.url,"_blank")
})

des.addEventListener("click",()=>{

  window.open(result.url,"_blank")

 })

 title.addEventListener("click",()=>{

  window.open(result.url,"_blank")

 })



}


const main = document.getElementById("main")
const html=`<div
id="container"
style="
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  margin-top: 50px;
  column-gap: 25px;
  background-color: aliceblue;
  
"
>




<div hidden="hidden">
<div
  id="card"
  
>
  <img
    src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
    alt="image"
    id="image"
    
  />
 
 <p id="title" style="padding-left: 20px; padding-top: 20px; font-size: large; font-weight: bold;">Title</p>

   <br>
  
  <p id="date"   style="font-size: small; font-weight: bolder; text-align: left; padding-left: 20px;">Date</p>
  <br>
  <p  id="des"         style=" font-size: medium; text-align: left; padding-left: 20px; ">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
    maiores asperiores minima aspernatur ducimus culpa quia
    consequuntur. Omnis, velit architecto.
  </p>
</div>

</div>















</div>`




function search(query){
  const element = document.getElementById("container");
element.remove();

main.insertAdjacentHTML("afterbegin",html)

  fetchnews(query)
}





const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    search(query);
});






//search("health")

// `${url}${query}&apiKey=${API_ID}`

// window.addEventListener("load",()=>fetchnews("India"))









 