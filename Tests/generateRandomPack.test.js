import { generateRandomPack } from "../Frontend/components/packs";

let mockData = [
    { name: "Pikachu", rarity: "Common", type: "Electric" },
    { name: "Charmander", rarity: "Common", type: "Fire" },
    { name: "Bulbasaur", rarity: "Common", type: "Grass" },
    { name: "Squirtle", rarity: "Common", type: "Water" },
    { name: "Pidgey", rarity: "Common", type: "Flying" },

    { name: "Ivysaur", rarity: "Uncommon", type: "Grass" },
    { name: "Charmeleon", rarity: "Uncommon", type: "Fire" },
    { name: "Wartortle", rarity: "Uncommon", type: "Water" },
    { name: "Raticate", rarity: "Uncommon", type: "Normal" },

    { name: "Charizard", rarity: "Rare", type: "Fire" },
    { name: "Blastoise", rarity: "Rare", type: "Water" },
    { name: "Venusaur", rarity: "Rare", type: "Grass" },

    { name: "Mewtwo", rarity: "HoloRare", type: "Psychic" },
    { name: "Zapdos", rarity: "HoloRare", type: "Electric" },

    { name: "Fire Energy", rarity: "Energy", type: "Energy" },
    { name: "Water Energy", rarity: "Energy", type: "Energy" },
    { name: "Grass Energy", rarity: "Energy", type: "Energy" },
];


describe("Pack Generation", () => {
    let pack;
  
    beforeEach(() => {
      // Generate a new pack before each test to ensure isolation
      pack = generateRandomPack(mockData);
    });
  
    test('should generate exactly 5 common cards', () => {
      const commons = pack.filter(card => card.rarity === 'Common');
      expect(commons).toHaveLength(5);
    });
  
    test('should generate exactly 3 uncommon cards', () => {
      const uncommons = pack.filter(card => card.rarity === 'Uncommon');
      expect(uncommons).toHaveLength(3);
    });
  
    test('should generate exactly 1 rare card', () => {
      const rares = pack.filter(card => card.rarity === 'Rare' || card.rarity === 'HoloRare');
      expect(rares).toHaveLength(1);
    });
  
    test('should generate exactly 1 energy card', () => {
      const energy = pack.filter(card => card.type === 'Energy');
      expect(energy).toHaveLength(1);
    });
  
    test('should generate a total of 10 cards', () => {
      expect(pack).toHaveLength(10);
    });
  });