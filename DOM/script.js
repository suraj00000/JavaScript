// const heading = document.querySelector('.temp');

// heading.innerText="Suraj";
// // console.log(heading);

// const allListItem = document.querySelectorAll('ul li');

// for (let i = 0; i < allListItem.length; i++) {
//     const element = allListItem[i];
//     element.innerText='YOOOOOOOO';
//     console.log(typeof element);

// }
// console.log(typeof allListItem)

///////////////////////////////Counter Code/////////////////////////////////////////

const increment = document.querySelector('#increment');
const decrementer = document.querySelector('#decrementer');
const counterEL = document.getElementById('counter');

const ulElement = document.getElementById('list-item');

let counter = 0;

function incrementCounter() {
    counter++;
    counterEL.innerText = counter;

    //  create a element
    const li = document.createElement('li');
    li.setAttribute('data-counter', counter);

    if(counter%2===0){
        li.style.background='red';
        li.style.padding='10px';
    }else{
        li.style.background='#555555';
        li.style.padding='20px';
    }

    li.innerHTML = `<b> Sentence </b>${counter}`;
    console.log(li);
    // const b = document.createElement('b');
    // const textNode = document.createTextNode('Sentence ');
    // b.appendChild(textNode);
    // const textNode2 = document.createTextNode(counter);
    // li.appendChild(b);
    // li.appendChild(textNode2);

    // append the element
    ulElement.appendChild(li);


}
function decrementCounter() {
    try {
        const li = ulElement.querySelector('[data-counter="' + counter + '"]');
        const number = parseInt(li.getAttribute('data-counter'), 10);
        if (number % 2 === 0) {
            li.remove();
        }
    } catch (error) {
        console.log("error");
    }

    counter--;
    counterEL.innerText = counter;
}
increment.addEventListener('click', incrementCounter);
decrementer.addEventListener('click', decrementCounter);

//////////////////////////////////////////////////////////////////////

// const ul = document.querySelector('ul li');
// const li = ul.querySelectorAll('li'); //querySelectorAll for all elements and querySelector is for single elements

// console.log(ul);
// console.log(li);