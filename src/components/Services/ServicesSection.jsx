import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Home, Building2, MoveRight } from 'lucide-react'

// Pexels Images - UPDATED Deep Clean Image (Kitchen)
const IMAGES = {
    domestic: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800",
    deep: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    move: "https://images.pexels.com/photos/7464703/pexels-photo-7464703.jpeg?auto=compress&cs=tinysrgb&w=800"
}

export const ServicesSection = () => {
    return (
        <section className="bento-grid" id="services">
            {/* Header Card */}
            <div style={{ gridColumn: 'span 12', textAlign: 'center', padding: '4rem 0' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Professional Services</h2>
                <p style={{ color: '#666', fontSize: '1.2rem' }}>Tailored for every corner of your life.</p>
            </div>

            {/* Domestic Cleaning */}
            <motion.div
                whileHover={{ y: -5 }}
                className="bento-card light"
                style={{ gridColumn: 'span 4', height: '500px', display: 'flex', flexDirection: 'column', padding: 0 }}
            >
                <div style={{ height: '60%', overflow: 'hidden' }}>
                    <img src={IMAGES.domestic} alt="Domestic Cleaning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--bg-dark-soft)' }}>
                            <Home size={20} />
                            <span style={{ fontWeight: 600 }}>Domestic</span>
                        </div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Regular Clean</h3>
                        <p style={{ color: '#666' }}>Weekly or fortnightly visits to keep your sanctuary pristine.</p>
                    </div>
                    <button className="btn-outline" style={{ borderColor: '#ddd', color: 'var(--bg-dark)', width: 'fit-content', marginTop: '1rem', padding: '0.5rem 1rem' }}>
                        Learn More <MoveRight size={16} />
                    </button>
                </div>
            </motion.div>

            {/* Deep Cleaning (Featured) - MIRROR EFFECT APPLIED */}
            <motion.div
                whileHover={{ y: -5 }}
                className="bento-card"
                style={{
                    gridColumn: 'span 4',
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                    position: 'relative',
                    background: 'linear-gradient(145deg, rgba(6,34,41,0.95) 0%, rgba(11,65,79,0.95) 100%)', // Enhanced background
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}
            >
                <div style={{ position: 'absolute', top: 20, right: 20, background: 'var(--primary-yellow)', color: 'var(--bg-dark)', padding: '0.25rem 1rem', borderRadius: 20, fontWeight: 'bold', zIndex: 10 }}>
                    POPULAR
                </div>
                <div style={{ height: '60%', overflow: 'hidden' }}>
                    <img src={IMAGES.deep} alt="Deep Cleaning" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                </div>
                <div style={{ padding: '2rem', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary-yellow)' }}>
                        <Sparkles size={20} />
                        <span style={{ fontWeight: 600 }}>Intensive</span>
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Deep Clean</h3>
                    <p style={{ color: 'var(--text-mist)' }}>Top-to-bottom refresh. Perfect for spring cleaning.</p>
                </div>
            </motion.div>

            {/* Moving */}
            <motion.div
                whileHover={{ y: -5 }}
                className="bento-card light"
                style={{ gridColumn: 'span 4', height: '500px', display: 'flex', flexDirection: 'column', padding: 0 }}
            >
                <div style={{ height: '60%', overflow: 'hidden' }}>
                    <img src={IMAGES.move} alt="Moving" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--bg-dark-soft)' }}>
                        <Building2 size={20} />
                        <span style={{ fontWeight: 600 }}>End of Tenancy</span>
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Move Out</h3>
                    <p style={{ color: '#666' }}>Guaranteed deposit return service.</p>
                </div>
            </motion.div>
        </section>
    )
}
