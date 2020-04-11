# Unsplash

Got data from Unsplash API using the Unsplash documentation while using Fetch like so:
```javascript
// read - show all images / description
var results = document.getElementById('results');
var r = new XMLHttpRequest();
r.open("GET", "https://api.unsplash.com/photos/?client_id=f3c57e6d99ffeba8d2a424f2629271bd81c9a32c6c5c5df2a307acf2d81aad27", true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  var data = JSON.parse(r.responseText);

  for (i = 0; i < data.length; i++) {
    results.innerHTML +=
      `
      <table class="table">
        <td>${data[i].id}</td>
        <td>${data[i].user.username}</td>
        <td><img src="${data[i].urls.small}" width="60"></td>
      </table>
    `
  }
  console.log(data)
 
};
r.send();

// &per_page=10 - shows x amount of images on a single page
```
The data was then converted from a JSON to a CSV file in order to insert it into MySQL Workbench which is an SQL Graphical User Interface to manipulate data using database queries and four basic functions of persistent storage which are known as CRUD:
<br>C - Create
<br>R - Read
<br>U - Update
<br>D - Delete
