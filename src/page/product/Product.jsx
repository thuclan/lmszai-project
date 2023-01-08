import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ProductItem from '../../components/product/ProductItem';
import { auth } from '../../utils/firebase';

function Product() {
	const [user, loading, error] = useAuthState(auth);
	return <ProductItem user={user} />;
}

export default Product;
