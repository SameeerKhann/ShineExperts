import React, { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SprayCan, Sparkles, Brush, Droplets, Wind } from 'lucide-react'
import Logo from '../UI/Logo'

// Generate static dust particles once
const DUST_COUNT = 20;

export const Preloader = ({ setLoading }) => {
    const [count, setCount] = useState(0)

    // Memoize dust particles so they don't jump around on re-renders
    const dustParticles = useMemo(() => {
        return Array.from({ length: DUST_COUNT }).map((_, i) => ({
            id: i,
            x: (i / (DUST_COUNT - 1)) * 100, // percentage 0-100
            y: Math.random() * 40 - 20, // offset Y slightly
            size: Math.random() * 4 + 2
        }))
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(timer)
                    setTimeout(() => setLoading(false), 800) // Slightly longer to finish suction
                    return 100
                }
                return prev + 1
            })
        }, 30) // Adjusted speed for better visuals

        return () => clearInterval(timer)
    }, [setLoading])

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#062229',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'var(--font-heading)',
                overflow: 'hidden'
            }}
        >
            {/* Center Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ zIndex: 1, marginBottom: '4rem' }}
            >
                <Logo size={240} color="var(--primary-green)" />
            </motion.div>

            {/* Vacuum Animation Container */}
            <div style={{
                position: 'relative',
                width: 'min(80vw, 600px)',
                height: '60px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '30px',
                padding: '0 30px',
                display: 'flex',
                alignItems: 'center'
            }}>
                {/* Dust Track */}
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {dustParticles.map((dust) => (
                        <motion.div
                            key={dust.id}
                            style={{
                                position: 'absolute',
                                left: `${dust.x}%`,
                                top: `calc(50% + ${dust.y}px)`,
                                width: dust.size,
                                height: dust.size,
                                background: 'white',
                                borderRadius: '50%',
                                opacity: 0.4
                            }}
                            animate={{
                                scale: count >= dust.x ? 0 : 1,
                                opacity: count >= dust.x ? 0 : 0.4,
                                x: count >= dust.x ? -20 : 0, // pull towards nozzle before disappearing
                                transition: { duration: 0.2 }
                            }}
                        />
                    ))}
                </div>

                {/* Vacuum Nozzle */}
                <motion.div
                    style={{
                        position: 'absolute',
                        left: `${count}%`,
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    <div style={{
                        width: '40px',
                        height: '24px',
                        background: 'var(--primary-green)',
                        borderRadius: '4px 12px 12px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '4px',
                        boxShadow: '0 0 20px rgba(232, 247, 128, 0.4)'
                    }}>
                        <div style={{ width: '4px', height: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '2px' }} />
                    </div>
                    {/* Air Effect */}
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2], x: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                    >
                        <Wind size={20} color="var(--primary-green)" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle Percentage Text below */}
            <div style={{ marginTop: '1.5rem', opacity: 0.3, fontSize: '0.9rem', letterSpacing: '2px' }}>
                CLEANING IN PROGRESS... {count}%
            </div>

            {/* Background Aesthetic Icons */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                <motion.div
                    animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.1 }}
                >
                    <SprayCan size={48} />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '15%', right: '15%', opacity: 0.1 }}
                >
                    <Sparkles size={40} />
                </motion.div>
            </div>
        </motion.div>
    )
}
