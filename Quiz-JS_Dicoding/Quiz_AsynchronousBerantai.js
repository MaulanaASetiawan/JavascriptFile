const { buyTollRoadCard, topUpBalance, useTollRoad } = require("./utils");
async function getTollAccess() {
  try {
    const card = await buyTollRoadCard(25);
    const topUp = await topUpBalance(card, 10);
    const access = await useTollRoad(topUp);
  } catch (error) {
    console.log(error.message);
  }
}

// Jangan hapus kode di bawah ini
getTollAccess();