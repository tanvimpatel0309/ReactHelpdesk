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
                    <tr>
                        <td className='fw-bold'>1</td>
                        <td className='fw-bold text-capitalize'>HR</td>
                        <td className='fw-bold text-capitalize'>Tanvi</td>
                        {/* Starts:Action buttons */}
                        <td>
                            <button className='btn btn-secondary me-4'>Add Subcategory</button>
                            <button className='btn btn-secondary me-4'>Edit</button>
                            <button type='button' className='btn btn-danger'>Delete</button>
                        </td>
                        {/* Ends:Action buttons */}
                    </tr>
                </tbody>
                {/* Ends:Table body */}
                
            </table>
            {/* Ends:Category Table */}

        </div>
    )
}
export default CategoryList;
