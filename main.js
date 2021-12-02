// let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

// let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'
let list = document.querySelector('.append')
let btntop = document.querySelector('#top')
let btnpopular = document.querySelector('#popular')
let btnupcoming = document.querySelector('#upcoming')

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let page = document.querySelector('.title')

async function render(params) {
    list.innerHTML = null
    let api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dcea1fd7b3e65d34387ad6de7ef9cc5e&page=${page.textContent}`)
    let res = await api.json()
    // console.log(res.results);
    for(let i of res.results){
        let movie = document.createElement('div')
        movie.className = 'movie'
        movie.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${i.poster_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">
    
                <div class="movie-info">
                    <h3>${i.title}</h3>
                    <span class="orange">${i.vote_average}</span>
                    </div>
                    <span class="date">${i.release_date}</span>
                </div>
            `
        list.append(movie)
    }
}

render()

nextBtn.onclick = () =>{
    page.textContent = parseInt(page.textContent) + 1
    render()
}

prevBtn.onclick = () =>{
    if(parseInt(page.textContent) - 1 > 0){
        page.textContent = parseInt(page.textContent) - 1 
        render()
    }
}