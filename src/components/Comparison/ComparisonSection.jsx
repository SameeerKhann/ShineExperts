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
        <section className="section" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--bg-dark)' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Don't Just Take Our Word</h2>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Experience the Shine Experts difference.</p>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
                <div
                    ref={containerRef}
                    className="glass-panel"
                    onMouseMove={handleDrag}
                    onTouchMove={handleTouch}
                    style={{
                        position: 'relative',
                        height: '500px',
                        overflow: 'hidden',
                        cursor: 'col-resize',
                        padding: 0,
                        border: '4px solid white'
                    }}
                >
                    {/* AFTER Image (Background) */}
                    <img
                        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="After (Clean)"
                        style={{
                            position: 'absolute',
                            top: 0, left: 0,
                            width: '100%', height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.9)', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold', color: 'var(--bg-dark)' }}>
                        AFTER
                    </div>

                    {/* BEFORE Image (Clipped Overlay) */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0,
                        width: '100%', height: '100%',
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                        background: 'white' // Fallback
                    }}>
                        <img
                            src="https://images.pexels.com/photos/6636200/pexels-photo-6636200.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Before (Messy)"
                            style={{
                                width: '100%', height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        <div style={{ position: 'absolute', top: 20, left: 20, background: 'rgba(0,0,0,0.6)', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold', color: 'white' }}>
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
                        zIndex: 10
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '40px', height: '40px',
                            background: 'var(--primary-yellow)',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                        }}>
                            <ChevronsLeftRight size={24} color="var(--bg-dark)" />
                        </div>
                    </div>

                </div>
                <p style={{ textAlign: 'center', marginTop: '1rem', color: '#888', fontStyle: 'italic' }}>Drag the slider to compare</p>
            </div>
        </section>
    )
}
