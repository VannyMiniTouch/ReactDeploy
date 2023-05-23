import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../Pages/Index'
import Create from '../Pages/Admin/Articles/Create'

// Client
import Tutorial from '../Pages/Client/Tutorial';

const WebRoute = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Index />} />

                {/* Client Route */}
                <Route path='/tutorial' element={<Tutorial />} />
                {/* Admin Route */}
                <Route path='/create-post' element={<Create />} />
            </Routes>
        </React.Fragment>

    )
}

export default WebRoute