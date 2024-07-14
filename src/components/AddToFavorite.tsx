export async function addToFavorites(movieId:any, favorite = true) {

   const accountId = 21352042;

  const response = await fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=a7254d75a3e4ef2c23e8d349f8f4cede&session_id=4e6a7af327b2774b5d50004f993ea0e5919b109d`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      media_type: 'movie',
      media_id: movieId,
      favorite: favorite
    })
  });
  const data = await response.json();
  return data;
}

 

 export async function removeFromFavorites(movieId:any) {
  const accountId = 21352042;
  const response = await fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=a7254d75a3e4ef2c23e8d349f8f4cede&session_id=4e6a7af327b2774b5d50004f993ea0e5919b109d`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      media_type: 'movie',
      media_id: movieId,
      favorite: false
    })
  });
  const data = await response.json();
  return data;
}