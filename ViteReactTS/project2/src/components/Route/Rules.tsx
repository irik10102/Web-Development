import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Landing from "./Landing";
import GetId from "./GetId";

const Rules = ()=>{
    return(
        <>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Landing/>}></Route>
                    <Route path='/tab1' element={<Tab1/>}></Route>
                    <Route path='/tab2' element={<Tab2/>}></Route>
                    <Route path='/view/:userId' element={<GetId/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rules;