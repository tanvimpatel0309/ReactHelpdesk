import axios, { AxiosResponse } from 'axios';
import { Category } from '../models/category.model';

/**
 * Add Category
 * @param categoryFormBody 
 * @returns promise 
 */
const addCategory = (categoryFormBody: Category): Promise<AxiosResponse<Category, Category>> => {
    return axios.post(`http://localhost:3000/category`, categoryFormBody);
};

const CategoryService = {addCategory};

export default CategoryService;