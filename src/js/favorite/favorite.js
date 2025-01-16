// Import a function for rendering text content.
import { markupText } from "./markup-text";

// Import a function for rendering a list of items.
import { markupList } from "./markup-list";

// Import a utility function to fetch the list of favorite items from Firebase.
import { listOfFavorites } from "../utils/firebase";

// Main function to add content dynamically to the page.
export function addContent() {
  // Retrieve the list of favorites from Firebase and store it in local storage.
  listOfFavorites();

  // Parse the "favorites" data stored in local storage.
  const favorites = JSON.parse(localStorage.getItem("favorites"));

  // If there are no favorite items, render default text content and exit.
  if (!favorites?.length) {
    markupText();
    return;
  }

  // If favorite items exist, render them as a list.
  markupList(favorites);
}
