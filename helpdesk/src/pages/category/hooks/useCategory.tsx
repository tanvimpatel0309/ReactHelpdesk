import { Category } from "../utility/models/category.model";
import CategoryService from "../utility/services/category.services";
/**
* Custom hook to manage category creation.
 * 
 * @returns {Object} Contains the `createCategory` function to add a new category.
 */

/**
* Adds a new category via `CategoryService`.
* 
* @param {Category} categoryFormBody - The category data.
*/
const useCategory = () => {
    const createCategory = (categoryFormBody: Category) => {
        CategoryService.addCategory(categoryFormBody)
    };
    return {createCategory}
}
export default useCategory;