    // Get slider items
    let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

    // Get Number of Slides
    let slidesCount = sliderImages.length;

    // Set Current slide 
    let currentSlide = 1;

    // slide Number String Element
    let slideNumberElement = document.getElementById("slide-number");

    // previous and Next Buttons
    let nextButton = document.getElementById("next");
    let prevButton = document.getElementById("prev");

    // Handle Click on Previous and Next Buttons
    nextButton.onclick = nextSlide;
    prevButton.onclick = prevSlide;

    // Create the Main Ul Element
    let PaginationElement = document.createElement("ul");

    // Set ID on Create Ul Element 
    PaginationElement.setAttribute("id","pagination-ul");

    // Create List Items Based On Slides Count
    for(let i = 1 ; i <= slidesCount ; i++) {
        // Create The LI
        let PaginationItem = document.createElement("li");

        // Set Custom Attribute
        PaginationItem.setAttribute("data-index",i);

        // Set item Content
        PaginationItem.appendChild(document.createTextNode(i));

        // Append items to the Main Ul list
        PaginationElement.appendChild(PaginationItem)
    }
    // Add the cteated Ul Element to the Page
    document.getElementById("indicators").appendChild(PaginationElement);

    // Get The New Created Ul
    let PaginationUl = document.getElementById("pagination-ul");

    // Loop Through All Bullets Items
    for(let i = 0 ; i < PaginationUl.children.length ; i++) {
        Array.from(PaginationUl.children)[i].onclick = function () {
            currentSlide = this.getAttribute("data-index");
            theChecker();
        }
    }
    // Trigger The Checker Function
    theChecker();

    // Next slide Function

    function nextSlide() {
        if(nextButton.classList.contains("disabled")){
            return false;
        }
        currentSlide++;
        theChecker();
    }

    // previous slide Function

    function prevSlide() {
        if(prevButton.classList.contains("disabled")){
            return false;
        }
        currentSlide--;
        theChecker();
    }
    // Create the Checker Function
    function theChecker() {
        // Set the slide Number
        slideNumberElement.textContent = "Slide #" + (currentSlide) + " of " + (slidesCount);

        // Remove All Active Classes
        removeAllActive();

        // Set Active Class On Current Slide
        sliderImages[currentSlide - 1].classList.add("active");

        // Set Active Class on Current Pagination item
        PaginationUl.children[currentSlide - 1].classList.add("active");

        // Check if Current Slide is First
        currentSlide == 1 ? prevButton.classList.add("disabled") : prevButton.classList.remove("disabled");

        // Check if Current Slide is Last
        
        currentSlide == slidesCount ? nextButton.classList.add("disabled") : nextButton.classList.remove("disabled");
        
    }

    // Remove All Active Classes From Images and Pagination Bullets
    function removeAllActive() {

        // loop Through images
        sliderImages.forEach((img)=> img.classList.remove("active"));

        // loop Through Pagination Bullets
        Array.from(PaginationUl.children).forEach((item)=>item.classList.remove("active"));
    }

