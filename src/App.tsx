import type { RouteRecord } from "vite-react-ssg";
import Layout from "@/components/Layout";
import Index from "./pages/Index.tsx";
import CardDiscounts from "./pages/CardDiscounts.tsx";
import FlightsHotels from "./pages/FlightsHotels.tsx";
import NotFound from "./pages/NotFound.tsx";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "card-discounts", element: <CardDiscounts /> },
      { path: "flights-hotels", element: <FlightsHotels /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
