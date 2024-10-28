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

// helper fucntion for clicking on anchor
function clickHelper(e){
    e.preventDefault()

    // finding the target section
    const target = document.querySelector(`${e.target.hash}`)

    // if it exists then scroll
    if(target){
        target.scrollIntoView({behavior: "smooth"})
    }
}

// setting element with active class
function setActive(element){
    element.classList.add("active")
}

// unsetting element with active
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

    // a fragment to be appended
    const liList = new DocumentFragment()

    // go over the section
    for (const section of sectionList) {

        // create li element
        const li = document.createElement("li")
        
        // create a element nad setting attributes
        const a = document.createElement("a")
        a.setAttribute("class", "menu__link")
        a.setAttribute("id", `a_${section.id}`)
        a.href = `#${section.id}`
        a.innerHTML = `${section.dataset.nav}`

        // adding event listener
        a.addEventListener("click", clickHelper)

        // append a to li
        li.appendChild(a)
        
        // append to fragment
        liList.append(li)

    }
   
    // append to ul
    element.append(liList)
}


// Add class 'active' to section when near top of viewport
function activeSection(){

    // go over sections
    for (const section of sectionList) {
        // get the boundary
        const box = section.getBoundingClientRect();
        // get the anchor
        const anchor = document.querySelector(`#a_${section.id}`)
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

// adding section to the web
function addSection(){
    
    // adding 2 for now
    for (let i = 0; i < 2; i++) {
        const section = document.createElement("section")

        const len = sectionList.length +1
        section.id = `section${len}`
        section.dataset.nav = `Section ${len}`

        const div = document.createElement("div")
        div.setAttribute("class", "landing__container")

        const h2 = document.createElement("h2")
        h2.textContent = `Section ${len}`

        const p1 = document.createElement("p")
        p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."

        const p2 = document.createElement("p")
        p2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."

        div.append(h2, p1, p2)

        section.appendChild(div)

        document.querySelector("main").appendChild(section)
    }

}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// adding a section
addSection()

// Build menu 
buildNav(navbarListElement)


// Set sections as active
document.addEventListener("scroll", activeSection)


