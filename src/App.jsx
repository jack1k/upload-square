import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<></>} />
                <Route path="" element={<></>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
