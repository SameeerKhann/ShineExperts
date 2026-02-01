import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'

export const HeroSection = () => {
    return (
        <section style={{
            position: 'relative',
            padding: '6rem 0 4rem',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            overflow: 'hidden'
        }}>

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            >
                <source src="https://somervilles.s3-assets.com/Somerville-Hero-Homepage.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay for Text Readability */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(6, 34, 41, 0.85) 0%, rgba(6, 34, 41, 0.7) 100%)',
                zIndex: 1
            }} />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>

                {/* Top Pill Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '8px 16px', borderRadius: '30px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        marginBottom: '2rem',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <Star size={14} fill="var(--primary-green)" color="var(--primary-green)" />
                    <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--primary-green)' }}>#1 Rated Cleaning Service in Manchester</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        fontFamily: 'var(--font-heading)'
                    }}
                >
                    Where <span style={{ color: 'var(--primary-green)' }}>Sparkle</span> and <br />
                    Comfort Come Together
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-mist)',
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.6'
                    }}
                >
                    Join thousands of happy homeowners who trust Shine Experts to transform their living spaces into pristine sanctuaries.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="/book" className="btn" style={{
                        background: 'var(--primary-green)',
                        color: 'var(--bg-dark)',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        display: 'flex', alignItems: 'center', gap: '10px',
                        fontSize: '1.1rem'
                    }}>
                        Book a Clean <ArrowRight size={20} />
                    </a>

                    <a href="/services" className="btn" style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        display: 'flex', alignItems: 'center', gap: '10px',
                        fontSize: '1.1rem',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        View Services
                    </a>
                </motion.div>

            </div>

            {/* Removed Central Floating Visual (Phone/Reviews) to focus on full-bleed video */}
        </section>
    )
}
