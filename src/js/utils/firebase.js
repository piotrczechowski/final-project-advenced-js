// Import necessary functions from Firebase Firestore SDK.
import {
  collection, // Used to reference a collection in Firestore.
  doc, // Used to reference a specific document in Firestore.
  setDoc, // Used to create or update a document in Firestore.
  deleteDoc, // Used to delete a specific document in Firestore.
  getDocs, // Used to fetch all documents from a collection in Firestore.
} from "firebase/firestore";

// Import the database (db) and authentication (auth) instances from the Firebase configuration file.
import { db, auth } from "../../../firebase";

// Function to update a Firestore document with a given card object.
export const updateFirestore = async (card) => {
  const user = auth.currentUser; // Get the currently logged-in user.
  if (user) {
    // Ensure the user is authenticated before proceeding.
    const docData = card; // The data to store in Firestore.
    try {
      // Create or update a document in the user's Firestore collection using the card's ID.
      await setDoc(doc(db, user.email, card._id), docData);
    } catch (er) {
      console.log(er.message); // Log any errors that occur during the operation.
    }
  }
  if (!user) {
    return; // Exit if no user is authenticated.
  }
};

// Function to delete a document from Firestore by ID.
export const deleteFavorites = async (id) => {
  const user = localStorage.getItem("user"); // Get the user identifier from local storage.
  if (user) {
    // Ensure the user identifier exists.
    try {
      // Delete a specific document from the user's collection using the given ID.
      await deleteDoc(doc(db, user, id));
    } catch (er) {
      console.log(er.message); // Log any errors that occur during the operation.
    }
  }
  if (!user) {
    return; // Exit if no user identifier is found.
  }
};

// Function to retrieve a list of favorite items from Firestore and save them to local storage.
export const listOfFavorites = async () => {
  const user = localStorage.getItem("user"); // Get the user identifier from local storage.

  const favorites = []; // Initialize an array to store the favorite items.

  if (!user) return; // Exit if no user identifier is found.

  // Fetch all documents from the user's collection in Firestore.
  const querySnapshot = await getDocs(collection(db, user));

  // Iterate over each document and add its data to the favorites array.
  querySnapshot.forEach((doc) => {
    favorites.push(doc.data());
  });

  // Save the list of favorites to local storage as a JSON string.
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
