import React, { useEffect, useState } from "react";
import { ProductApi } from "../../api/product";
import { array } from "../../shared/data/data";
import Course from "./Course";

function Courses() {
  const [products, setProducts] = useState([]);
  // const [status,setStatus] = useState(false);

  const getProducts = async () => {
    const res = await ProductApi.find();
    setProducts(res.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="courses">
      <Course products={products} content={array[0]} status={false} />
      <Course products={products} content={array[1]} status={true} />
      <Course products={products} content={array[2]} status={true} />
    </div>
  );
}

export default Courses;
