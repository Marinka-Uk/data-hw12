const list = document.querySelector('ul')












function fetchArticles(){
   return fetch ('https://newsapi.org/v2/everything?q=tesla&from=2024-11-14&sortBy=publishedAt&apiKey=3ce63eea477043d7a470d2b21dc5ab4b')
    .then((response)=>{
       return response.json()
    })
}
fetchArticles()
.then((result)=>{
    console.log(result);
})

/* <li>
<h2></h2>
<p></p>
</li> */