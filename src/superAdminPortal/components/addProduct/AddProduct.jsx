import { useFormik } from "formik";
import "./AddProduct.css";
import * as Yup from "yup";
import { CircularProgress, FormControl, FormHelperText } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/FirebaseConfig";
import { getUserId } from "../../../store/UserSlice";
const AddProduct = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.users);

  console.log(uid);

  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required("Product Name is Required"),
    price: Yup.number()
      .min(11, "Price Should be greater than 10")
      .required("Price is required"),
    code: Yup.string().required("Product Code is Required"),
  });

  const formik = useFormik({
    initialValues: {
      type: "",
      supplier: "",
      alertQuantity: 0,
      name: "",
      category: "",
      unit: 0,
      code: "",
      subCategory: "",
      cost: 0,
      price: 0,
      model: "",
      image: "",
      productQuantity: 0,
      detail: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      console.log("Product Form", values);

      try {
        const userDocRef = doc(db, "users", uid);

        const productCollectionRef = collection(userDocRef, "products");

        const docRef = await addDoc(productCollectionRef, {
          type: values.type,
          supplier: values.supplier,
          alertQuantity: values.alertQuantity,
          name: values.name,
          category: values.category,
          unit: values.unit,
          code: values.code,
          subCategory: values.subCategory,
          cost: values.cost,
          price: values.price,
          model: values.model,
          image: values.image,
          productQuantity: values.productQuantity,
          detail: values.detail,
        });

        console.log("Product added with ID:", docRef.id);

        setIsLoading(false);
      } catch (error) {
        console.error("Error adding product: ", error);
      }
    },
  });

  useEffect(() => {
    const storedUid = localStorage.getItem("uid");
    dispatch(
      getUserId({
        uid: storedUid,
      })
    );
  }, [dispatch]);
  return (
    <div className="add-product">
      <div className="add-product-container">
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <div className="form">
            <div className="group">
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Product Type </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="type"
                      id=""
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Supplier </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="supplier"
                      id=""
                      value={formik.values.supplier}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Alert Quantity</span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="alertQuantity"
                      id=""
                      value={formik.values.alertQuantity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
            </div>
            <div className="group">
              <div className="input-Text">
                <FormControl
                  variant="standard"
                  sx={{ width: "80%", mb: 2 }}
                  error={Boolean(formik.errors.name)}
                >
                  <span>Product Name </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="name"
                      id=""
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <FormHelperText>{formik.errors.name}</FormHelperText>
                    )}
                  </div>
                </FormControl>
              </div>
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Category </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="category"
                      id=""
                      value={formik.values.category}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Product Unit </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="unit"
                      id=""
                      value={formik.values.unit}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
            </div>
            <div className="group">
              <div className="input-Text">
                <FormControl
                  variant="standard"
                  sx={{ width: "80%", mb: 2 }}
                  error={Boolean(formik.errors.code)}
                >
                  <span>Product Code </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="code"
                      id=""
                      value={formik.values.code}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.code && formik.errors.code && (
                      <FormHelperText>{formik.errors.code}</FormHelperText>
                    )}
                  </div>
                </FormControl>
              </div>
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Sub Category </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="subCategory"
                      id=""
                      value={formik.values.subCategory}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Product Cost </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="cost"
                      id=""
                      value={formik.values.cost}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
            </div>
            <div className="group">
              <div className="input-Text">
                <FormControl
                  variant="standard"
                  sx={{ width: "80%", mb: 2 }}
                  error={Boolean(formik.errors.price)}
                >
                  <span>Product Price </span>
                  <div className="textfield">
                    <input
                      type="number"
                      name="price"
                      id=""
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.price && formik.errors.price && (
                      <FormHelperText>{formik.errors.price}</FormHelperText>
                    )}
                  </div>
                </FormControl>
              </div>
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Model </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="model"
                      id=""
                      value={formik.values.model}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Product Image </span>
                  <div className="textfield">
                    <input
                      type="text"
                      name="image"
                      id=""
                      value={formik.values.image}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
            </div>
            <div className="group3">
              <div className="input-Text">
                <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
                  <span>Quantity </span>
                  <div className="textfield">
                    <input
                      type="number"
                      name="productQuantity"
                      id=""
                      value={formik.values.productQuantity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </FormControl>
              </div>
            </div>
            <div className="group2">
              <div className="rich-input-Text">
                <span>Product Details </span>
                <div className="textfield">
                  <input type="text" name="" id="" />
                </div>
              </div>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <button type="submit">Add Product</button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
