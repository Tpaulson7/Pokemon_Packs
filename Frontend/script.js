import { fetchCardData, generateRandomPack, renderPack } from './components/packs.js';

document.getElementById("open-pack-btn").addEventListener("click", async () => {
  const cards = await fetchCardData();
  const pack = generateRandomPack(cards);
  renderPack(pack);
});
