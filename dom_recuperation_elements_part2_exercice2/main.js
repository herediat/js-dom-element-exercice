//1 
let divContent = document.getElementById('content')
console.log(divContent.firstElementChild);

//2 
let titreNiv3 = document.getElementById('titreNiv3')
console.log(titreNiv3);

//3
console.log(titreNiv3.previousElementSibling);

//4 
let petitP = document.getElementsByClassName('petitParagraphe')[0]
console.log(petitP.nextElementSibling);

//5 
let liImportant = document.getElementsByClassName('important')[0].parentElement
console.log(liImportant);

//6 
let listElements = document.getElementById('listElements').parentElement
console.log(listElements.firstElementChild);

//7
let listImporant = document.getElementsByClassName('important')
let childeren = listImporant[listImporant.length-1].nextElementSibling;
console.log(childeren);

//8
let textGeneral = document.getElementById('textGeneral')
console.log(textGeneral.nextElementSibling.nextElementSibling);

//9
let footer = document.getElementById('footer')
let span = footer.getElementsByTagName('span')[0]
console.log(span);
let spanParent = span.parentElement
console.log(spanParent.nextElementSibling.firstElementChild);

//10
let nicolas = document.getElementsByTagName('b')[2]
console.log(nicolas);
console.log(nicolas.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);

//11
let query = document.querySelector('.grandParagraphe')
console.log(query);

//12
// let liAll = document.querySelectorAll('li')
// console.log(liAll);

// liAll.forEach(el => {
//     console.log(el.innerText);
// });

let li_all_basic = document.getElementsByTagName('li')
console.log(li_all_basic);

// let convertArray = Array.from(li_all_basic)
let convertArray =  [...li_all_basic]
console.log(convertArray);
console.log(convertArray);
convertArray.forEach(el => {
    console.log(el.textContent);
});