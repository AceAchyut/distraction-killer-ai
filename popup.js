document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      alert("Focus protection toggled!");
    });
  } else {
    console.log("Toggle button not found.");
  }
});
