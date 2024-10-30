import { Api } from "@mui/icons-material";

export const addProduct = async (data) => {
  try {
    const docRef = addDoc(collection(db, "products"), data);
    return docRef.id;
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting products: ", error);
  }
};

//  google authentication
//  text summarization Api
//  E2 speech practice
//  Grand Quiz (Crypto)
//  Quiz (Stats)

export const updateProduct = async (productId, updatedData) => {
  try {
    const docRef = doc(db, "products", productId);
    await updateDoc(docRef, updatedData);
    return `Product with ID ${productId} updated successfully.`;
  } catch (error) {
    console.error("Error updating product: ", error);
  }
};

export const deleteProduct = async (productId) => {
  try {
    const docRef = doc(db, "products", productId);
    await deleteDoc(docRef);
    return `Product with ID ${productId} deleted successfully.`;
  } catch (error) {
    console.error("Error deleting product: ", error);
  }
};
