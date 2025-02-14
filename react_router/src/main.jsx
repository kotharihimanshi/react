import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github from './Components/Github/Github.jsx';

// const router = createBrowserRouter(             method 1 
//   [
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: '/',
//           element: <Home />
//         },
//         {
//           path: 'about',
//           element: <About />
//         },
//         {
//           path: 'contact',
//           element: <Contact />
//         }


//       ]

//     }


//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(                 //method 2 for making routes
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user/:id' element={<User />} />  
      // to access dynamic params, we use :id in path and then use match.params.id in component props.
      <Route path='/github' element={<Github />} />
    </Route>
  )
)
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
