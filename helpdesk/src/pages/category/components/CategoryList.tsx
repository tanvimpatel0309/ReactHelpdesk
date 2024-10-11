import { Link } from "react-router-dom";

function CategoryList() {
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
            {/* starts:Category Table */}
            <table className='table'>
                <thead>
                    <tr>
                        <th className='text-uppercase'>id</th>
                        <th className='text-uppercase'>category</th>
                        <th className='text-uppercase'>assignee</th>
                        <th className='w-lg'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='fw-bold'>1</td>
                        <td className='fw-bold text-capitalize'>Hr</td>
                        <td className='fw-bold text-capitalize'>tanvi</td>
                        <td>
                            <button

                                className='btn btn-secondary me-4'>Add Subcategory</button>
                            <button
                                className='btn btn-secondary me-4'>Edit</button>
                            <button
                                type='button'
                                className='btn btn-danger'
                            >Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CategoryList;
