import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../Pages/Index'

const WebRoute = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Index />} />
            </Routes>
        </React.Fragment>
    )
}

export default WebRoute