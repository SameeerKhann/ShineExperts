import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, Check, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

// EMAILJS CONFIGURATION
const EMAILJS_SERVICE_ID = "service_4qfvlqp"
const EMAILJS_TEMPLATE_ID = "template_hajzi8p"
const EMAILJS_PUBLIC_KEY = "xtSiskA07iRIiWn1f"

export const BookingWizard = () => {
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Mock State for the form
    const [formData, setFormData] = useState({
        service: 'Standard Clean',
        bedrooms: '1 Bedroom',
        date: '',
        time: '09:00',
        area: 'Manchester City Centre',
        name: '',
        email: '',
        phone: '' // Added phone field
    })

    const boroughs = [
        "Manchester City Centre", "Salford", "Stockport", "Trafford",
        "Bolton", "Bury", "Oldham", "Rochdale", "Tameside", "Wigan"
    ]

    const nextStep = () => setStep(s => s + 1)
    const prevStep = () => setStep(s => s - 1)

    const sendBooking = async () => {
        // Validation
        if (!formData.name || !formData.email || !formData.date) {
            alert('Please fill in all required fields (Name, Email, Date).')
            return
        }

        setIsSubmitting(true)

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    to_name: "Shine Experts Team",
                    user_name: formData.name,
                    user_email: formData.email,
                    user_phone: formData.phone || 'Not provided',
                    service: formData.service,
                    bedrooms: formData.bedrooms,
                    area: formData.area,
                    date: formData.date,
                    time: formData.time,
                    message: `New Booking Request: ${formData.service} in ${formData.area} on ${formData.date} @ ${formData.time}`
                },
                EMAILJS_PUBLIC_KEY
            )

            alert('Booking Request Sent Successfully! We will contact you shortly.')
            // Reset or redirect could go here
            setStep(1)
            setFormData({
                service: 'Standard Clean',
                bedrooms: '1 Bedroom',
                date: '',
                time: '09:00',
                area: 'Manchester City Centre',
                name: '',
                email: '',
                phone: ''
            })

        } catch (error) {
            console.error('EmailJS Error:', error)
            alert('Failed to send booking: ' + (error.text || error.message || 'Unknown error'))
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="bento-grid m-t-4" id="book">
            <div className="bento-card col-span-12 mobile-stack-layout" style={{ gap: '0', padding: '0', overflow: 'hidden' }}>

                {/* Left Panel: Progress & Info */}
                <div className="flex-column p-2 p-md-3" style={{ background: 'var(--bg-dark-soft)', justifyContent: 'space-between' }}>
                    <div>
                        <h2 className="fs-h1-mobile" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Book <span style={{ color: 'var(--primary-yellow)' }}>Online</span></h2>
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
                <div className="p-2 p-md-3" style={{ background: 'white', color: 'var(--bg-dark)', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Select Service Type</h3>
                                <div className="grid-cols-1-md-2" style={{ gap: '1rem' }}>
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
                                <div className="flex-column" style={{ gap: '1.5rem' }}>
                                    <div className="grid-cols-1-md-2" style={{ gap: '1rem' }}>
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
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Service Area (Manchester, UK)</label>
                                        <select
                                            value={formData.area}
                                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                            style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem' }}
                                        >
                                            {boroughs.map(b => <option key={b} value={b}>{b}</option>)}
                                        </select>
                                    </div>
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
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Confirm Details</h3>
                                <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
                                    <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Booking Summary</h4>
                                    <div className="grid-cols-1-md-2" style={{ gap: '1rem' }}>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.2rem' }}>Service</p>
                                            <p style={{ fontWeight: 600 }}>{formData.service}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.2rem' }}>Location</p>
                                            <p style={{ fontWeight: 600 }}>{formData.area}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.2rem' }}>Property</p>
                                            <p style={{ fontWeight: 600 }}>{formData.bedrooms}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.2rem' }}>Schedule</p>
                                            <p style={{ fontWeight: 600 }}>{formData.date || 'TBD'} @ {formData.time}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-column" style={{ gap: '1rem' }}>
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
                                    <input
                                        placeholder="Phone Number (Optional)"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }}
                                    />
                                </div>
                                <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '1rem' }}>
                                    * Our team will contact you to confirm the exact price and availability in {formData.area}.
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
                        <button
                            onClick={step === 3 ? sendBooking : nextStep}
                            disabled={isSubmitting}
                            className="btn-primary"
                            style={{ padding: '1rem 3rem', display: 'flex', alignItems: 'center', gap: '10px', opacity: isSubmitting ? 0.7 : 1 }}
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" /> : (step === 3 ? 'Request Booking' : 'Next Step')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
