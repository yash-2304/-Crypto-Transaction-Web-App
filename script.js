document.addEventListener("DOMContentLoaded", () => {
  const priceList = document.getElementById("crypto-prices");
  const form = document.getElementById("transaction-form");
  const historyList = document.getElementById("history-list");

  // Fetch crypto prices
  async function fetchPrices() {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
    const data = await res.json();

    priceList.innerHTML = `
      <li>Bitcoin: $${data.bitcoin.usd}</li>
      <li>Ethereum: $${data.ethereum.usd}</li>
    `;
  }

  fetchPrices();
  setInterval(fetchPrices, 10000); // Refresh every 10s

  // Handle simulated transaction
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const currency = document.getElementById("currency").value;
    const amount = document.getElementById("amount").value;

    const li = document.createElement("li");
    li.textContent = `${from} sent ${amount} ${currency} to ${to}`;
    historyList.appendChild(li);

    form.reset();
  });
});
