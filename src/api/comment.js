import apiCaller from "../helpers/axios";

const find = async () => {
  return await apiCaller("/comments");
};

const findById = async (id) => {
  return await apiCaller(`/comments/${id}`);
};

/* const findCategories = async () => {
  return await apiCaller("/comments/categories");
}; */

const create = async (data) => {
  const formData = JSON.stringify(data);
  return await apiCaller("/comments/add", "post", formData);
};

const update = async ({ id, data }) => {
  const formData = JSON.stringify(data);
  return await apiCaller(`/comments/${id}`, "put", formData);
};

const __delete = async (id) => {
  return await apiCaller(`/comments/${id}`, "delete");
};

export const CommentApi = {
  find,
  findById,
  create,
  update,
  delete: __delete,
};
