import React from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const REVIEWS = [
    {
        name: "Sarah Jenkins",
        location: "Didsbury",
        role: "Homeowner",
        text: "The deep clean was absolutely transformative. My kitchen hasn't looked this good since we moved in!",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        name: "Marcus Thorne",
        location: "Salford Quays",
        role: "Exec Tenant",
        text: "Efficiency is key for me. They arrived on time, worked fast, and left the place spotless.",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        name: "Emma Alcott",
        location: "Altrincham",
        role: "Family Home",
        text: "Finally a service that actually cleans behind the sofa! Highly recommended for busy mums.",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
]

export const ReviewsSection = () => {
    return (
        <section className="section" style={{ padding: '4rem 0', position: 'relative' }}>
            {/* Background Blob for Glass Effect */}
            <div style={{
                position: 'absolute',
                top: '20%', left: '10%',
                width: '300px', height: '300px',
                background: 'var(--primary-yellow)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                opacity: 0.2,
                zIndex: -1
            }} />

            <div className="glass-panel" style={{ margin: '0 1rem', padding: '4rem 2rem', minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Inner Content Wrapper */}
                <div style={{ width: '100%', maxWidth: '1200px' }}>

                    {/* Header within Glass */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--bg-dark)' }}>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-1px' }}>
                            Cleaner Space,<br />
                            Clearer Mind
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                            <Link to="/reviews" style={{ background: 'var(--bg-dark)', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '50px', fontWeight: '600', color: 'white', textDecoration: 'none' }}>
                                Our Reviews
                            </Link>
                            <Link to="/stories" style={{ background: 'transparent', border: '1px solid rgba(0,0,0,0.1)', padding: '0.8rem 1.5rem', borderRadius: '50px', fontWeight: '600', color: 'var(--bg-dark)', textDecoration: 'none' }}>
                                Customer Stories
                            </Link>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {REVIEWS.map((review, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-inner-card"
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <img src={review.img} alt={review.name} style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }} />
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{review.name}</h4>
                                            <p style={{ fontSize: '0.85rem', color: '#666' }}>{review.location}</p>
                                        </div>
                                    </div>
                                    <div style={{ background: '#f0f0f0', borderRadius: '50%', padding: '0.5rem' }}>
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <p style={{ fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '1.5rem', color: '#444' }}>
                                    "{review.text}"
                                </p>

                                <div style={{ display: 'flex', gap: '0.25rem' }}>
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="#FFD700" stroke="#FFD700" />)}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
