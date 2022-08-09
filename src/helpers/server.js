
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

  export async function get_person_bio(id) {
    let person_bio=`${base_url}/person/${id}?api_key=${api_key}&language=en-US`;
    let response = await fetch(person_bio);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_person_images(id) {
    let person_images=`${base_url}/person/${id}/images?api_key=${api_key}`;
    let response = await fetch(person_images);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_person_credits(id) {
    let person_credits=`${base_url}/person/${id}/movie_credits?api_key=${api_key}&language=en-US`;
    let response = await fetch(person_credits);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_movie_bio(id) {
    let movie_bio=`${base_url}/movie/${id}?api_key=${api_key}&language=en-US`;
    let response = await fetch(movie_bio);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_movie_credits(id) {
    let movie_credits=`${base_url}/movie/${id}/credits?api_key=${api_key}&language=en-US`;
    let response = await fetch(movie_credits);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_movie_recommendations(id) {
    let movie_recommendations=`${base_url}/movie/${id}/recommendations?api_key=${api_key}&language=en-US`;
    let response = await fetch(movie_recommendations);
    let body = await response.json();
    let data = body;
    return data;
  }

  // export async function get_movie_images(id) {
  //   let movie_images=`${base_url}/person/${id}/images?api_key=${api_key}`;
  //   let response = await fetch(movie_images);
  //   let body = await response.json();
  //   let data = body;
  //   return data;
  // }

  export async function get_tv_shows_bio(id) {
    let tv_shows_bio=`${base_url}/tv/${id}?api_key=${api_key}&language=en-US`;
    let response = await fetch(tv_shows_bio);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_tv_shows_credits(id) {
    let tv_shows_credits=`${base_url}/tv/${id}/credits?api_key=${api_key}&language=en-US`;
    let response = await fetch(tv_shows_credits);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_multi_search(page,name) {
    let multi_search=`${base_url}/search/multi?api_key=${api_key}&language=en-US&page=${page}&query=${name}`;
    let response = await fetch(multi_search);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_movie_genre() {
    let movie_genre=`${base_url}/genre/movie/list?api_key=${api_key}&language=en-US`;
    let response = await fetch(movie_genre);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_tv_shows_genre() {
    let tv_shows_genre=`${base_url}/genre/tv/list?api_key=${api_key}&language=en-US`;
    let response = await fetch(tv_shows_genre);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_movie_details(id) {
    let movie_details=`${base_url}/movie/${id}?api_key=${api_key}&language=en-US`;
    let response = await fetch(movie_details);
    let body = await response.json();
    let data = body;
    return data;
  }

  export async function get_discover_movie(page) {
    let discover_movie=`${base_url}/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;
    let response = await fetch(discover_movie);
    let body = await response.json();
    let data = body;
    return data;
  }