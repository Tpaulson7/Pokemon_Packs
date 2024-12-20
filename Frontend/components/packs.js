// Fetch the data from cards.json
export async function fetchCardData() {
    try {
      const response = await fetch("./cards.json");
      const data = await response.json();
      return data.cards;
    } catch (error) {
      console.error("Error fetching card data:", error);
      return [];
    }
}
  
// Shuffles array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
}
  
// Create random pack
export function generateRandomPack(cards) {
    let pack = [];
    
    // Add 5 commons
    const commonCards = cards.filter(card => card.rarity === "Common");
    shuffleArray(commonCards); // Shuffle
    pack.push(...commonCards.slice(0, 5)); // Take the first 5 shuffled cards
  
    // Add 3 uncommons
    const uncommonCards = cards.filter(card => card.rarity === "Uncommon");
    shuffleArray(uncommonCards); // Shuffle the uncommon cards
    pack.push(...uncommonCards.slice(0, 3)); // Take the first 3 shuffled cards
    
    // Add 1 rare or holoRare
    const rareCards = cards.filter(card => card.rarity === "Rare");
    const holoRareCards = cards.filter(card => card.rarity === "HoloRare");
    const combinedRareCards = [...rareCards, ...holoRareCards];
    shuffleArray(combinedRareCards); // Shuffle
    pack.push(combinedRareCards[0]); // Take the first shuffled card
    
    // Add 1 energy card
    const energyCards = cards.filter(card => card.type === "Energy");
    shuffleArray(energyCards); // Shuffle
    pack.push(energyCards[0]); // Take the first shuffled card
  
    return pack;
}  
  
// Render cards
export function renderPack(pack) {
    const container = document.getElementById("pack-container");
    container.innerHTML = "";  // Clear previous pack
  
    pack.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.name}" style="width: 150px; height: auto;">
        <p>${card.name}</p>
      `;
      container.appendChild(cardElement);
    });
}
  