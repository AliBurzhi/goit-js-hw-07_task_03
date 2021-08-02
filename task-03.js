// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const galleryListEl = document.querySelector('#gallery');

// galleryListEl.style.display = 'flex';
// galleryListEl.style.alignItems = 'center';
// galleryListEl.style.justifyContent = 'space-between';

// const createListItem  = images.map(image => {
    
//     const itemEl = document.createElement('li');
//     itemEl.style.listStyle = 'none';
//     itemEl.insertAdjacentHTML(
//         'afterbegin',
//         `<img src='${image.url}' alt='${image.alt}' width='400px'>`
//     );
//     return itemEl;
    

// });

// galleryListEl.append(...createListItem);



// TASK 05 ================================================================================
// const refs = {
//   input: document.querySelector('#name-input'),
//   title: document.querySelector('h1 > span'),
// };

// refs.input.addEventListener('input', makeSametext);


// function makeSametext(event) {
//   if (event.currentTarget.value === '') {
//     refs.title.textContent = 'незнакомец';
//   } else {
//       refs.title.textContent = event.currentTarget.value;

//  }
// }
// ====================================================================================================