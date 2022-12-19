import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ProductItem() {
  const { state } = useLocation(); // <-- access route state

  const { product } = state || {}; // <-- unpack the item from state

  console.log(product);

  return product ? (
    <div>
      <img src={product.thumbnail} alt="" />
      <p>{product.brand}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  ) : (
    'No item matched/found.'
  );
}

export default ProductItem;
