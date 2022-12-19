import apiCaller from "../helpers/axios";

const find = async () => {
  return await apiCaller("/users");
};

const findById = async (id) => {
  return await apiCaller(`/users/${id}`);
};

/* const findCategories = async () => {
  return await apiCaller("/users/categories");
}; */

const create = async (data) => {
  const formData = JSON.stringify(data);
  return await apiCaller("/users/add", "post", formData);
};

const update = async ({ id, data }) => {
  const formData = JSON.stringify(data);
  return await apiCaller(`/users/${id}`, "put", formData);
};

const __delete = async (id) => {
  return await apiCaller(`/users/${id}`, "delete");
};

export const UserApi = {
  find,
  findById,
  create,
  update,
  delete: __delete,
};
