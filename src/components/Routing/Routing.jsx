import App from "../../App"
import Home from "../Home/Home"
import Page2 from "../Page2/Page2"

const routing = () => {
    const router = [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                
                {
                    path: "/page-2",
                    element: <Page2></Page2>
                },
                
            ]
        }
    ]


    return router

}


export default routing