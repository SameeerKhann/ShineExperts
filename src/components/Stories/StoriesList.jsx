import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, History } from 'lucide-react'

const STORIES_DATA = [
    {
        title: "The Didsbury De-Clutter",
        subtitle: "How we reclaimed 200 sq. ft. of living space for the Jenkins family.",
        category: "Deep Clean",
        image: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800",
        challenge: "After 10 years in the same home, the kitchen and conservatory had accumulated unreachable dust and grime.",
        result: "Our 'Premium Deep Clean' package restored the tiles to their original shine and completely sanitized the food preparation area.",
        stats: ["4 Hours", "2 Experts", "100% Satisfied"]
    },
    {
        title: "The Salford Quays Turnaround",
        subtitle: "Ensuring a 100% deposit return for a high-end apartment.",
        category: "End of Tenancy",
        image: "https://images.pexels.com/photos/5849392/pexels-photo-5849392.jpeg?auto=compress&cs=tinysrgb&w=800",
        challenge: "The tenant needed to move out within 24 hours and the property manager had strict requirements.",
        result: "We performed a lightning-fast turnaround, including steam carpet cleaning and window polishing.",
        stats: ["3 Hours", "1 Expert", "Full Deposit Back"]
    },
    {
        title: "Weekly Wellness in Sale",
        subtitle: "Supporting a busy household with consistent, healthy cleaning.",
        category: "Recurring Service",
        image: "https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=800",
        challenge: "A family with two pets and three children struggled to keep up with daily allergens.",
        result: "Our weekly eco-friendly service focused on HEPA-filter vacuuming and pet-safe sanitizing agents.",
        stats: ["Weekly", "Fixed Schedule", "Allergen Free"]
    }
]

export const StoriesList = () => {
    return (
        <section style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem', color: 'var(--bg-dark)' }}>Customer <span style={{ color: 'var(--primary-green)' }}>Stories</span></h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Dive deep into how we transform homes across Greater Manchester.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                {STORIES_DATA.map((story, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={idx % 2 === 0 ? "responsive-flex" : "responsive-flex-reverse"}
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        {/* Image Side */}
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    style={{
                                        width: '100%',
                                        borderRadius: '24px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        objectFit: 'cover',
                                        height: 'clamp(250px, 40vh, 400px)'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'var(--primary-green)',
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    color: 'var(--bg-dark)',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem'
                                }}>
                                    {story.category}
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.2rem', color: 'var(--bg-dark)' }}>{story.title}</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--primary-green)', fontWeight: '600', marginBottom: '1.5rem' }}>{story.subtitle}</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                        <History size={14} /> The Challenge
                                    </h4>
                                    <p style={{ color: '#444', lineHeight: '1.6' }}>{story.challenge}</p>
                                </div>
                                <div>
                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                        <CheckCircle2 size={14} /> The Result
                                    </h4>
                                    <p style={{ color: '#444', lineHeight: '1.6' }}>{story.result}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                                {story.stats.map((stat, i) => (
                                    <div key={i}>
                                        <p style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: 0 }}>{stat}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
