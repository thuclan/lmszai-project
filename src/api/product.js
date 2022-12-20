import apiCaller from '../helpers/axios';

const find = async () => await apiCaller('/products');

const findById = async (id) => await apiCaller(`/products/${id}`);

/* const findCategories = async () => {
  return await apiCaller("/products/categories");
}; */

const create = async (data) => {
    const formData = JSON.stringify(data);
    return await apiCaller('/products/add', 'post', formData);
};

const update = async ({ id, data }) => {
    const formData = JSON.stringify(data);
    return await apiCaller(`/products/${id}`, 'put', formData);
};

const __delete = async (id) => await apiCaller(`/products/${id}`, 'delete');

export const ProductApi = {
    find,
    findById,
    create,
    update,
    delete: __delete
};
