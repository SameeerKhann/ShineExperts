import React from 'react'
import { Star, Quote, ThumbsUp } from 'lucide-react'
import { motion } from 'framer-motion'

const REVIEWS_DATA = [
    {
        name: "Sarah Jenkins",
        location: "Didsbury",
        date: "Jan 2026",
        rating: 5,
        text: "The deep clean was absolutely transformative. My kitchen hasn't looked this good since we moved in! The team was punctual and very professional.",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        name: "Marcus Thorne",
        location: "Salford Quays",
        date: "Jan 2026",
        rating: 5,
        text: "Efficiency is key for me. They arrived on time, worked fast, and left the place spotless. Perfect for my busy schedule.",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        name: "Emma Alcott",
        location: "Altrincham",
        date: "Dec 2025",
        rating: 5,
        text: "Finally a service that actually cleans behind the sofa! Highly recommended for busy mums who need that extra hand.",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        name: "David Wilson",
        location: "Stockport",
        date: "Nov 2025",
        rating: 5,
        text: "Used them for an end-of-tenancy clean and I got my full deposit back. Couldn't be happier with the result.",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        name: "Sophie Chen",
        location: "Sale",
        date: "Oct 2025",
        rating: 4,
        text: "Great attention to detail. Only marked 4 stars because they were 10 minutes late, but the quality of work was outstanding.",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        name: "James Miller",
        location: "Bury",
        date: "Sep 2025",
        rating: 5,
        text: "The recurring bimonthly service is a lifesaver. Consistent quality every single time.",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
]

export const ReviewsList = () => {
    return (
        <section style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem', color: 'var(--bg-dark)' }}>Customer <span style={{ color: 'var(--primary-green)' }}>Reviews</span></h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>What our clients say about their experience with Shine Experts.</p>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} fill="var(--primary-yellow)" color="var(--primary-yellow)" size={24} />)}
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>4.9/5</span>
                    <span style={{ color: '#888' }}>(Based on 500+ reviews)</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
                {REVIEWS_DATA.map((review, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <img src={review.img} alt={review.name} style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover' }} />
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0' }}>{review.name}</h3>
                                    <p style={{ fontSize: '0.85rem', color: '#888', margin: '0' }}>{review.location} • {review.date}</p>
                                </div>
                            </div>
                            <Quote size={24} color="var(--primary-green)" style={{ opacity: 0.3 }} />
                        </div>

                        <div style={{ display: 'flex', gap: '2px' }}>
                            {[1, 2, 3, 4, 5].map(s => (
                                <Star
                                    key={s}
                                    fill={s <= review.rating ? "var(--primary-yellow)" : "transparent"}
                                    color="var(--primary-yellow)"
                                    size={16}
                                />
                            ))}
                        </div>

                        <p style={{ lineHeight: '1.6', color: '#444' }}>"{review.text}"</p>

                        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-green)', fontSize: '0.9rem', fontWeight: '600' }}>
                            <ThumbsUp size={14} /> Verified Review
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
