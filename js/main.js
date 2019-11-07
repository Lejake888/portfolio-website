const aboutButton= document.getElementById("one");
const skillsButton= document.getElementById("two");
const gitButton= document.getElementById("three");

const aboutBox= document.getElementById("aboutMe");
const skillsBox= document.getElementById("skills");
const gitBox= document.getElementById("github");

aboutBox.style.visibility = 'hidden';
skillsBox.style.visibility = 'hidden';
gitBox.style.visibility = 'hidden';


aboutButton.addEventListener('click',function ()
    {
    aboutBox.style.visibility = 'visible';
    }  
); 

skillsButton.addEventListener('click',function ()
    {
    skillsBox.style.visibility = 'visible';
    }  
); 

gitButton.addEventListener('click',function ()
    {
    gitBox.style.visibility = 'visible';
    }  
); 

// Potentially have 1 big box that would have all the info