//1) Use getElementById to target the element with the ID "main-heading" and print it to the console. (getElementById)

// const ele = document.getElementById('main-heading');
// console.log(ele.innerText);

//2)Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)


// const ele = document.getElementById('name')
// console.log(ele.type);


//3)Make use of elem.name to target the input element with the ID "name" and print its name attribute to the console. (elem.name)

// const ele = document.getElementById('name')
// console.log(ele.name);


//4)Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)


// const ele = document.getElementById('name')
// console.log(ele.id);

//5)With the help of elem.value, target the input element with the ID "name" and print its value to the console. (elem.value)

// const ele = document.getElementById('name')
// console.log(ele.value);


//6)Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)

// const ele = document.querySelectorAll('.list')
// console.log(ele[0].innerHTML);

//7)Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)

// const ele = document.querySelector('.content').querySelector('p')
// console.log(ele.innerText);

//8)Utilizing document.body.children, target all child elements of the <body> element and print them to the console. (document.body.children)

// const ele = document.body.children
// console.log(ele);


//9)Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the console. (getElementsByTagName)

// const ele = document.getElementsByTagName('li')
// console.log(ele[0].innerText);

//10)Make use of getElementsByClassName, target all elements with the class "content" and print them to the console. (getElementsByClassName)

// const ele = document.getElementsByClassName('content')
// console.log(ele[0].getElementsByTagName('p'));
// console.log(ele[0].innerHTML);

//11. Using getElementsByName, target the input element with the name "fullName" and print it to the console. (getElementsByName)

// const ele = document.getElementsByName('fullName')
// console.log(ele);


//12. What classes are present in the classList of the element with the ID "main-heading" ? (classList)

// const ele = document.getElementById('main-heading').classList
// console.log(ele.length);

//13. Add the class "highlight" to the element with the ID "main-heading".What classes are present now ? (classList.add)

// let elem = document.getElementById('main-heading').classList.add('class2')
// elem = document.getElementById('main-heading').classList.add('class3')
// const ele = document.getElementById('main-heading').classList
// console.log(ele.length);

//14. Remove the class "highlight" from the element with the ID "main-heading".What classes are present now ? (classList.remove)

// elem = document.getElementById('main-heading').classList.remove(['class3'])
// const ele = document.getElementById('main-heading').classList
// console.log(ele.length);

//15. Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container".What classes are present on the "inner-box" element ? (** `classList.toggle` **)


// const ele = document.getElementById('container').getElementsByClassName('inner-box')[0]
// console.log(ele.classList.toggle('active'));
// console.log(ele.classList.toggle('active'));

//16)Check if the element with the class "inner-box" has the class "active". Print true or false. (elem.classList.has)


// const ele = document.getElementById('container').getElementsByClassName('inner-box')[0]
// console.log(ele.classList.contains('active'));


//17)Does the element with the ID "name" have the class "input-field"? Print true or false. (classList.contains)


// const ele = document.getElementById('name')
// console.log(ele.classList.contains('input-field'));  //false

//18)What is the background color of the element with the ID "main-heading"? (style.background-color)

// const ele = document.getElementById('main-heading')
// console.log(ele.style.backgroundColor);


//19)Does the element with the class "list" contain an <li> element with the text "Item 2"? Print true or false. (matches)

// const ele = document.querySelector('.list')
// const element = ele.getElementsByTagName('li')[1].innerHTML;
// console.log(element==='Item 2');

//20)Does the element with the class "content" match a <div> tag? Print true or false. (matches)


//20) What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (closest)

// const ele = document.getElementById('container').getElementsByClassName('inner-box')[0].closest('#container');

// console.log(ele);


//21)Print the first child element of the <body> element. (document.body)

// console.log(document.body.firstElementChild);


//22)Print the number of child elements within the <body> element. (document.body.children)

// console.log(document.body.children);


//23)What is the tag name of the first child element of the <body> element? (document.body.firstChild.tagName)


// console.log(document.body.children[0].tagName)


//24)What is the class name of the first child element of the <body> element? (document.body.firstChild.className)

// console.log(document.body.children[0].className);


//25)Print the innerHTML of the element with the class "content". (innerHTML)

// console.log(document.getElementsByClassName('content')[0].innerHTML);


//26)Print the innerText of the element with the class "content". (innerText)

// console.log(document.getElementsByClassName('content')[0].children[0].innerHTML);

//27)Get the value of the "type" attribute of the input element with the ID "name". (getAttribute())

// console.log(document.querySelector('#name').getAttribute('type'));

//28)Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (setAttribute())

// document.getElementById('name').setAttribute("placeholder", "Enter your full name");

//29)Does the input element with the ID "name" have the "placeholder" attribute? Print true or false. (hasAttribute())

// console.log(document.getElementById('name').hasAttribute('placeholder'));

//30)Remove the "value" attribute from the input element with the ID "name". (removeAttribute())

// document.getElementById('name').removeAttribute('value');

//31)Print the total number of attributes present in the element with the ID "main-heading". (attributes())

// console.log(document.getElementById('main-heading').attributes.length);

//32)Create a new <div> element using the document.createElement method. Print the created element. (document.createElement)

// let newEle = document.createElement("div");
// console.log(newEle);

//33)Create a new text node with the content "This is a new text node." using the document.createTextNode method. Print the created text node. (document.createTextNode)

// const newContent = document.createTextNode("This is a new text node.");
// console.log(newContent);


//34)Append the created text node to the element with the ID "main-heading". Print the updated element. (append)

// const currentDiv = document.getElementById("main-heading")

