import React, { useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/Layout/MainLayout'
import { Preloader } from './components/Layout/Preloader'
import { AnimatePresence } from 'framer-motion'
import { ScrollToTop } from './components/Layout/ScrollToTop'

// Lazy Load Pages for Performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })))
const BookingPage = lazy(() => import('./pages/BookingPage').then(module => ({ default: module.BookingPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })))
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })))
const FaqsPage = lazy(() => import('./pages/FaqsPage').then(module => ({ default: module.FaqsPage })))
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage').then(module => ({ default: module.ServiceAreasPage })))
const ReviewsPage = lazy(() => import('./pages/ReviewsPage').then(module => ({ default: module.ReviewsPage })))
const CustomerStoriesPage = lazy(() => import('./pages/CustomerStoriesPage').then(module => ({ default: module.CustomerStoriesPage })))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage')) // Default export

function App() {
    const [loading, setLoading] = useState(true)

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Preloader setLoading={setLoading} />}
            </AnimatePresence>

            {!loading && (
                <>
                    <ScrollToTop />
                    <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
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
                    </Suspense>
                </>
            )}
        </>
    )
}

export default App
