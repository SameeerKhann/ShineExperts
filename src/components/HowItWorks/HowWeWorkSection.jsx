import React from 'react'
import { Calendar, Search, Sparkles, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const STEPS = [
    {
        title: "Book Online",
        desc: "Select your service and preferred time in just 60 seconds.",
        icon: Calendar
    },
    {
        title: "We Confirm",
        desc: "Our team confirms your appointment and specific needs.",
        icon: UserCheck
    },
    {
        title: "We Clean",
        desc: "Our expert cleaners arrive fully equipped to make your home shine.",
        icon: Sparkles
    },
    {
        title: "You Relax",
        desc: "Enjoy your free time and a spotless home. 100% Satisfaction.",
        icon: Search
    }
]

export const HowWeWorkSection = () => {
    return (
        <section style={{ padding: 'clamp(3rem, 8vw, 6rem) 1rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span style={{
                    color: 'var(--primary-yellow)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontSize: '0.875rem'
                }}>Simple Process</span>
                <h2 style={{
                    fontSize: '3rem',
                    marginTop: '0.5rem',
                    fontFamily: 'var(--font-heading)'
                }}>How It Works</h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                position: 'relative'
            }}>
                {/* Connecting Line (Desktop) */}
                <div style={{
                    position: 'absolute',
                    top: '40px',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: 'rgba(0,0,0,0.05)',
                    zIndex: -1,
                    display: 'none', // Hidden on mobile, could show on desktop with media query
                }} className="desktop-line" />

                {STEPS.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'var(--primary-mint)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            position: 'relative',
                            border: '1px solid rgba(6, 34, 41, 0.05)'
                        }}>
                            {/* Step Number Badge */}
                            <div style={{
                                position: 'absolute', top: -5, right: -5,
                                width: '24px', height: '24px',
                                background: 'var(--bg-dark)',
                                color: 'white',
                                borderRadius: '50%',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>{idx + 1}</div>

                            <step.icon size={32} color="var(--bg-dark)" />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                        <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
