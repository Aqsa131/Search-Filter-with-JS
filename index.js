let recipes;
let myApi = async()=>{
   try
   {
    let getApi = await fetch('https://dummyjson.com/recipes')
    let convertToJson = await getApi.json()
    recipes = convertToJson.recipes
    console.log(convertToJson);
        createCard(recipes)
    }

   catch (error)
   {
    throw new Error ('This is a Custom Error')
   }
}
myApi()

// display cards

let card = document.querySelector('.card')
let createCard=(newCard)=>{
    card.innerHTML = ''
    newCard.forEach((product)=>{
        let newCard = document.createElement('div')
        newCard.setAttribute('class' , 'newDiv')
        newCard.innerHTML =  `
            <div style="font-style: italic;" class="product-title"><h3>${product.name}</h3></div>
            <div class="product-card">
                <img class="product-image" src="${product.image}">
                <div class="product-info">
                <h4 style="margin: 0; padding-left:10px; font-style: italic;">Ingredients:</h4>
                <div class="product-ingredients">${product.ingredients}</div>
                <h4 style="margin: 0; padding-left:10px; font-style: italic;">Meal Type:</h4>
                <div class="product-ingredients">${product.mealType}</div>
                </div>
            </div>
        `
        card.appendChild(newCard)
    })
}
// createCard(recipes)

// search Filter

let search = document.querySelector('.search')
search.addEventListener('keyup' , function(){
    let getValue = search.value.toLowerCase()
    let createFilter = recipes.filter((item)=>{        
        return item.name.toLowerCase().includes(getValue)
    })
    createCard(createFilter)
    if(createFilter.length > 0){
        createCard(createFilter)
    }
    else{
        document.querySelector('.noResult').innerHTML = `<div class="noResult"><h3>No Recipe found</h3></div>`
    }
})

// A to Z search filter
// function aTozFilter(){
//     for(let i = 0 ; i<=recipes.length-1 ; i++){


//         let sorted = [...recipes].sort((a, b) => a.name.localeCompare(b.name));

//     console.log(sorted);
//     }
    
    
// }
// aTozFilter()

function ascending() {
    recipes.sort((a,b)=>{
        if(a.name < b.name){
            return -1
        }
        else{
            return 0
        }
    })
   
    createCard(recipes)
}
// aTozFilter(recipes)

function descendingOrder(){
    recipes.sort((a,b)=>{
        if(a.name > b.name){
            return -1
        }
        else{
            return 0
        }
    })
    createCard(recipes)
}
