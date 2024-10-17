/* eslint-disable no-debugger */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../utility/models/category.model";
import useCategory from "../hooks/useCategory";

function CategoryList() {
    // Destructure 'getCategoryList, deleteCategory' from a custom hook 'useCategory'.
    const { getCategoryList, deleteCategory } = useCategory();

    // Initialize 'categoryList' state as an empty array of 'Category' type.
    const [categoryList, setCategoryList] = useState<Category[]>([]);

    useEffect(() => {
        // Effect to fetch the category list when the component is mounted.
        getCategoryList((res) => {
            // Call 'getCategoryList' and pass a callback function to handle the response.
            setCategoryList(res);
            // Update the 'categoryList' state with the fetched category data.
        });
    }, []); // Empty dependency array to ensure this effect runs only once when the component mounts.


    /**
     * Deletes a category by its ID and updates the category list.
     * 
     * @param id - The ID of the category to delete.
     */
    const deleteCategoryById = (id: number) => {
        deleteCategory(id);
        setCategoryList((prevCategories) =>
            prevCategories.filter(category => category.id !== id)
        );
    };

    return (
        <div className='w-100'>
            {/* starts:Category Header */}
            <header className='d-flex mb-3'>
                <h1 className='h2 flex-grow-1'>Category</h1>
                {/* starts:Add Category Button */}
                <Link
                    to="add"
                    className='btn btn-primary d-flex align-items-center'>Add Category</Link>
            </header>
            {/* Ends:Category Header */}

            {/* Starts:Category Table */}
            <table className='table'>
                {/* Starts: Table heading */}
                <thead>
                    <tr>
                        {/*the scope="col" Defines as column header */}
                        <th scope="col" className='text-uppercase'>ID</th>
                        <th scope="col" className='text-uppercase'>Category</th>
                        <th scope="col" className='text-uppercase'>Assignee</th>
                        <th scope="col" className='w-lg'>Action</th>
                    </tr>
                </thead>
                {/* Ends: Table heading */}

                {/* Starts:Table body */}
                <tbody>
                    {categoryList.map(({ id, category, assigneeName }) => <tr key={id}>
                        <td className='fw-bold'>{id}</td>
                        <td className='fw-bold text-capitalize w-50'>{category}</td>
                        <td className='fw-bold text-capitalize'>{assigneeName}</td>
                        {/* Starts:Action buttons */}
                        <td className="w-25">
                            <Link
                                to={`${id}`}
                                className='btn btn-secondary me-4'>Edit</Link>
                            <button
                                type='button'
                                className='btn btn-danger'
                                onClick={() => { deleteCategoryById(id) }}>Delete</button>
                        </td>
                        {/* Ends:Action buttons */}
                    </tr>)}
                </tbody>
                {/* Ends:Table body */}

            </table>
            {/* Ends:Category Table */}

        </div>
    )
}
export default CategoryList;
