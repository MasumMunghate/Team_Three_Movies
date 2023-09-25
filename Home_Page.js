
const treding_card_container = document.getElementById('treding_card_container')
const Search_Btn = document.getElementById('Search_Btn');



const fetch_Api_Function = async ()=>{
let trending_movie_ulr = await fetch("https://api.themoviedb.org/3/movie/popular?&language=en-US&api_key=1ab627320337b55a37f95f68c3756c74")

    const responce = await trending_movie_ulr.json()
    // console.log(responce ,"Movei ka data")
    display_card(responce)
}
// all display card 
const display_card = (responce)=>{
    const data = responce.results.slice(0 , 9)
    treding_card_container.innerHTML = ""
    
    const card = data.map((items)=>{
        // console.log(items , "Movie data")
        const single_Card = document.createElement('div')
        single_Card.classList.add('single_Card')

        const movie_poster = document.createElement('div')
        const img = document.createElement('img')
        img.classList.add('movieImg');
        movie_poster.classList.add('movie_poster')
        img.src = `https://image.tmdb.org/t/p/w342${items.poster_path}`
        movie_poster.appendChild(img);

        const movie_name = document.createElement('div')
        const p = document.createElement('p')
        p.classList.add('movei_p')
        movie_name.classList.add('movie_name')
        p.innerText = items.original_title
        
        movie_name.appendChild(p)
        single_Card.appendChild(movie_poster)
        single_Card.appendChild(movie_name)

        let  a = document.createElement('a')
        const anchor = a.href = `./details.html?id=${items.id}`
        single_Card.addEventListener('click' , ()=>{
            window.location.href = anchor 
        })

        treding_card_container.appendChild(single_Card)
    })
}

Search_Btn.addEventListener("click" , async ()=>{
    let input_value = SearchBar_Input.value;
    console.log(input_value)
    
    const SearchMovieUrl = await fetch(`https://api.themoviedb.org/3/search/multi?&language=en-US&query=${input_value}&api_key=1ab627320337b55a37f95f68c3756c74`)
    const res = await SearchMovieUrl.json();
    input_value.innerHTML = ""
    display_card(res ,"")
    
})




fetch_Api_Function() // init function
