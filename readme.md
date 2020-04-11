![Unsplash Logo](https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg) 

Got data from Unsplash API using the Unsplash documentation while using Fetch like so:
``` Javascript
// read - show all images / description
var results = document.getElementById('results');
var r = new XMLHttpRequest();
r.open("GET", "https://api.unsplash.com/photos/?client_id={AccessKey}", true);
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

The data was then converted from a JSON (click to view json data <a href="../data.json">JSON file</a>) to a CSV file in order to insert it into MySQL Workbench which is an SQL Graphical User Interface to manipulate data using database queries and four basic functions of persistent storage which are known as CRUD:
<br>C - Create
<br>R - Read
<br>U - Update
<br>D - Delete

## Search
Search function was made on the table collections layout view to make it easier to search and try to find what your looking for by using the keyword known as `LIKE` and `% %`. It's not 100% finished yet will be finishing the search function a little bit later on, but at the moment you can only search based on the number on the ID.
