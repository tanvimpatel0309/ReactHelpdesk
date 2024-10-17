/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category } from "../utility/models/category.model";
import CategoryService from "../utility/services/category.services";
/**
* Custom hook to manage category creation.
 * 
 * @returns {Object} Contains the `createCategory` function to add a new category.
 */


const useCategory = () => {
    /**
    * Adds a new category via `CategoryService`.
    * 
    * @param {Category} categoryFormBody - The category data.
    */
    const createCategory = (categoryFormBody: Category) => {
        CategoryService.addCategory(categoryFormBody)
    };

    /**
     * Retrieves a list of categories from the server and invokes a callback 
     * with the retrieved data.
     * 
     * @param {function} callback - A function that receives the category data 
     * as its argument when the data is successfully fetched.
     */
    const getCategoryList = (callback: (registrationList: any) => void) => {
        CategoryService.getCategories().then((res) => {
            callback(res.data);
        });
    };

    /**
     * Deletes a category by its ID using the CategoryService.
     * 
     * @param categoryId - The ID of the category to delete.
     */
    const deleteCategory = (categoryId: number) => {
        CategoryService.deleteCategory(categoryId)
            .then() // Handles the successful deletion of the category.
            .catch(error => error); // Catches and returns any errors that occur during the deletion.
    };

    /**
    * Edits a category by sending updated data to the server.
    * Logs success or error based on the response.
    *
    * @param {Category} categoryFormBody - Updated category data.
    * @param {number} categoryId - ID of the category to edit.
    */
    const editCategory = (categoryFormBody: Category, categoryId: number) => {
        CategoryService.editCategory(categoryFormBody, categoryId)
            .then((res) => {
                console.log('edit success', res.data);
            })
            .catch(error => console.error(error));
    };


    /**
     * Fetches category data by ID and passes it to a callback function.
     * Handles success and error cases.
     *
     * @param {number} categoryId - ID of the category to fetch.
     * @param {(registrationList: any) => void} callback - Function to handle the fetched data.
     */
    const getCategoryDataById = (categoryId: number, callback: (registrationList: any) => void) => {
        CategoryService.getCategoryById(categoryId)
            .then(res => callback(res.data))
            .catch(error => console.error(error));
    };


    return { createCategory, getCategoryList, deleteCategory, editCategory, getCategoryDataById }
}
export default useCategory;