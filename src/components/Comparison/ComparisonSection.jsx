import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronsLeftRight } from 'lucide-react'

export const ComparisonSection = () => {
    const [sliderPosition, setSliderPosition] = useState(50)
    const containerRef = useRef(null)

    const handleDrag = (e) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
        setSliderPosition(percent)
    }

    const handleTouch = (e) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
        setSliderPosition(percent)
    }

    return (
        <section className="section" id="results" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--bg-dark)' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>See The <span style={{ color: 'var(--primary-green)' }}>Transformation</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto', padding: '0 1rem' }}>
                    Drag the slider to experience how we turn cluttered spaces into pristine living areas.
                </p>
            </div>

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
                <div
                    ref={containerRef}
                    className="glass-panel"
                    onMouseMove={handleDrag}
                    onTouchMove={handleTouch}
                    style={{
                        position: 'relative',
                        height: 'clamp(300px, 60vh, 600px)',
                        overflow: 'hidden',
                        cursor: 'col-resize',
                        padding: 0,
                        border: '4px solid white',
                        borderRadius: '30px'
                    }}
                >
                    {/* AFTER Image (Background) */}
                    <img
                        src="/assets/comparison/after.jpg"
                        alt="After (Clean)"
                        style={{
                            position: 'absolute',
                            top: 0, left: 0,
                            width: '100%', height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{ position: 'absolute', top: 20, right: 20, background: 'var(--primary-green)', padding: '0.5rem 1.2rem', borderRadius: '30px', fontWeight: 'bold', color: 'var(--bg-dark)', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', zIndex: 1 }}>
                        AFTER
                    </div>

                    {/* BEFORE Image (Clipped Overlay) */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0,
                        width: '100%', height: '100%',
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                        zIndex: 2
                    }}>
                        <img
                            src="/assets/comparison/before.jpg"
                            alt="Before (Messy)"
                            style={{
                                width: '100%', height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        <div style={{ position: 'absolute', top: 20, left: 20, background: 'var(--bg-dark)', padding: '0.5rem 1.2rem', borderRadius: '30px', fontWeight: 'bold', color: 'white', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                            BEFORE
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div style={{
                        position: 'absolute',
                        top: 0, bottom: 0,
                        left: `${sliderPosition}%`,
                        width: '4px',
                        background: 'white',
                        zIndex: 10,
                        pointerEvents: 'none'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '44px', height: '44px',
                            background: 'var(--primary-green)',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                            border: '3px solid white'
                        }}>
                            <ChevronsLeftRight size={24} color="var(--bg-dark)" />
                        </div>
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: '#888' }}>
                    <motion.div
                        animate={{ x: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ChevronsLeftRight size={16} />
                    </motion.div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Drag slider to compare</span>
                </div>
            </div>
        </section>
    )
}
