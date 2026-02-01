import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
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
        color: isActive(path) ? 'var(--bg-dark)' : '#666',
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
            fontFamily: 'var(--font-body)'
        }}>
            {/* Light Overlay */}
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.85)', zIndex: 0 }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

                {/* Navbar - Floating Island Style */}
                <nav className="navbar" style={{
                    position: 'sticky', // Make it stick
                    top: '1rem',        // Float 1rem from top
                    zIndex: 100,        // Stay on top
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1rem',
                    marginBottom: '3rem',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '100px', // Pill shape
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    marginTop: '1rem',
                    maxWidth: '1000px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '100%'
                }}>
                    {/* Logo */}
                    <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', paddingLeft: '0.5rem' }}>
                        <Logo size={150} color="var(--bg-dark)" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', fontWeight: '500' }}>
                        <Link to="/" style={linkStyle('/')}>Home</Link>
                        <Link to="/services" style={linkStyle('/services')}>Services</Link>
                        <Link to="/blog" style={linkStyle('/blog')}>Blog</Link>
                        <Link to="/faqs" style={linkStyle('/faqs')}>FAQs</Link>
                        <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
                    </div>

                    <Link to="/book" className="main-btn" style={{ textDecoration: 'none', border: '1px solid var(--bg-dark)' }}>
                        <div className="btn-bg"></div>
                        <span className="relative-1" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Free Quote <ArrowUpRight size={18} />
                        </span>
                    </Link>
                </nav>

                {/* Page Content */}
                <main style={{ flex: 1 }}>
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    )
}
