const setupScrooling = ()=>{
    const container = [...document.querySelectorAll(".movie-container")] //Pegar um vetor e espalhar dentro dele todos os movie-container
    const nextBtn = [...document.querySelectorAll(".next-btn")] 
    const prevBtn = [...document.querySelectorAll(".pre-btn")] 

    container.forEach((item, i)=>{
        let containerDimensions = item.getBoundingClientRect() //Pegando qual o tamanho para poder acessar as propriedades
        let containerWidth = containerDimensions.width

        nextBtn[i].addEventListener('click', ()=>{
            item.scrollLeft += containerWidth
        })

        prevBtn[i].addEventListener('click', ()=>{
            item.scrollLeft -= containerWidth
        })
    })
}