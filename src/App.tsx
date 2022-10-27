import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Header } from "./components/header";
import { CountriesProvider } from "./context/countriesContext";
import { Detail, Home } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "countries/:country",
    element: <Detail />,
  }
]);

function App() {
  return (
    <>
      <Header />
      
      <CountriesProvider>
        <RouterProvider router={router} />
      </CountriesProvider>
    </>
  )
}

export default App
