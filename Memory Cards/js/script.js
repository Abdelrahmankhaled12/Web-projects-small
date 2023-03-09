// Get Elements 
let showEl = document.getElementById("show"),
    clearEL = document.getElementById("clear"),
    cardsContainerEl = document.getElementById("cards-container"),
    prevButton = document.getElementById("prev"),
    nextButton = document.getElementById("next"),
    addContainerEl = document.getElementById("add-container"),
    hideButton = document.getElementById("hide"),
    questionEl = document.getElementById("question"),
    answerEl = document.getElementById("answer"),
    addCardd = document.getElementById("add-card"),
    currentEl = document.getElementById("current");

// Keep track of current card
let currentActiveCard = 0;

// Store card data
let cardsData = getCardsData();

// Get cards from local storage
function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
}

// Add card to local storage
function setCardsData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
    window.location.reload();
}

// Create all cards
function createCards() {
    cardsData.forEach((element, index) => createCard(element, index));
}

// Create a single card in DOM
function createCard(data, index) {
    // Create Element Card
    let card = document.createElement("div");
    // Add Class card In Element
    card.classList.add("card");
    // Check Index , Add Class active or Not
    if (index === 0) {
        card.classList.add("active");
    }
    // Add Elements in Element Card
    card.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
            <p>${data.question}</p>
        </div>
        <div class="inner-card-back">
            <p>${data.answer}</p>
        </div>
    </div>
    `
    // Add Element Card in Cards Container
    cardsContainerEl.appendChild(card);
    // Click Card Filp
    card.addEventListener("click", () => card.classList.toggle("show-answer"))
    // Update Number Cards
    upDateNumberCards();
}

// Show number of cards
function upDateNumberCards() {
    currentEl.innerHTML = `${currentActiveCard + 1}/${cardsContainerEl.children.length}`
}

// Call Function Create Cards
createCards();

// Event Listener
// Show Add Container
showEl.addEventListener("click", () => {
    addContainerEl.classList.add("show");
});

// Hide Add Container
hideButton.addEventListener("click", () => {
    addContainerEl.classList.remove("show");
});

// Next Button
nextButton.addEventListener("click", () => {
    if (currentActiveCard < cardsContainerEl.children.length - 1) {
        cardsContainerEl.children[currentActiveCard].classList.remove("active");
        cardsContainerEl.children[currentActiveCard].classList.add("left");
        cardsContainerEl.children[++currentActiveCard].classList.add("active");
        upDateNumberCards();
    }
});

// Prev Button
prevButton.addEventListener("click", () => {
    if (currentActiveCard > 0) {
        cardsContainerEl.children[currentActiveCard].classList.remove("active");
        cardsContainerEl.children[--currentActiveCard].classList.remove("left");
        cardsContainerEl.children[currentActiveCard].classList.add("active");
        upDateNumberCards();
    }
});

// Add new card
addCardd.addEventListener("click", () => {
    let question = questionEl.value;
    let answer = answerEl.value;
    // Check Input Empty or Not
    if (question.trim() && answer.trim()) {
        // Create Object Card Store Qustion and Answer
        const newCard = { question, answer };
        // Call Function Create Card
        createCard(newCard);
        // Clear input 
        questionEl.value = "";
        answerEl.value = "";
        // Remove Class Show on Element addContainerEl
        addContainerEl.classList.remove("show");
        // Add Object In Array CardsData
        cardsData.push(newCard);
        // Add Object In Local Storage
        setCardsData(cardsData);
    } else {
        alert("Please Enter a Question and Answer");
    }
});

// Clear cards button
clearEL.addEventListener('click', () => {
    localStorage.clear();
    addContainerEl.innerHTML = '';
    window.location.reload();
});