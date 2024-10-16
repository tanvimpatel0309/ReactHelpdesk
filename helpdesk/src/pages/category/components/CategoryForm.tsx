
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import useCategory from "../hooks/useCategory";

function CategoryForm() {
    const { createCategory } = useCategory();
    // Yup validation schema for the form, ensuring required fields are provided
    const validationSchema = Yup.object({
        category: Yup.string().required('Category is required'),
        assigneeName: Yup.string().required('Assignee is required'),
    });

    // Initial values for the category form fields
    const initialValues = {
        category: '',
        assigneeName: ''
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(formData, { resetForm }) => {
                createCategory(formData)
                // Reset the form fields
                resetForm();
                
            }}>
            {formik => (
                <Form className='col-xl-8 col-lg-6 col-12 border rounded pb-4'>
                    <header className='border-bottom p-3 mb-3'>
                        <h1 className='mb-0 h3'>Add Category</h1>
                    </header>
                    <div className='mx-4'>
                        {/* Starts: Category */}
                        <div className='mb-3'>
                            <Field
                                type='text'
                                name='category'
                                placeholder='Enter Category'
                                className='form-control' />
                            <ErrorMessage
                                name='category'
                                component='div'
                                className='text-danger' />
                        </div>
                        {/* Ends: Category */}
                        
                        {/* Starts: Assignee */}
                        <div className='mb-3'>
                            <Field
                                type='text'
                                name='assigneeName'
                                placeholder='Enter Assignee'
                                className='form-control' />
                            <ErrorMessage
                                name='assigneeName'
                                component='div'
                                className='text-danger' />
                        </div>
                    </div>
                    
                    <footer className='mx-4'>
                        {/* Starts: Submit button */}
                        <button
                            disabled={formik.isSubmitting}
                            className='btn btn-primary'
                            type='submit'
                            title='Submit form'>
                            Add Category
                        </button>
                    {/* Ends: Submit button */}
                    </footer>
                </Form>
            )}
        </Formik>
    )
}

export default CategoryForm;
