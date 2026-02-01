import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/Layout/MainLayout'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { BookingPage } from './pages/BookingPage'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { FaqsPage } from './pages/FaqsPage'
import { ServiceAreasPage } from './pages/ServiceAreasPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { CustomerStoriesPage } from './pages/CustomerStoriesPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import { Preloader } from './components/Layout/Preloader'
import { ThemeToggle } from './components/UI/ThemeToggle'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ScrollToTop } from './components/Layout/ScrollToTop'

function App() {
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Preloader setLoading={setLoading} />}
            </AnimatePresence>

            {!loading && (
                <>
                    <ScrollToTop />
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="services" element={<ServicesPage />} />
                            <Route path="blog" element={<BlogPage />} />
                            <Route path="book" element={<BookingPage />} />
                            <Route path="faqs" element={<FaqsPage />} />
                            <Route path="areas" element={<ServiceAreasPage />} />
                            <Route path="reviews" element={<ReviewsPage />} />
                            <Route path="stories" element={<CustomerStoriesPage />} />
                            <Route path="contact" element={<ContactPage />} />
                            <Route path="privacy" element={<PrivacyPolicyPage />} />
                        </Route>
                    </Routes>
                </>
            )}
        </>
    )
}

export default App
