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
     memo: 'cassiopeia, p3'
    },
    {
    title : "Don't Sleep, There Are Snakes",
    authors : 'Daniel L. Everett',
    year : '2008',
    description: 'Part passionate memoir, part scientific exploration, a life-changing tale set among a small tribe of Amazonian Indians in Brazil that offers a riveting look into the nature of language, thought, and life itself.',
    coverImage: 'bookcovers/Default_book copy.jpg',
    memo: 'Life and Language in the Amazonian Jungle'
    },
    {
    title : 'Lobo, the King of Currumpaw',
    authors : 'Ernest Thompson Seton',
    year : '1898',
    description: 'Based on the non-fiction account by Seton, Lobo is an 1890s wolf from an account by Seton who was a naturalist, and was a bounty hunter in the real-life story. Filming took place in Sedona, Arizona.',
    coverImage: 'bookcovers/Default_book copy.jpg',
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
        
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">Currently Reading</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">Next to Read</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
          <label class="form-check-label" for="inlineCheckbox3">Favourite</label>
        </div>
      </div>
      <div class="w-100"></div>
      <div class="card-footer w-100 text-muted">${book.memo}
      </div>
    </div>`;
  
    // Append the card to the .collection-list
    document.querySelector('.collection-list').append(cardDiv);
  });
  