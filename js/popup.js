document.getElementById("saveBtn").addEventListener("click", function () {
  let hourlyWage = document.getElementById("hourlyWage").value;
  chrome.storage.local.set({ hourlyWage: hourlyWage });
});
