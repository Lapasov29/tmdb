// let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

// let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'
let list = document.querySelector('.append')

async function render(params) {
    let api = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=dcea1fd7b3e65d34387ad6de7ef9cc5e&page=1')
    let res = await api.json()
    console.log(res);
}

render()