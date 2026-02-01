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

                {/* Vacuum Nozzle & Handle */}
                <motion.div
                    style={{
                        position: 'absolute',
                        left: `${count}%`,
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: 2
                    }}
                >
                    {/* The "Pipe" / Handle trailing back */}
                    <div style={{
                        position: 'absolute',
                        right: '100%',
                        width: '120px',
                        height: '12px',
                        background: 'linear-gradient(90deg, transparent, rgba(232, 247, 128, 0.4))',
                        borderRadius: '20px',
                        transform: 'translateX(20px) rotate(-10deg)',
                        transformOrigin: 'right center',
                        borderRight: '2px solid var(--primary-green)',
                        opacity: 0.6
                    }} />

                    {/* Floor Tool / Nozzle Head */}
                    <div style={{
                        position: 'relative',
                        width: '50px',
                        height: '32px',
                        background: 'var(--primary-green)',
                        borderRadius: '6px 20px 20px 6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '6px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(232, 247, 128, 0.3)',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        {/* Internal Detailing */}
                        <div style={{ width: '4px', height: '20px', background: 'rgba(0,0,0,0.2)', borderRadius: '2px' }} />

                        {/* Miniature Wheels */}
                        <div style={{ position: 'absolute', bottom: '-4px', left: '10px', width: '12px', height: '12px', background: '#333', borderRadius: '50%', border: '2px solid #555' }} />
                        <div style={{ position: 'absolute', bottom: '-4px', right: '10px', width: '12px', height: '12px', background: '#333', borderRadius: '50%', border: '2px solid #555' }} />
                    </div>

                    {/* Suction Area (invisible buffer) */}
                    <div style={{ width: '20px' }}></div>

                    {/* Air Effect */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.2, 0.8], x: [-3, 3, -3] }}
                        transition={{ repeat: Infinity, duration: 0.4 }}
                    >
                        <Wind size={24} color="var(--primary-green)" />
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
