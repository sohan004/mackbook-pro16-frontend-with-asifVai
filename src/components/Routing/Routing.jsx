import App from "../../App"
import Home from "../Home/Home"
import Page2 from "../Page2/Page2"
import Page3 from "../Page3/Page3"
import Page4 from "../Page4/Page4"

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
                {
                    path: "/page-3",
                    element: <Page3></Page3>
                },
                {
                    path: "/page-4",
                    element: <Page4></Page4>
                },

            ]
        }
    ]


    return router

}


export default routing