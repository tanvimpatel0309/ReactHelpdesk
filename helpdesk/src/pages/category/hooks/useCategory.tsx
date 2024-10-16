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

    return { createCategory, getCategoryList, deleteCategory }
}
export default useCategory;