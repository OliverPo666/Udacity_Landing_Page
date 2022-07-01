/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
let numOfSections = sections.length;
const navBarList = document.querySelector('#navbar__list');


//function to create the nav
function createNavList() {
    for (const section of sections) {
        console.log(section);
        const linkName = section.getAttribute('data-nav');
        const linkId = section.getAttribute('id');
        const navLink = document.createElement('li');
        navLink.innerHTML = `<a class='menu__link' href='#${linkId}'> ${linkName} </a>`
        navBarList.insertAdjacentElement("beforeend", navLink);
    };
};


//function to check if the section is in vewport
function checkViewPort(sec){
    let sectionView = sec.getBoundingClientRect();
    return (sectionView.top >= 0 && sectionView.top< window.innerHeight);
};

//function to chage class name of section if in view
function chageClassName(){
    for(section of sections){
        if(checkViewPort(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }
        else{
            section.classList.remove('your-active-class');
        }
    }
}

//create navlist based on the num of sections
createNavList();


// Set sections as active
document.addEventListener('scroll', chageClassName);

