import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import JobPage from "./JobPage";
import JobApplication from "./JobApplication";


const router = createBrowserRouter([
    {path:'/',element:<HomePage/>},
    {path:'/:id',element:<JobPage/>},
    {path:'/:id/apply',element:<JobApplication/>}
])

export default router;