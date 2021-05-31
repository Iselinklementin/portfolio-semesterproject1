// // const url = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly";
// // AIzaSyC1MXabmcSwxvFtwgI8v-FV-_6uw4UvVXQ
// // const direction = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC1MXabmcSwxvFtwgI8v-FV-_6uw4UvVXQ&q=Sandefjord+Helsepark,Sandefjord+Norway"

// let maptest = document.querySelector("#map");
// const cors = "https://noroffcors.herokuapp.com/";
// const url = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz6tYylnBRkYRHk5eKnlQDww&key=AIzaSyC1MXabmcSwxvFtwgI8v-FV-_6uw4UvVXQ";


// async function getMap() {
//     const response = await fetch (cors + url);
//     const result = await response.json();
//     // console.log(result)
//     // maptest.src = result;
// }

// // maptest.src = cors + url;
// getMap()
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};

// document.cookie = "SIDCC"

// document.cookie = "SIDCC;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax";

// Cookies.set('SIDCC', 'value', {
//     sameSite: 'none',
//     secure: true
//   })


// Set-Cookie: flavor=choco; SameSite=None; Secure
// document.cookie = "yummy_cookie=choco SameSite=None Secure";
// document.cookie = "tasty_cookie=strawberry";
// console.log(document.cookie);

// let allCookies = document.cookie;

// console.log(allCookies)