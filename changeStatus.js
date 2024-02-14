//ReadStatus
export const changeStatus = (event) => {
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
  }

//FavoriteStatus
  export const changeFavStatus = (event) => {
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
   
  }
  