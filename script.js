function fetchData(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=69d4a87fe1f442b98124db378354116d')
    .then((res)=>{
        res.json()
    })
    .then(data=>{
        CreateData(data.articles)
    })
}



console.log(CreateData(articles))