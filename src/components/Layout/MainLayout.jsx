import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Footer } from './Footer'
import Logo from '../UI/Logo'

// Pexels Background Image
const BG_IMAGE = "https://images.pexels.com/photos/6195279/pexels-photo-6195279.jpeg?auto=compress&cs=tinysrgb&w=2000"

export const MainLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    // Helper to check active state
    const isActive = (path) => location.pathname === path

    const linkStyle = (path) => ({
        textDecoration: 'none',
        color: isActive(path) ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontWeight: isActive(path) ? '700' : '500',
        transition: 'color 0.2s'
    })

    return (
        <div className="app-container" style={{
            maxWidth: '100%',
            margin: '0 auto',
            paddingBottom: '4rem',
            backgroundImage: `url("${BG_IMAGE}")`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            minHeight: '100vh',
            fontFamily: 'var(--font-body)',
            transition: 'background-color 0.3s ease'
        }}>
            {/* Background Overlay */}
            <div style={{ position: 'fixed', inset: 0, background: 'var(--bg-main)', opacity: 0.85, zIndex: 0 }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

                {/* Navbar - Floating Island Style */}
                <nav className="navbar" style={{
                    position: 'sticky',
                    top: '1rem',
                    zIndex: 100,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1rem',
                    marginBottom: '3rem',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '100px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 4px 20px var(--card-shadow)',
                    marginTop: '1rem',
                    maxWidth: '1000px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 'calc(100% - 2rem)'
                }}>
                    {/* Logo */}
                    <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', paddingLeft: '0.5rem' }}>
                        <Logo size={120} color="var(--text-primary)" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="desktop-menu" style={{ gap: '2rem', fontSize: '0.95rem', fontWeight: '500' }}>
                        <Link to="/" style={linkStyle('/')}>Home</Link>
                        <Link to="/services" style={linkStyle('/services')}>Services</Link>
                        <Link to="/areas" style={linkStyle('/areas')}>Areas</Link>
                        <Link to="/blog" style={linkStyle('/blog')}>Blog</Link>
                        <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
                        <Link to="/faqs" style={linkStyle('/faqs')}>FAQs</Link>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Link to="/book" className="main-btn desktop-menu" style={{ textDecoration: 'none', padding: '0.6rem 1.2rem' }}>
                            <div className="btn-bg"></div>
                            <span className="relative-1" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                Quote <ArrowUpRight size={16} />
                            </span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                background: 'var(--text-primary)',
                                border: 'none',
                                color: 'var(--bg-main)',
                                padding: '0.6rem',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="mobile-menu"
                            style={{ background: 'var(--bg-soft)', color: 'var(--text-primary)' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <Logo size={120} color="var(--text-primary)" />
                                <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)' }}>
                                    <X size={32} />
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ ...linkStyle('/'), fontSize: '1.5rem' }}>Home</Link>
                                <Link to="/services" onClick={() => setIsMenuOpen(false)} style={{ ...linkStyle('/services'), fontSize: '1.5rem' }}>Services</Link>
                                <Link to="/areas" onClick={() => setIsMenuOpen(false)} style={{ ...linkStyle('/areas'), fontSize: '1.5rem' }}>Areas</Link>
                                <Link to="/blog" onClick={() => setIsMenuOpen(false)} style={{ ...linkStyle('/blog'), fontSize: '1.5rem' }}>Blog</Link>
                                <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ ...linkStyle('/contact'), fontSize: '1.5rem' }}>Contact</Link>
                                <Link to="/faqs" onClick={() => setIsMenuOpen(false)} style={{ ...linkStyle('/faqs'), fontSize: '1.5rem' }}>FAQs</Link>
                            </div>

                            <div style={{ marginTop: 'auto' }}>
                                <Link to="/book" onClick={() => setIsMenuOpen(false)} className="main-btn" style={{ width: '100%', textAlign: 'center' }}>
                                    <div className="btn-bg"></div>
                                    <span className="relative-1">Get Free Quote</span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Page Content */}
                <main style={{ flex: 1 }}>
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    )
}
