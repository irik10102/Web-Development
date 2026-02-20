import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Rules = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Menu/>}></Route>
                    <Route path='/tab1' element={<Tab1/>}></Route>
                    <Route path='/tab2' element={<Tab2/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rules;