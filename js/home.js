

//the news api
const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ea3854e4a1442d0a682b18448030327';
//the fetch function
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  //getting all the data results in an object
  let authors = data.articles;
//creating an html title element from javascript
  let result = `<h9> Latest News</h9>`;
  //using for loop to go through the items and print them out
  authors.forEach((news) => {
    //accessing the object element for the required item
    const { urlToImage, title, description, content, publishedAt, author, url } = news
    //creating a div element on javascript and assigning it to a variable
    result +=
    `<div>
        <ul class="w3-ul">
            <img height="150%" width="600%"  src="${urlToImage}"/>
            <h8>${title}</h8>
            <p>${description}</p>
            <p>${content}</p>
            <i>${publishedAt}</i>
            <i>${author}<i>
            <a id="button" target="blank" href="${url}">Read more....</a>
        </ul>
    </div>`;
  //passing the variable to an html id to display our news results
    document.getElementById('results').innerHTML = result;


  });

})
.catch(function(error) {
  console.log(error);
}); 
