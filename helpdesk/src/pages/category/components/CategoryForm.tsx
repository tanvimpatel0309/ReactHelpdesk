
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import useCategory from "../hooks/useCategory";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Category } from "../utility/models/category.model";

function CategoryForm() {
    // State variables for managing form data and category data fetched by ID
    const [formValues, setFormValues] = useState<Category>(); // Holds form values for the category form
    const [categoryById, setCategoryById] = useState<Category>(); // Holds the category data fetched from the server by ID

    // Extracts the 'id' parameter from the URL route
    const { id } = useParams();

    // Destructures category-related functions from the custom useCategory hook
    const { createCategory, editCategory, getCategoryDataById } = useCategory();
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

    // Fetches the category data by ID when the 'id' changes (i.e., when the route parameter updates)
    useEffect(() => {
        if (id) {
            getCategoryDataById(id, (res) => setCategoryById(res)); // Fetches category data by ID and updates the 'categoryById' state
        }
    }, [id]);

    // Sets the form values once the category data is fetched and 'categoryById' is updated
    useEffect(() => {
        if (id) {
            setFormValues(categoryById); // Updates the form values to reflect the fetched category data
        }
    }, [categoryById]);

    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(formData, { resetForm }) => {

                if (id) {
                    // If 'id' exists, edit the existing category
                    editCategory(formData, id)

                } else {
                    // Otherwise, create a new category
                    createCategory(formData)
                }
                // Resets the form fields after successful submission
                resetForm()
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
