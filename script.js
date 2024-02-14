// export
import { books } from "./booksData.js"
// export default
import { changeStatus, changeFavStatus } from "./changeStatus.js"

// Loop through the array:
    books.forEach((book) => {
    // Build cards using JS:
     let cardDiv = document.createElement('div');
    
    // Add styling
    cardDiv.style.maxWidth = '700px';
    cardDiv.classList.add('container', 'card', 'mb-3');
    

    // Add content for the card:
    cardDiv.innerHTML = `<div class="row g-0">
      <div class="col-md-4 d-flex align-items-center">
        <img src="${book.coverImage}" alt="${book.title}" style="max-width: 80%;" >
      </div>
  
      <div class="col-md-8">
       <div class="card-body px-2">
        <h3 class="card-title">${book.title}</h3>
        <h5>${book.authors}</h5>
        <p>${book.year}</p>
        <p class="card-text">${book.description}</p>
        
        <div class="container">
          <div class="row">
            
          <div>
          <i class= "fa ${book.haveRead ? "fa-solid fa-square-check fa-lg" : "fa-regular fa-square fa-lg" }
          " style="color: ${book.haveRead ? '#74C0FC' : '#74C0FC'};"></i>  
          <button class="statusButton btn btn-outline-primary"> ${ book.haveRead ? 'Have read it' : "Want to read it"} </button>
          </div>
          
          <div>
           <i class="fa ${book.favorite ? "fa-regular fa-heart fa-lg" : "fa-solid fa-heart-crack fa-lg"}
           " style="color: ${book.favorite ? '#B197FC' : '#B197FC'};"></i>  
          <button class="statusFavButton btn btn-outline-primary"> ${ book.favorite ? 'Favorite!' : "Unfavorite"} </button>
          </div> 
        
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">${book.memo}
        </div>
      </div>
    </div>`;
  
  // Append the card to the .collection-list
    document.querySelector('.collection-list').append(cardDiv);
});
// Add listner to all status buttons: 
let statusButtons = document.querySelectorAll('.statusButton')
  
statusButtons.forEach(button => {
  button.addEventListener('click', changeStatus)
})

let statusFavButtons = document.querySelectorAll('.statusFavButton')
  
  statusFavButtons.forEach(button => {
    button.addEventListener('click', changeFavStatus)
  })

// Favorite Books
let favoriteBooksListDiv = document.createElement('div');
favoriteBooksListDiv.classList.add('favorite-List'); 
document.body.appendChild(favoriteBooksListDiv);

let favoriteBooks = books.filter(book => book.favorite === true);
favoriteBooks.forEach((book) => {
    
    let cardDiv = document.createElement('div');
    cardDiv.style.maxWidth = '700px';
    cardDiv.classList.add('container', 'card', 'mb-3');
    
    cardDiv.innerHTML = `<div class="row g-0">
      <div class="col-md-4 d-flex align-items-center">
        <img src="${book.coverImage}" alt="${book.title}" style="max-width: 80%;" >
      </div>
  
      <div class="col-md-8">
       <div class="card-body px-2">
        <h3 class="card-title">${book.title}</h3>
        <h5>${book.authors}</h5>
        <p>${book.year}</p>
        <p class="card-text">${book.description}</p>
        
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">${book.memo}
        </div>
      </div>
    </div>`;
  
    favoriteBooksListDiv.appendChild(cardDiv);
});
