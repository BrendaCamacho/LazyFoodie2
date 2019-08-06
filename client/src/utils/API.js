import axios from "axios";


const BASEURL = "https://api.edamam.com/search?q=";
const apiKey = "&app_key=c86d75bb50636d3d1711e4c1cababfb5";
const apiId = "&app_id=0e6aaabf";

export default {

search: (query) => {
   
     return axios.get(BASEURL + query + "&to=12&app_id=" + apiId + "&app_key=" + apiKey);
     
    }
}


// var mappedIngreds = "";
// var ingredient = "";
// const apiURL = "https://api.edamam.com/search?q=";

// // const maxTime = "&time=30";
// const maxResults = "&to=12";
// const API = async (...ingredients) => {
//   mappedIngreds = ingredients
//     .map((ingredient, idx) => {
//       if (idx < ingredients.length - 1) {
//         return ingredient + "-";
//       } else {
//         return ingredient;
//       }

//     })
//     .join("");
//   const url = `${apiURL}${mappedIngreds}${maxResults}${apiId}${apiKey}`;
//   console.log("url", url)
//   console.log("ingredients", ingredients);
//   const res =  axios.get(url);
//   //const recipes = res.data;
//   console.log(res.data);
// //   addToList(recipes)
// };
// //API("rice", "broccoli", "carrots");
// API(mappedIngreds);

//  export default API