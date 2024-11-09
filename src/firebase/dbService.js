import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export const addProduct = async (userId, productData) => {
  try {
    const userDocRef = doc(db, "users", userId);

    const productCollectionRef = collection(userDocRef, "products");

    const productDocRef = await addDoc(productCollectionRef, productData);

    return productDocRef.id;
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};
export const getProducts = async (userId) => {
  try {
    // Reference to the user's document
    const userDocRef = doc(db, "users", userId);

    // Reference to the 'products' subcollection within the user's document
    const productCollectionRef = collection(userDocRef, "products");

    // Fetch all documents in the 'products' subcollection
    const querySnapshot = await getDocs(productCollectionRef);

    // Extract the product data from each document
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Capture the document ID for each product
      ...doc.data(), // Spread the document data
    }));

    return products;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];
  }
};

export const updateProduct = async (productId, updatedData) => {
  try {
    // Get a reference to the product document
    const productDocRef = doc(db, "users", userId, "products", productId);

    // Update the product document with the new data
    await updateDoc(productDocRef, updatedData);

    console.log("Product updated successfully");
  } catch (error) {
    console.error("Error updating product: ", error);
  }
};

export const deleteProduct = async (userId, productId) => {
  try {
    // Get a reference to the product document
    const productDocRef = doc(db, "users", userId, "products", productId);

    // Delete the product document
    await deleteDoc(productDocRef);

    console.log("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product: ", error);
  }
};
