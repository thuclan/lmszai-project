import apiCaller from '../helpers/axios';

const find = async () => await apiCaller('/carts');

const findById = async (id) => await apiCaller(`/carts/${id}`);

/* const findCategories = async () => {
  return await apiCaller("/carts/categories");
}; */

const create = async (data) => {
  const formData = JSON.stringify(data);
  return await apiCaller('/carts/add', 'post', formData);
};

const update = async ({ id, data }) => {
  const formData = JSON.stringify(data);
  return await apiCaller(`/carts/${id}`, 'put', formData);
};

const __delete = async (id) => await apiCaller(`/carts/${id}`, 'delete');

export const CartApi = {
  find,
  findById,
  create,
  update,
  delete: __delete
};
