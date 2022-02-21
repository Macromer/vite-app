// router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyPage from './my-page'
import React from "react";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
                <Route path='/my-page' element={<MyPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoute
