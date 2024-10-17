
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from '../src/pages/category/Category';
import CategoryList from '../src/pages/category/components/CategoryList';
import CategoryForm from './pages/category/components/CategoryForm';

/**
 * 
 * @returns Approutes
 */
function AppRoutes() {
    const router = [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '',
                    element: <Category />,
                    children: [
                        {
                            path: '',
                            element: <CategoryList />
                        },
                        {
                            path: 'add',
                            element: <CategoryForm />,
                        },
                        {
                            path: ':id',
                            element: <CategoryForm />,
                        },
                    ]

                },
            ],
        }
    ]
    const route = createBrowserRouter(router);
    return <RouterProvider router={route} />
}
export default AppRoutes;
