import App from "../../App"
import Home from "../Home/Home"

const routing = () => {
    const router = [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                }
            ]
        }
    ]


    return router

}


export default routing