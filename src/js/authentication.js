// Import necessary Firebase Authentication functions and other utilities.
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { listOfFavorites } from "./utils/firebase";
import { addContent } from "./favorite/favorite";

// Initialize a GoogleAuthProvider instance for Google sign-in.
const provider = new GoogleAuthProvider();

// Get references to DOM elements for sign-in, sign-out, and user display.
const SingIn = document.getElementById("sign-in");
const SignOut = document.getElementById("sign-out");
const User = document.getElementById("user");

// Set the user email in the UI if available in localStorage.
User.innerHTML = localStorage.getItem("user");

// Get the current URL of the page.
const currentUrl = window.location.href.toString();

// Update UI based on the presence of a logged-in user.
if (localStorage.getItem("user")) {
  SignOut.classList.remove("display-none"); // Show the "Sign Out" button.
  SingIn.classList.add("display-none"); // Hide the "Sign In" button.
  SingIn.style.display = "none";
}

// Function to handle Google Sign-In.
export const googleSignin = async () => {
  await signInWithPopup(auth, provider) // Opens a Google Sign-In popup.
    .then((result) => {
      // Retrieve the user's credentials and token.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user; // Get the signed-in user's details.

      // Save the user email in localStorage and update the UI.
      localStorage.user = user.email;
      User.innerHTML = localStorage.getItem("user");
      SignOut.classList.remove("display-none");
      SingIn.classList.add("display-none");

      SingIn.style.display = "none";
      listOfFavorites(); // Fetch the user's favorite items from Firebase.
    })
    .catch((error) => {
      // Handle errors during the sign-in process.
      const errorMessage = error.message;
      console.log(errorMessage);
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

// Function to handle user logout.
export const logOut = async () => {
  await signOut(auth) // Sign out the user from Firebase Authentication.
    .then(() => {
      // Clear user data from the UI and localStorage.
      User.innerHTML = "";
      localStorage.removeItem("user");

      let part = currentUrl.slice(-14); // Check the current page URL.

      // If on the favorites page, refresh the content.
      if (part === favorites.html) {
        addContent();
      }
    })
    .catch((error) => {
      // Handle errors during the sign-out process.
      console.log(error.message);
    });
  // Update UI to reflect the logged-out state.
  SignOut.classList.add("display-none");
  SingIn.classList.remove("display-none");
  SingIn.style.display = "flex";
  localStorage.removeItem("favorites"); // Clear stored favorite items.
};

// Add event listeners for the sign-in and sign-out buttons.
SingIn.addEventListener("click", googleSignin);
SignOut.addEventListener("click", logOut);
