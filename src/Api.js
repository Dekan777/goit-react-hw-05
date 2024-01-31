const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODVhZjIyMGQzMmZiNTE5MTc3YWUxODg1YWY3NWU0NCIsInN1YiI6IjY1YmE1ZWNlMzBmNzljMDE2MmFhOTZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8G7JEeYXcQIWRm3r3FIzjnO9jl_x-xZ4Yt9gp42Fw1Q'
    }
};

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));