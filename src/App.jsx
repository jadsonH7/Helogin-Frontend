import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  return (
   <SpeedInsights>
    <RouterProvider router={router} />
   </SpeedInsights>
  );
}