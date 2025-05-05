import Layout from "./component/layout/Layout"
import Home from "./component/Home"
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import SearchPage from "./component/SearchPage";
import Search from "./component/Search";
import Login from "./component/Login";


const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <h4>such a page doesnt exist</h4>,
    children:[{
      index:true,
      element:<Home/>
    },
    {
      path: '/search',
      element: <SearchPage/>
    }
  ]
  }
 
])
function App() {
  
  return (
    <ChakraProvider>
    <RouterProvider router={route} >
    <div>
      <Layout/>
    </div>
    </RouterProvider>
    </ChakraProvider>
  )
}

export default App
