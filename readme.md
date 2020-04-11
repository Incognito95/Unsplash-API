## Unsplash

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
The data was then converted from a JSON to a CSV file in order to insert it into MySQL Workbench which is an SQL Graphical User Interface to manipulate data using database queries and four basic functions of persistent storage which are known as CRUD:
<br>C - Create
<br>R - Read
<br>U - Update
<br>D - Delete

## This is the data that I got from the API
```
[
    {
    id: "K6CUcVYKrN0",
    created_at: "2019-07-11T19:20:11-04:00",
    updated_at: "2020-04-07T01:02:59-04:00",
    promoted_at: null,
    width: 7680,
    height: 4320,
    color: "#17150C",
    description: null,
    alt_description: "Honest makeup palette",
    urls: {
    raw: "https://images.unsplash.com/photo-1562887189-7c2ae6ace6dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjk2MzA1fQ",
    full: "https://images.unsplash.com/photo-1562887189-7c2ae6ace6dc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk2MzA1fQ",
    regular: "https://images.unsplash.com/photo-1562887189-7c2ae6ace6dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2MzA1fQ",
    small: "https://images.unsplash.com/photo-1562887189-7c2ae6ace6dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk2MzA1fQ",
    thumb: "https://images.unsplash.com/photo-1562887189-7c2ae6ace6dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk2MzA1fQ"
    },
    links: {
    self: "https://api.unsplash.com/photos/K6CUcVYKrN0",
    html: "https://unsplash.com/photos/K6CUcVYKrN0",
    download: "https://unsplash.com/photos/K6CUcVYKrN0/download",
    download_location: "https://api.unsplash.com/photos/K6CUcVYKrN0/download"
    },
    categories: [ ],
    likes: 303,
    liked_by_user: false,
    current_user_collections: [ ],
    user: {
    id: "o9M2-GtNlBE",
    updated_at: "2020-04-10T12:01:42-04:00",
    username: "honest",
    name: "The Honest Company",
    first_name: "The Honest Company",
    last_name: null,
    twitter_username: "honest",
    portfolio_url: "https://www.honest.com/",
    bio: "Our mission is to empower people to live healthy, happy lives. We're committed to creating effective, safe, delightful, accessible, responsible products.",
    location: null,
    links: {
    self: "https://api.unsplash.com/users/honest",
    html: "https://unsplash.com/@honest",
    photos: "https://api.unsplash.com/users/honest/photos",
    likes: "https://api.unsplash.com/users/honest/likes",
    portfolio: "https://api.unsplash.com/users/honest/portfolio",
    following: "https://api.unsplash.com/users/honest/following",
    followers: "https://api.unsplash.com/users/honest/followers"
    },
    profile_image: {
    small: "https://images.unsplash.com/profile-1562879881254-56eb37673331?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
    medium: "https://images.unsplash.com/profile-1562879881254-56eb37673331?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
    large: "https://images.unsplash.com/profile-1562879881254-56eb37673331?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
    },
    instagram_username: "honest",
    total_collections: 0,
    total_likes: 0,
    total_photos: 65,
    accepted_tos: true
    },
    sponsorship: {
    impression_urls: [
    "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=5209893&rnd=unsplash&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
    ],
    tagline: "Clean beauty that works.",
    sponsor: {
    id: "o9M2-GtNlBE",
    updated_at: "2020-04-10T12:01:42-04:00",
    username: "honest",
    name: "The Honest Company",
    first_name: "The Honest Company",
    last_name: null,
    twitter_username: "honest",
    portfolio_url: "https://www.honest.com/",
    bio: "Our mission is to empower people to live healthy, happy lives. We're committed to creating effective, safe, delightful, accessible, responsible products.",
    location: null,
    links: {
    self: "https://api.unsplash.com/users/honest",
    html: "https://unsplash.com/@honest",
    photos: "https://api.unsplash.com/users/honest/photos",
    likes: "https://api.unsplash.com/users/honest/likes",
    portfolio: "https://api.unsplash.com/users/honest/portfolio",
    following: "https://api.unsplash.com/users/honest/following",
    followers: "https://api.unsplash.com/users/honest/followers"
    },
    profile_image: {
    small: "https://images.unsplash.com/profile-1562879881254-56eb37673331?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
    medium: "https://images.unsplash.com/profile-1562879881254-56eb37673331?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
    large: "https://images.unsplash.com/profile-1562879881254-56eb37673331?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
    },
    instagram_username: "honest",
    total_collections: 0,
    total_likes: 0,
    total_photos: 65,
    accepted_tos: true
    }
    }
    }
    ```

## Search
Search function was made on the table collections layout view to make it easier to search and try to find what your looking for by using the keyword known as `LIKE` and `% %`. It's not 100% finished yet will be finishing the search function a little bit later on, but at the moment you can only search based on the number on the ID.
