import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, Check, ChevronRight, ChevronLeft } from 'lucide-react'

export const BookingWizard = () => {
    const [step, setStep] = useState(1)

    // Mock State for the form
    const [formData, setFormData] = useState({
        service: 'standard',
        bedrooms: 1,
        date: '',
        name: ''
    })

    const nextStep = () => setStep(s => s + 1)
    const prevStep = () => setStep(s => s - 1)

    return (
        <section className="bento-grid" id="book" style={{ marginTop: '4rem' }}>
            <div className="bento-card" style={{ gridColumn: 'span 12', minHeight: '600px', display: 'flex', gap: '2rem', padding: '0', overflow: 'hidden' }}>

                {/* Left Panel: Progress & Info */}
                <div style={{ flex: '1', background: 'var(--bg-dark-soft)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Book <span style={{ color: 'var(--primary-yellow)' }}>Online</span></h2>
                        <p style={{ color: 'var(--text-mist)' }}>Get a sparkiling clean home in 3 simple steps.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: step === i ? 1 : 0.5 }}>
                                <div style={{
                                    width: 32, height: 32, borderRadius: '50%',
                                    background: step >= i ? 'var(--primary-yellow)' : 'transparent',
                                    border: '1px solid var(--primary-yellow)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--bg-dark)', fontWeight: 'bold'
                                }}>
                                    {step > i ? <Check size={16} /> : i}
                                </div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                                    {i === 1 ? 'Choose Service' : i === 2 ? 'Property Details' : 'Confirm'}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right Panel: Form Fields */}
                <div style={{ flex: '2', padding: '3rem', background: 'white', color: 'var(--bg-dark)', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Select Service Type</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    {['Standard Clean', 'Deep Clean', 'End of Tenancy', 'After Builders'].map(type => (
                                        <button key={type}
                                            onClick={() => setFormData({ ...formData, service: type })}
                                            style={{
                                                padding: '2rem', border: '2px solid',
                                                borderColor: formData.service === type ? 'var(--bg-dark)' : '#eee',
                                                borderRadius: 'var(--radius-sm)',
                                                background: formData.service === type ? 'var(--bg-dark)' : 'white',
                                                color: formData.service === type ? 'white' : 'var(--bg-dark)',
                                                cursor: 'pointer', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600,
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Property Details</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Bedrooms</label>
                                        <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem' }}>
                                            <option>1 Bedroom</option>
                                            <option>2 Bedrooms</option>
                                            <option>3 Bedrooms</option>
                                            <option>4+ Bedrooms</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Date</label>
                                        <input type="date" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem' }} />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Confirm Booking</h3>
                                <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Summary</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Service:</span>
                                        <strong>{formData.service}</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>Total Est:</span>
                                        <strong>£45.00</strong>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <input placeholder="Full Name" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }} />
                                    <input placeholder="Email Address" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        {step > 1 && (
                            <button onClick={prevStep} className="btn-outline" style={{ borderColor: '#ddd', color: 'var(--bg-dark)', padding: '1rem 2rem', borderRadius: 50 }}>
                                Back
                            </button>
                        )}
                        <button onClick={step === 3 ? () => alert('Booking Submitted!') : nextStep} className="btn-primary" style={{ padding: '1rem 3rem' }}>
                            {step === 3 ? 'Confirm & Pay' : 'Next Step'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
