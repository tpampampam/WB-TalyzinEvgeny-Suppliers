import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Suppliers from "../pages/Suppliers";


const Goods = lazy(() => import  ("../pages/Goods"))
const Prices = lazy(() => import  ("../pages/Prices"))
const Analitics = lazy(() => import  ("../pages/Analitics"))
const Advertising = lazy(() => import  ("../pages/Advertising"))

const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route index element={<Suppliers/>}/>
            <Route path="/goods" element={<Goods/>}/>
            <Route path="/prices" element={<Prices/>}/>
            <Route path='/analitics' element={<Analitics/>}/>
            <Route path='/adv' element={<Advertising/>}/>
        </Routes>   
    </Suspense>
)

export default AppRoutes;