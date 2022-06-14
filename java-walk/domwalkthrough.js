
        //console.dir(document); displays an interactive list of the properties of the specified javascript object
        // console.log(document.domain);// shows IP adress
        // console.log(document.URL); //shows URL  
        // console.log(document.title);//shows the title of the document
        // console.log(document.doctype);//Returns the document's doctype
        // console.log(document.head);//Returns the <head> element
        // console.log(document.body);//Returns the all the listed in the body element 
        // console.log(document.all);// show every tree structure in the document
        // console.log(document.all[03]);calling line 3 in the document
        // document.all[10].textContent = 'We Just Changed The Header';// manipulates js using document attribute to change the header
        // Document Object Model can scan the tree for elements
        // console.log(document.forms);//will returns a collection of all forms with in a particular page(Returns all <form> elements) how many we have
        // console.log(document.links);//Returns all <area> and <a> elements that have a href attribute
        // console.log(document.images); //Returns the <head> element

        ///////////////////////////////////////////////////////////////////////////////////

        //console.log(document.getElementById('header-title')); //Find an element by element id
        //Creation of an object variable using  the document fncunction 
        // let headerTitle = document.getElementById('header-title');
        // headerTitle.textContent = "Im changing the Header";//the headerTitle will be changed here
        // headerTitle.textContent = "I am changing it again.";// still changing it to another title
        // headerTitle.style.color = 'hotpink';//styling headerTitle to hotpink

        ////////////////////////////////////////////////////////////////////////////////////


        // let items = document.getElementsByClassName("list-group-item");//Find elements by class name "list-group-item"
        //GetElementByClassName use variable object to declare list items, also utilizing arrays to locate more specific items w/in the class
        // console.log(items);returns all items with the className "list-group-item" in the document
        // console.log(items[0]);//returns the content of the first index listed in the array
        // items[0].textContent = "Hello, World!";// the content of the first index element of the array is set to Hello,World!
        // items[0].style.fontWeight = 'bold';//the style of the content of the first index element is bold
        // items[0].style.backgroundColor = 'white';//the style of the content of the first index element of the array is set background of white
        // items[0].textContent = "Oooop -Coleman Love";//the content of first index element is set to Oooop -Coleman Love
        // items[0].style.color = "brown";// the style of the content of the first index element is set to brown color

        /////////////////////////////////////////////////////////////////////////////////////

        // items[1].textContent = "Bye"; //the content of second index of the array is set to Bye
        // items[1].style.fontweight="bold" //the style of the content of the second index element of the array is bold
        // items[1].style.backgroundColor="yellow" //the style of the content of the second index element of the array is set background of yellow
        // items[1].style.textContent="Alpha Kappa Alpha" //the content of second index element of the array is set to Alpha Kappa Alpha
        // items[1].style.Color="green" // the style of the content of the second index element of the array  is set to green color

        /////////////////////////////////////////////////////////////////////////////////

        // items[2].textContent = "Hi"; //the content of the third index of the array is set to Hi
        // items[2].style.fontWeight = 'bold'; //the style of the content of the third index element of the array is bold
        // items[2].style.backgroundColor = 'blue'; //the style of the content of the third indexelement of the array is set background of blue
        // items[2].textContent = "Zeela Zelda Zelda";  //the content of third index element of the array is set to Zeela Zelda Zelda
        // items[2].style.color = "green"; the style of the content of the third index element of the array  is set to green color

        /////////////////////////////////////////////////////////////////////////////////////

        // for loop that decrements from 100 to 0.
        //for (let i = 0; i < items.length; i++) {// here we are using for loop to change background color,text-content and color to avoid repeatition.
        //     items[i].style.backgroundColor = 'grey'; //background color is set to grey
        //     items[i].textContent = "I Changed The List"; // the text content is changed to I Changed The List
        //     items[i].style.color = 'green'; // color of items is set to green color
        // }

        /////////////////////////////////////////////////////////////////////////////////////

        // const myDiamonds = ['Snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];
        // for(let i = 8; i < myDiamonds.length; i++){
        // console.log(i, myDiamonds[i]);
        //}//for loop helps in  iteration , so here we will have list of arrays starting from the index 8 

        /////////////////////////////////////////////////////////////////////////////////////

        // let tag = document.getElementsByTagName('li');//Find elements by tag name
        // console.log(tag);
        // console.log(tag[1]); // returns the value at index of 1 
        // tag[1].textContent = "Hello 2"; // changes the text to Hello 2
        // tag[1].style.fontWeight = 'bold'; // fontwieght of the second element is set to bold
        // tag[1].style.backgroundColor = 'crimson'; // the background color of the second element is set to crimson color
        // tag[1].style.color = 'white'; // the content of the second index element of set to white color

        // //////////////////////////////////////////////////////////////////

        // let header = document.querySelector('#main-header');
        // header.style.borderBottom = 'solid 4px hotpink'; // changing the attrubute with the border bottom to red color
        // let input = document.querySelector('input'); // creates input 
        // input.value = "Changed the Input Box Text"; // setting the value of input "Changed the Input Box Text"

        ////////////////////////////////////////////////////////////////////////

        // let submit = document.querySelector("input[type='submit']");
        // submit.value = "Send"; // the value of the variable submit is now Send
        // let item = document.querySelector('.list-group-item'); //item is now storing values with clssName list-group-item
        // item.style.color = 'blue'; // item is set to blue color
        // let lastItem = document.querySelector('.list-group-item:last-child');
        // lastItem.style.color = 'pink'; // lastItem is set to pink color
        //var titles = document.querySelectorAll('.title'); // the variable titles stores all the values with className title
        //console.log(titles);

        //////////////////////////////////////////////////////////////////////////

         /*the value of the content will be "Is this rahel"
         querySelector returns all element*/
         //titles[0].textContent = 'Is this Rahel'; 
        // that that matches ewith a specifed  css selector and the querySelector method can only used to acess
        // a single element
        //let odd = document.querySelectorAll('li:nth-child(odd)'); // this selector matches every element that's the nth child of its parent
        //let even = document.querySelectorAll('li:nth-child(even)');
        //for (var i =0; i < odd.length; i++){
            //odd[i].style.backgroundColor = 'grey'; 
            //even[i].style.backgroundColor = 'green'; 
            //even[i].style.color = 'whitesmoke'; 
        //}
        //here we are styling based on the number we listed is given green and grey color 




