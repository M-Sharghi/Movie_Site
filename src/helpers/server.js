let api_key="515890266d5a96113e5eba12c9ef7091";
let base_url="https://api.themoviedb.org/3";
let popular_movie=`${base_url}/movie/popular?api_key=${api_key}&language=en-US&page=1`;
let now_playing_movie=`${base_url}/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;
let upcoming_movie=`${base_url}/movie/upcoming?api_key=${api_key}&language=en-US`;
let top_rated_movie=`${base_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
let latest_movie=`${base_url}/movie/latest?api_key=${api_key}&language=en-US`;
let popular_tv_shows=`${base_url}/tv/popular?api_key=${api_key}&language=en-US&page=1`;
let airing_today_tv=`${base_url}/tv/airing_today?api_key=${api_key}&language=en-US&page=1`;
let on_the_air_tv=`${base_url}/tv/on_the_air?api_key=${api_key}&language=en-US&page=1`;
let top_rated_tv=`${base_url}/tv/top_rated?api_key=${api_key}&language=en-US&page=1`;



export async function get_people(page) {
  let popular_people=`${base_url}/person/popular?api_key=${api_key}&language=en-US&page=${page}`;
  let response = await fetch(popular_people);
  let body = await response.json();
  let data = body;
  return data; 
  }
  
export async function get_popular_movie() {
    let response = await fetch(popular_movie);
    let body = await response.json();
    let data = body.results;
    return data;
  }

  export async function get_now_playing_movie() {
    let response = await fetch(now_playing_movie);
    let body = await response.json();
    let data = body.results;
    return data;
  }

  export async function get_upcoming_movie() {
    let response = await fetch(upcoming_movie);
    let body = await response.json();
    let data = body.results;
    return data;
  }

  export async function get_top_rated_movie() {
    let response = await fetch(top_rated_movie);
    let body = await response.json();
    let data = body.results;
    return data;
  }

  export async function get_latest_movie() {
    let response = await fetch(latest_movie);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_popular_tv_shows() {
    let response = await fetch(popular_tv_shows);
    let body = await response.json();
    let data = body.results;
    return data;
  }

  export async function get_airing_today_tv() {
    let response = await fetch(airing_today_tv);
    let body = await response.json();
    let data = body.results;
    return data;
  }

  export async function get_on_the_air_tv() {
    let response = await fetch(on_the_air_tv);
    let body = await response.json();
    let data = body.results;
    return data;
  }

   export async function get_top_rated_tv() {
    let response = await fetch(top_rated_tv);
    let body = await response.json();
    let data = body.results;
    return data;
  }

//   export async function get_coin(id) {
//     let response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
//     let body = await response.json();
//     let data = body.data;
  
//     return data;
//   }
  
//   export async function get_Exchanges() {
//     let response = await fetch("https://api.coincap.io/v2/exchanges");
//     let body = await response.json();
//     let data = body.data;
  
//     return data;
//   }

