import { RouteList } from "../interfaces/route";
import Accueil from "../pages/Accueil";
import Products from "../pages/Products";

export const ROUTES: RouteList[] = [
    {
        path: '/',
        element: <Accueil />,
    },
    {
        path: '/product',
        element: <Products />,
    }
]