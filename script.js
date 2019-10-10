let newsArticles = []; //news will be array
let pageNum = 1;

async function fetchNews() {
    let result = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=fa50e2d61b944b89beebac65762240de&page=${pageNum}`); //call url and wait until if finds url and upload
    console.log("fetch url result", result);
    let data = await result.json(); //find the url json's key information
    console.log("call json info of fetched url", data);
    news = data.articles; //articles is one of the key of json (object). 
    //news will take the articles value.
    newsArticles = newsArticles.concat(news);
    updateNews(newsArticles);
    console.log ('pageNum',pageNum)
    pageNum = pageNum + 1 
    console.log ('pageNumpageNum',pageNum)
}

function updateNews(newsArr) {
    document.getElementById("numArticle").innerHTML = `Number of articles: ${newsArticles.length}`;
    const html = newsArr.map(article => { //here article is for refering to each element of news array (doesnt have meaning).
        return `
        <div id="news">
          <div id="newsList">
            <h2 id="title"> ${article.title} </h2>
            <p id="content"> ${article.description} </p>
            <div id="source"> ${article.source.name}</div>
            <div id="date"> ${moment(article.publishedAt).startOf('hour').fromNow()} </div>
            <a href= ${article.url}> View more </a>
        </div>
            <img id ="image" src= "${article.urlToImage}">
        </div>
        `
    })
    document.getElementById("board").innerHTML = html.join('');
}

fetchNews();



// function filterName() {
//     let source = newsArticles.source.name;
  
//     }
// }


// function uploadMore() {
//     let news = data.articles;
//     news.length == 38; 
//     updateNews(news);
// }


