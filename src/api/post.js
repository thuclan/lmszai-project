import apiCaller from '../helpers/axios';

const find = async () => await apiCaller('/posts');

const findById = async (id) => await apiCaller(`/posts/${id}`);

/* const findCategories = async () => {
  return await apiCaller("/posts/categories");
}; */

const create = async (data) => {
    const formData = JSON.stringify(data);
    return await apiCaller('/posts/add', 'post', formData);
};

const update = async ({ id, data }) => {
    const formData = JSON.stringify(data);
    return await apiCaller(`/posts/${id}`, 'put', formData);
};

const __delete = async (id) => await apiCaller(`/posts/${id}`, 'delete');

export const PostApi = {
    find,
    findById,
    create,
    update,
    delete: __delete
};
