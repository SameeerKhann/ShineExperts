import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, Calendar, CreditCard, Sparkles } from 'lucide-react'

const FAQ_DATA = [
    {
        category: "Booking & Scheduling",
        icon: Calendar,
        questions: [
            {
                q: "How do I book a cleaning service?",
                a: "You can book directly through our website by clicking the 'Book a Clean' button. Simply choose your service, select a date and time, and confirm your details. It takes less than 60 seconds!"
            },
            {
                q: "Can I reschedule or cancel my booking?",
                a: "Yes, you can reschedule or cancel your booking up to 24 hours before the scheduled time through your account or by contacting us directly."
            },
            {
                q: "Do I need to be home during the cleaning?",
                a: "Not necessarily. Many of our clients provide us with a spare key or access code. We are fully insured and our cleaners are background-checked for your peace of mind."
            }
        ]
    },
    {
        category: "Our Services",
        icon: Sparkles,
        questions: [
            {
                q: "What's included in a standard clean?",
                a: "A standard clean includes dusting, vacuuming, mopping, bathroom cleaning (toilets, showers, sinks), and kitchen surface cleaning. We also empty the bins!"
            },
            {
                q: "Do you bring your own cleaning supplies?",
                a: "Yes, our team arrives fully equipped with professional-grade, eco-friendly cleaning supplies and high-performance equipment."
            },
            {
                q: "Do you offer deep cleaning services?",
                a: "Absolutely! Our deep cleaning service is perfect for first-time cleans or move-in/move-out situations, covering areas like inside ovens, windows, and baseboards."
            }
        ]
    },
    {
        category: "Payments & Pricing",
        icon: CreditCard,
        questions: [
            {
                q: "How much does a cleaning service cost?",
                a: "Pricing depends on the size of your home and the type of service selected. You can get an instant, transparent quote on our booking page."
            },
            {
                q: "When do I pay for the service?",
                a: "Payment is processed after the cleaning is completed. We accept all major credit cards and secure online payments."
            },
            {
                q: "Are there any hidden fees?",
                a: "No hidden fees! The price you see during booking is the price you pay. We believe in 100% transparent pricing."
            }
        ]
    }
]

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{
            background: 'white',
            borderRadius: '20px',
            marginBottom: '1rem',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--bg-dark)' }}>{question}</span>
                <div style={{
                    background: isOpen ? 'var(--primary-yellow)' : 'var(--primary-mint)',
                    padding: '8px',
                    borderRadius: '50%',
                    display: 'flex',
                    transition: 'all 0.3s ease'
                }}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div style={{ padding: '0 2rem 1.5rem', color: '#666', lineHeight: '1.6' }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export const FaqsPage = () => {
    return (
        <div style={{ background: 'var(--primary-mint)', minHeight: '100vh', padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <header style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '30px', background: 'white', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}
                    >
                        <HelpCircle size={16} color="var(--primary-green)" />
                        <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Support Center</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '4rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}
                    >
                        Common <span style={{ color: 'var(--primary-green)' }}>Questions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}
                    >
                        Find answers to the most common questions about our premium cleaning services.
                    </motion.p>
                </header>

                {FAQ_DATA.map((category, catIdx) => (
                    <div key={catIdx} style={{ marginBottom: '4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ background: 'var(--bg-dark)', padding: '10px', borderRadius: '12px' }}>
                                <category.icon size={24} color="white" />
                            </div>
                            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)' }}>{category.category}</h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {category.questions.map((faq, faqIdx) => (
                                <FaqItem key={faqIdx} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
