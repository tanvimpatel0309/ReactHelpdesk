import axios, { AxiosResponse } from 'axios';
import { Category } from '../models/category.model';

/**
 * Sends a POST request to add a new category to the server.
 * @param categoryFormBody - The category object to be added, containing necessary data (e.g., assigneeName, category). 
 * @returns  A promise that resolves with the server's response, 
 * which includes the newly added category details if successful
 */
const addCategory = (categoryFormBody: Category): Promise<AxiosResponse<Category, Category>> => {
    return axios.post(`http://localhost:3000/category`, categoryFormBody);
};

/**
 * Fetches categories from the server.
 * 
 * @returns {Promise<AxiosResponse<Category[], Category[]>>} A promise that resolves 
 * to the Axios response containing an array of Category objects.
 */
const getCategories = (): Promise<AxiosResponse<Category[], Category[]>> => {
    return axios.get('http://localhost:3000/category');
};

const CategoryService = {addCategory, getCategories};

export default CategoryService;