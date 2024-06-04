import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CreateJob } from './views/CreateJob';
import { InventoryDashboard } from './layout/InventoryDashboard';
import { DataGrip } from './views/DataGrip/DataGrip';
import { CategoryList } from './views/CategoryList';
import { routerPaths } from './constants/routerPaths';
import { ErrorPage } from './components/PageNotFound/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/*',
    element: <ErrorPage />, // Set the custom error component
  },
  { path: routerPaths.default, element: <CreateJob /> },
  {
    path: routerPaths.inventoryDashboard,
    element: <InventoryDashboard />,
    children: [
      {
        index: 1,
        element: <DataGrip />,
      },
      {
        path: routerPaths.categoryList,

        element: <CategoryList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
