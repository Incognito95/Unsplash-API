var results = document.getElementById('results');
var r = new XMLHttpRequest();
r.open("GET", "https://api.unsplash.com/photos/?client_id=f3c57e6d99ffeba8d2a424f2629271bd81c9a32c6c5c5df2a307acf2d81aad27&per_page=30", true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  var data = JSON.parse(r.responseText);

  for (i = 0; i < data.length; i++) {
    results.innerHTML +=
      `
      <table class="table" id="myTable">
      <tr>
        <td>${data[i].id}</td>
        <td>${data[i].user.username}</td>
        <td>${data[i].alt_description}</td>
        <td><img src="${data[i].urls.small}" width="70"></td>
      </tr>
      </table>
    `
  }
  console.log(data)

};
r.send();