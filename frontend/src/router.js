import {BrowserRouter, Routes, Route} from "react-router-dom"
import App1 from "./landingPage"
import NotFound from "./notFound"
import LogInPage from "./LogInPage"

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogInPage/>}/>
                <Route path="/" element={<App1/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router