// GetElementById() - iske naam se pata chal raha hai hum
// kisi bhi element ke ID se usko manipulate kar sakte hai

// const title = document.getElementById('main-heading');

// console.log(title);

//GetElementByClassName()

// const listItem = document.GetElementsByClassName('list-items')

// console.log(listItem);

//getElementByTagName()

// const listItems = document.getElementsByTagName('li');

// console.log(listItems);

//querySelector()

// const container = document.querySelector('div');

// console.log(container);

// querySelectorAll()

// const container = document.querySelectorAll('div');

// console.log(container);

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';

// console.log(title);

// const listItems = document.querySelectorAll('list-items');

// for(i = 0; i < listItems.lenght; i++){
//     listItems[i].style.fontSize = '5rem';
// }

// console.log(listItems);

const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding Elements

ul.append(li)

//Modifying the text
li.innerText = 'X-men';

//Modifying Attributes & Classes

// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));

li.classList.add('list-items')
