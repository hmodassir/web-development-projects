const form = document.querySelector('#searchForm');
const btnSubmit = document.querySelector("#submit-btn")

form.addEventListener('submit', async function(e){
    e.preventDefault()
    let searchInput = document.querySelector('input');
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput.value}`)
    displayImages(res.data)
    displaySearchInput(searchInput.value)
    searchInput.value = ""
    
})



const displaySearchInput = (searchVal)=>{
    const searchValCont = document.querySelector('.searchValue-text')
    const doubleQuotes = '"'
    searchValCont.textContent = "Search for "+doubleQuotes+searchVal+doubleQuotes


}
const clearImg = ()=>{
        const imgEl = document.querySelectorAll('img')
        const divEl = document.querySelectorAll('.media-element')
        for (let i = 0; i < imgEl.length; i++) {
            imgEl[i].remove()
            divEl[i].remove()
        }    
    
}
const clearSearchValText = ()=>{
    const searchVal = document.querySelector('searchValue-text')
    searchVal.textContent = ""
        
}


btnSubmit.addEventListener('click',clearImg,clearSearchValText)


const displayImages = (result)=>{
    for (let i = 0; i < result.length; i++) {
        if(result[i].show.image){
        const imgCont = document.querySelector('.media-scroller')
        const newImg = document.createElement('IMG');
        const newDiv = document.createElement('DIV')
        newDiv.classList.add('media-element')
        newImg.src = result[i].show.image.medium
        newDiv.append(newImg)
        imgCont.append(newDiv)
        }
        
    }

}
