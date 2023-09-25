import App from "../../App"
import Home from "../Home/Home"
import Page2 from "../Page2/Page2"
import Page3 from "../Page3/Page3"
import Page4 from "../Page4/Page4"
import Page5 from "../Page5/Page5"
import Page6 from "../Page6/Page6"
import Page7 from "../Page7/Page7"

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
                {
                    path: "/page-5",
                    element: <Page5></Page5>
                },
                {
                    path: "/page-6",
                    element: <Page6></Page6>
                },
                {
                    path: "/page-7",
                    element: <Page7></Page7>
                },

            ]
        }
    ]


    return router

}


export default routing