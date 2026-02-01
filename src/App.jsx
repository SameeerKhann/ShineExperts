import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/Layout/MainLayout'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { BookingPage } from './pages/BookingPage'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { FaqsPage } from './pages/FaqsPage'
import { Preloader } from './components/Layout/Preloader'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

function App() {
    const [loading, setLoading] = useState(true)

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Preloader setLoading={setLoading} />}
            </AnimatePresence>

            {!loading && (
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="services" element={<ServicesPage />} />
                        <Route path="blog" element={<BlogPage />} />
                        <Route path="book" element={<BookingPage />} />
                        <Route path="faqs" element={<FaqsPage />} />
                        <Route path="contact" element={<ContactPage />} />
                    </Route>
                </Routes>
            )}
        </>
    )
}

export default App
