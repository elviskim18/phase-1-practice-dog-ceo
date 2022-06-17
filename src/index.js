//console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => createImage(data))

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(info => breed(info))
})

//Add images
function createImage(images){
   images.message.forEach(renderImage)
}

function renderImage (urlImg) {
    const container = document.getElementById('dog-image-container');
    const dogImg = document.createElement('img')
    dogImg.className = "dog-image";
    dogImg.height = 300
    dogImg.src = urlImg;
    container.appendChild(dogImg)
}

function displayBreed(dogBreeds){
    const breedContainer = document.getElementById('dog-breeds')
    const breedType = document.createElement('li')
    breedType.textContent = dogBreeds
    breedContainer.appendChild(breedType);
    breedType.addEventListener('click', () => {
        if(breedType.style.color = "black"){
            breedType.style.color = "red"
        }
        else if(breedType.style.color = "red"){
            breedType.style.color = "yellow"
        }
        
    })

    
}
function breed(info){
    const dogBreed = Object.keys(info.message);
    dogBreed.forEach((element) => displayBreed(element))
}