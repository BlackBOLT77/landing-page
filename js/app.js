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

const navbarListElement = document.querySelector("#navbar__list")
const sectionList = document.getElementsByTagName("section")

// console.log(navbarListElement)
// console.log(sectionList)
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function clickHelper(e){
    e.preventDefault()

    console.log(e.target.hash)

    const target = document.querySelector(`${e.target.hash}`)

    if(target){
        target.scrollIntoView({behavior: "smooth"})
    }
}

function setActive(element){
    element.classList.add("active")
}

function unsetActive(element){
    element.classList.remove("active")
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(element){
    const liList = new DocumentFragment()

    for (const section of sectionList) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.href = `#${section.id}`
        a.innerHTML = `${section.dataset.nav}`

        a.addEventListener("click", clickHelper)

        li.appendChild(a)
        
        liList.append(li)

    }
   
    element.append(liList)
}


// Add class 'active' to section when near top of viewport
function activeSection(){
    for (const section of sectionList) {
        const box = section.getBoundingClientRect();
        const anchor = document.querySelector(`#${section.id}`)
        const VALUE = 250

        if (box.top <= VALUE && box.bottom >= VALUE) {
            //apply active state on current section and corresponding Nav link
            setActive(section)
            setActive(anchor)
            
        } else {
            //Remove active state from other section and corresponding Nav link
            unsetActive(section)
            unsetActive(anchor)
        }
     }
}

function addSection(){
    const section = document.createElement("section")
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav(navbarListElement)

// Set sections as active
document.addEventListener("scroll", activeSection)

// adding a section

