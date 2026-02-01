import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SprayCan, Sparkles, Brush, Droplets } from 'lucide-react'
import Logo from '../UI/Logo'

export const Preloader = ({ setLoading }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(timer)
                    setTimeout(() => setLoading(false), 500) // Small delay at 100%
                    return 100
                }
                return prev + 1
            })
        }, 20) // Speed of counter

        return () => clearInterval(timer)
    }, [setLoading])

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#062229', // Using brand dark teal
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'var(--font-heading)',
                overflow: 'hidden'
            }}
        >
            {/* Floating Icons Background */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {/* Spray Can - Top Left */}
                <motion.div
                    animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '20%', left: '20%', opacity: 0.2 }}
                >
                    <SprayCan size={64} />
                </motion.div>

                {/* Sparkles - Top Right */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '25%', right: '25%', opacity: 0.2 }}
                >
                    <Sparkles size={48} />
                </motion.div>

                {/* Brush - Bottom Left */}
                <motion.div
                    animate={{ x: [-30, 30, -30], rotate: [0, -20, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', bottom: '30%', left: '15%', opacity: 0.2 }}
                >
                    <Brush size={56} />
                </motion.div>

                {/* Droplets - Bottom Right */}
                <motion.div
                    animate={{ y: [0, 40, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', bottom: '20%', right: '20%', opacity: 0.2 }}
                >
                    <Droplets size={40} />
                </motion.div>
            </div>

            <div style={{ position: 'absolute', bottom: '40px', right: '40px', fontSize: '10rem', fontWeight: 'bold', overflow: 'hidden', lineHeight: 1 }}>
                <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {count}%
                </motion.span>
            </div>

            {/* Center Content */}
            <div style={{ zIndex: 1 }}>
                <Logo size={280} color="var(--primary-green)" />
            </div>
        </motion.div>
    )
}
