// Intantiate DossierLibrary
const dossierLibrary = new DossierLibrary();

// Intantiate UI
const ui = new UI();

// Search input
const searchUser = document.querySelector("#searchUser");

// Search input event listener
searchUser.addEventListener("keydown", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    dossierLibrary.getData(userText).then((data) => {
      if (data.userData.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.userData);
        ui.showRepos(data.repoData);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
