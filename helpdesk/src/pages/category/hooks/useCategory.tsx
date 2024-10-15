import { Category } from "../utility/models/category.model";
import CategoryService from "../utility/services/category.services";

const useCategory = () => {
    const createCategory = (categoryFormBody: Category) => {
        CategoryService.addCategory(categoryFormBody)
    };
    return {createCategory}
}
export default useCategory;