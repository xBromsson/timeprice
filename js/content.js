// Function to find prices in elements and attach a toolbar
function processPrices() {
  const regex = /\$\d+(\.\d{2})?/g;
  const prices = [];
  const bodyText = document.body.innerText;

  let match = regex.exec(bodyText);

  while (match) {
    prices.push(match[0]);
    let range = document.createRange();
    let node = document.createTextNode("gotcha"); // This is your "toolbar" text node

    // Try to highlight and attach the toolbar to the found price
    if (window.find(match[0])) {
      // Use window.find() to move the selection to the found price
      range = window.getSelection().getRangeAt(0);
      range.insertNode(node);
    }

    match = regex.exec(bodyText);
  }

  // You can now do something with the 'prices' array or simply log it for debugging
  console.log(prices);
}

chrome.storage.local.get("hourlyWage", function (data) {
  let hourlyWage = data.hourlyWage;
  if (hourlyWage) {
    processPrices(); // Call the function inside the callback after getting hourlyWage
  }
});

// Optional: If the webpage is dynamic, consider using a MutationObserver to detect changes in the DOM
