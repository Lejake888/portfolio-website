const aboutButton= document.getElementById("one");
const skillsButton= document.getElementById("two");
const gitButton= document.getElementById("three");

const aboutBox= document.getElementById("aboutMe");
const skillsBox= document.getElementById("skills");
const gitBox= document.getElementById("button");

aboutButton.addEventListener('click',function ()
    {
    alert('hello')
    aboutButton.style.visibility === 'visible'
    }  
); 

skillsButton.addEventListener('click',function ()
    {
    alert("hello");
    }  
); 

gitButton.addEventListener('click',function ()
    {
    alert("hello");
    }  
); 

// for (i=0; i < boxes.length; i++)
//     button.addEventListener("click", () => {

//         if(boxes.style.visibility == "hidden") {
//             boxes.style.visibility == "visible"
//         } 
//         else {
//             boxes.style.visibility == "hidden";
    
//     }
// });

// Toggle boxes for when buttons are clicked, fade in
// Potentially have 1 big box that would have all the info