// newEle.append(newContent)
// console.log(newEle);

//35)Prepend the created <div> element to the element with the class "content". Print the updated element. (prepend)

// newEle.prepend(document.querySelector(".content"))
// console.log(newEle);

//36) Replace the element with the ID "main-heading" with the created text node. Print the updated element. (replaceWith)

// let newElem = document.getElementById("main-heading").replaceWith("qwerty");

// console.log(newElem);

//37)Insert the created <div> element before the element with the class "inner-box". Print the updated parent element. (before)


// let newElem = document.querySelector(".inner-box").firstElementChild
// document.querySelector(".inner-box").insertBefore(newEle, newElem)
// console.log({newEle,newElem});


//38)Insert the created <div> element after the element with the class "inner-box". Print the updated parent element. (after)

// let newElem = document.querySelector(".inner-box").firstElementChild
// document.querySelector(".inner-box").insertAfter(newEle, newElem)
// console.log({newEle,newElem});

//39)Print the offsetHeight and offsetWidth of the element with the class "content". (offsetHeight / offsetWidth)


// console.log(`offsetHeight   ${document.querySelector(".content").offsetHeight}`);
// console.log(`offsetWidth    ${document.querySelector(".content").offsetWidth}`);

//40)Print the clientHeight and clientWidth of the element with the class "content". (clientHeight / clientWidth)

// console.log(`scrollHeight   ${document.querySelector(".content").clientHeight}`);
// console.log(`clientWidth    ${document.querySelector(".content").clientWidth}`);


//41)Print the scrollHeight and scrollWidth of the element with the class "content". (scrollHeight / scrollWidth)

// console.log(`scrollHeight   ${document.querySelector(".content").scrollHeight}`);
// console.log(`scrollWidth    ${document.querySelector(".content").scrollWidth}`);

//42)Print the innerHeight and innerWidth of the window. (innerHeight / innerWidth)

// console.log(`innerHeight    ${window.innerHeight}`);
// console.log(`innerWidth     ${window.innerWidth}`);

//43)Print the outerHeight and outerWidth of the window. (outerHeight / outerWidth)

// console.log(`outerHeight    ${window.outerHeight}`);
// console.log(`outerWidth     ${window.outerWidth}`);

//44)Change the text content of the <h1> element with the ID "main-heading" to "Hello, DOM!".

// document.getElementById("main-heading").replaceWith("Hello, DOM!")

//45)Change the value of the input element with the ID "name" to "Jane Smith".

// document.getElementById("name").setAttribute("value", "Jane Smith")


//46)Add a new <li> element to the <ul> element with class "list" containing the text "Item 4".

// const li4 = document.createElement("li")
// const liContent = document.createTextNode('Item 4')
// li4.append(liContent)
// document.querySelector(".list").append(li4);

//47)Change the text content of the <p> element within the <div> with class "content" to "Updated paragraph text".


// const text = document.querySelector('.content').querySelector('p')

// text.innerText = "Updated paragraph text"
// console.log(text);

//48)Change the background color of the <div> element with ID "container" to blue.

// document.querySelector('#container').setAttribute("style", "background-color:blue")

//49)Remove the class "inner-box" from the <div> element with class "inner-box".

// document.querySelector(".inner-box").removeAttribute("class")

//50)Clone the <div> element with ID "container" and append it to the body.

// const oriDiv = document.getElementById("container")
// const clonDiv = oriDiv.cloneNode(true);
// document.body.append(clonDiv)

//51)Wrap the contents of the <div> with ID "container" in a new <div> with class "wrapper".

// const newWrapper = document.createElement("div");
// newWrapper.setAttribute("class", "wrapper")
// // console.log(newWrapper);
// const newContainer = document.getElementById("container");

// document.body.appendChild(newWrapper)
// newWrapper.append(newContainer)

//52)Remove the first <li> element from the <ul> with class "list".

// document.querySelector(".list").children[0].remove();

//53)Add the class "highlight" to the <p> element within the <div> with class "content".

// document.querySelector(".content").querySelector("p").setAttribute("class","highlight");

//54)Change the type of the input element with ID "name" to "email".

// let idType = document.getElementById("name").setAttribute("type","email");

//55)Replace the text content of the <li> element with "Item 2" to "Updated Item 2".

// idType = document.querySelector(".list").children[0]
// idType.innerText = "Updated Item 2"
// console.log(idType);

//56)Change the value of the input element with ID "name" to an empty string.

// document.getElementById("name").setAttribute("value", " ")

//57)Remove the entire <form> element from the DOM.

// document.getElementsByTagName("form")[0].remove();


//58)Add an event listener to the <h1> element with ID "main-heading" that logs a message when clicked.

// const clickEvent =  document.getElementById("main-heading").addEventListener("click",()=>{console.log("clicked")})

//59)Change the font size of the <p> element within the <div> with class "content" to 18px.

// document.querySelector(".content").querySelector("p").style.fontSize="18px";

//60)Remove the <ul> element with class "list" from the DOM.

// document.querySelector(".list").remove()

//61)Create a new <div> element, give it a class of "new-div", and append it to the body.

// const newDiv1 = document.createElement("div")
// newDiv1.setAttribute("class","new-div")
// document.body.append(newDiv1);

//62)Append a new <p> element with the text "New paragraph" to the <div> with class "inner-box".

// const newP = document.createElement("p")
// const newText = document.createTextNode("New paragraph")

// newP.append(newText);
// // console.log(newP);
// document.body.append(newP)

// const wrapClass = document.querySelector(".inner-box")

// wrapClass.append(newP);
