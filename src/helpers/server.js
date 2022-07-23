
let api_key="515890266d5a96113e5eba12c9ef7091";
let base_url="https://api.themoviedb.org/3";


export async function get_people(page) {
  let popular_people=`${base_url}/person/popular?api_key=${api_key}&language=en-US&page=${page}`;
  console.log(popular_people);
  let response = await fetch(popular_people);
  let body = await response.json();
  let data = body;
  return data; 
  }
  
export async function get_popular_movie(page) {
    let popular_movie=`${base_url}/movie/popular?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(popular_movie);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_now_playing_movie(page) {
    let now_playing_movie=`${base_url}/movie/now_playing?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(now_playing_movie);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_upcoming_movie(page) {
    let upcoming_movie=`${base_url}/movie/upcoming?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(upcoming_movie);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_top_rated_movie(page) {
    let top_rated_movie=`${base_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(top_rated_movie);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_latest_movie(page) {
    let latest_movie=`${base_url}/movie/latest?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(latest_movie);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_popular_tv_shows(page) {
    let popular_tv_shows=`${base_url}/tv/popular?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(popular_tv_shows);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_airing_today_tv(page) {
    let airing_today_tv=`${base_url}/tv/airing_today?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(airing_today_tv);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_on_the_air_tv(page) {
    let on_the_air_tv=`${base_url}/tv/on_the_air?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(on_the_air_tv);
    let body = await response.json();
    let data = body;
    return data;
  }

   export async function get_top_rated_tv(page) {
    let top_rated_tv=`${base_url}/tv/top_rated?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(top_rated_tv);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_trending_all_day(page) {
    let trending_all_day=`${base_url}/trending/all/day?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await fetch(trending_all_day);
    let body = await response.json();
    let data = body;
    return data;
  }
