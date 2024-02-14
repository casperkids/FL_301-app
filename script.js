
// 1 Create
//let myh3 = document.createElement('h3')

// 2. Add content
//myh3.innerText = 'This sasdasdasdasdas is my js heading!'
//　into HTML
//document.querySelector('.w-100').appendChild(myh3);


// 3. Insert into html
// finding target using html-tag
// let targetH1 = document.querySelector('h1');
// add element to target
// targetH1.append(myh3);

// let userName = prompt('What is your name?')
// //let userName = 'Hubert'
// let pGreeting = document.createElement('p')
// pGreeting.innerText = `Welcome to the page: ${userName}`
// let targetA = document.querySelector('h2')
// targetA.append(pGreeting)

// let myDiv = document.createElement('div')
// myDiv.innerHTML ="<h3>THIS IS AN H3</h3>"
// myDiv.style.backgroundColor ='green'
// document.querySelector('.card-block.px-2').prepend(myDiv) //append->to the end

let books = [
  {
   title : 'Momo',
   authors : 'Michael Ende',
   year : '1973',
   description: 'Momo, also known as The Grey Gentlemen or The Men in Grey, is a fantasy novel',
   coverImage: 'bookcovers/MOMO.jpg',
   memo: 'cassiopeia, p3',
   haveRead: true,
   favorite: true
  },
  {
  title : "Don't Sleep, There Are Snakes",
  authors : 'Daniel L. Everett',
  year : '2008',
  description: 'Part passionate memoir, part scientific exploration, a life-changing tale set among a small tribe of Amazonian Indians in Brazil that offers a riveting look into the nature of language, thought, and life itself.',
  coverImage: 'bookcovers/Default_book copy.jpg',
  memo: 'Life and Language in the Amazonian Jungle',
  haveRead: false,
  favorite:true
  },
  {
  title : 'Lobo, the King of Currumpaw',
  authors : 'Ernest Thompson Seton',
  year : '1898',
  description: 'Based on the non-fiction account by Seton, Lobo is an 1890s wolf from an account by Seton who was a naturalist, and was a bounty hunter in the real-life story. Filming took place in Sedona, Arizona.',
  coverImage: 'bookcovers/Default_book copy.jpg',
  favorite:true,
  haveRead: false,
  memo: 'wolf'

  },
  {
  title : 'About Face',
  authors : 'Alan Cooper, Robert Reimann',
  year : '2014',
  description: 'The Essentials of Interaction Design ',
  coverImage: 'bookcovers/Default_book copy.jpg',
  memo: 'The Essentials of Interaction Design'
  },
  {
  title : 'Wilder Mann',
  authors : 'Charles Fréger',
  year : '2012',
  description: 'The transformation of man into beast is a central aspect of traditional pagan rituals that are centuries old and which celebrate the seasonal cycle, fertility, life and death.',
  coverImage: 'bookcovers/Default_book copy.jpg',
  favorite:true,
  haveRead: true,
  memo: ''
  }
]


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

//ReadStatus
const changeStatus = (event) => {
  console.log('status change', event.target);
   // click on button
  let buttonWeClickedOn = event.target
  let icon = buttonWeClickedOn.previousElementSibling
  //  use the button to find the icon
  console.log( icon.classList);
  // change classname of the icon
  // if the icon has the class -check, remove it, add -bookmark
  if(icon.classList.contains('fa-solid')) {
    icon.classList.remove('fa-solid', 'fa-square-check', 'fa-lg');
    icon.classList.add('fa-regular', 'fa-square', 'fa-lg');
    buttonWeClickedOn.innerText = 'Want to read it';
  } else {
    icon.classList.remove('fa-regular', 'fa-square', 'fa-lg');
    icon.classList.add('fa-solid', 'fa-square-check', 'fa-lg');
    buttonWeClickedOn.innerText = 'Have read it';
  }
  console.log(icon);
  // Alternative: move icon into button, and change inner html of button
}

// Add listner to all status buttons: 
let statusButtons = document.querySelectorAll('.statusButton')

statusButtons.forEach(button => {
  button.addEventListener('click', changeStatus)
})
// Using add event listener instead of onclick inline
let buttonWithClick = document.querySelector('#eventButton')

//buttonWithClick.addEventListener('click', () => {
//  console.log('Button with event listner added by js');
//})




//FavoriteStatus
const changeFavStatus = (event) => {
  console.log('status fav change', event.target);
   // click on button
  let favButtonWeClickedOn = event.target
  let icon = favButtonWeClickedOn.parentElement.querySelector('i');
  //  use the button to find the icon
  console.log( icon.classList);
  // change classname of the icon
  // if the icon has the class -check, remove it, add -bookmark
  if(icon.classList.contains('fa-heart')) {
    icon.classList.remove('fa-regular','fa-heart','fa-lg');
    icon.classList.add('fa-solid','fa-heart-crack','fa-lg');
    favButtonWeClickedOn.innerText = 'Unfavorite!';
  } else {
    icon.classList.remove('fa-solid','fa-heart-crack','fa-lg');
    icon.classList.add('fa-regular','fa-heart','fa-lg');
    favButtonWeClickedOn.innerText = 'Favorite!';
  }
  console.log(icon);
  // Alternative: move icon into button, and change inner html of button
}
// Add listner to all status buttons: 
let statusFavButtons = document.querySelectorAll('.statusFavButton')

statusFavButtons.forEach(button => {
  button.addEventListener('click', changeFavStatus)
})
// Using add event listener instead of onclick inline
let favButtonWithClick = document.querySelector('#eventButton')

// favButtonWithClick.addEventListener('click', () => {
//   console.log('Button with event listner added by js');
// })


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
        
        <div class="container">
        <div class="row">
          <div class="col">
            <i class="fa-regular ${book.haveRead ? 'fa-square-check fa-lg' : 'fa-regular fa-square fa-lg'}
            "style="color: ${book.haveRead ? '#74C0FC;' : '#74C0FC;'}
            "onclick="changeReadStatus(event, ${books.indexOf(book)})"></i>
          </div>
          <div class="col order-12">
            <i class="fa-solid ${book.favorite ? 'fa-heart fa-lg' : 'fa-solid fa-heart-crack fa-lg'}
            "style="color: ${book.favorite ? '#B197FC;' : '#B197FC;'}
            "onclick="changeFavoriteStatus(event, ${books.indexOf(book)})"></i>
          </div>          
        </div>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">${book.memo}
        </div>
      </div>
    </div>`;
  
    favoriteBooksListDiv.appendChild(cardDiv);
});
