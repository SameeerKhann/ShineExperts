import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, Check, ChevronRight, ChevronLeft } from 'lucide-react'

export const BookingWizard = () => {
    const [step, setStep] = useState(1)

    // Mock State for the form
    const [formData, setFormData] = useState({
        service: 'Standard Clean',
        bedrooms: '1 Bedroom',
        date: '',
        time: '09:00',
        name: '',
        email: ''
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
                        <p style={{ color: 'var(--text-mist)' }}>Get a sparkling clean home in 3 simple steps.</p>
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
                                <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'white' }}>
                                    {i === 1 ? 'Choose Service' : i === 2 ? 'Schedule' : 'Confirm'}
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
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Schedule Details</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Bedrooms</label>
                                        <select
                                            value={formData.bedrooms}
                                            onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                                            style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem' }}
                                        >
                                            <option>1 Bedroom</option>
                                            <option>2 Bedrooms</option>
                                            <option>3 Bedrooms</option>
                                            <option>4+ Bedrooms</option>
                                        </select>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Preferred Date</label>
                                            <input
                                                type="date"
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem' }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Preferred Time</label>
                                            <select
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem' }}
                                            >
                                                <option value="08:00">08:00 AM</option>
                                                <option value="09:00">09:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="13:00">01:00 PM</option>
                                                <option value="14:00">02:00 PM</option>
                                                <option value="15:00">03:00 PM</option>
                                                <option value="16:00">04:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Confirm Details</h3>
                                <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
                                    <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Booking Summary</h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.2rem' }}>Service</p>
                                            <p style={{ fontWeight: 600 }}>{formData.service}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.2rem' }}>Property</p>
                                            <p style={{ fontWeight: 600 }}>{formData.bedrooms}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.2rem' }}>Date</p>
                                            <p style={{ fontWeight: 600 }}>{formData.date || 'To be selected'}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.2rem' }}>Time</p>
                                            <p style={{ fontWeight: 600 }}>{formData.time} AM/PM</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <input
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }}
                                    />
                                    <input
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }}
                                    />
                                </div>
                                <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '1rem' }}>
                                    * Our team will contact you to confirm the exact price and availability.
                                </p>
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
                        <button onClick={step === 3 ? () => alert('Booking Request Sent!') : nextStep} className="btn-primary" style={{ padding: '1rem 3rem' }}>
                            {step === 3 ? 'Request Booking' : 'Next Step'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
