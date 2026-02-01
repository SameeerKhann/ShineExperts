import React from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '../components/Layout/ScrollReveal'
import { Calendar, User, ArrowRight } from 'lucide-react'

const BLOG_POSTS = [
    {
        id: 1,
        title: "5 Tips for a Spotless Home Used by Pros",
        excerpt: "Discover the secrets professional cleaners use to get that showroom shine in half the time.",
        date: "Jan 28, 2026",
        author: "Sarah Jenkins",
        image: "https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Cleaning Tips"
    },
    {
        id: 2,
        title: "Why Eco-Friendly Cleaning Matters for Your Health",
        excerpt: "Standard chemicals can linger in your air. Here's why switching to green products is safer for your family.",
        date: "Jan 20, 2026",
        author: "David Ross",
        image: "https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Sustainability"
    },
    {
        id: 3,
        title: "Spring Cleaning Checklist: The Ultimate Guide",
        excerpt: "Don't miss a spot! Our comprehensive checklist ensures every corner of your house gets the attention it deserves.",
        date: "Jan 15, 2026",
        author: "Shine Experts Team",
        image: "https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Guides"
    }
]

export const BlogPage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 1rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Cleaning Insights</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>Expert tips, industry news, and guides to keep your space pristine.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 1rem 4rem'
            }}>
                {BLOG_POSTS.map((post, idx) => (
                    <ScrollReveal key={post.id} delay={idx * 0.1}>
                        <article style={{
                            background: 'white',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute', top: 20, left: 20,
                                    background: 'white', padding: '6px 12px',
                                    borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600'
                                }}>
                                    {post.category}
                                </div>
                            </div>
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#888', marginBottom: '1rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {post.date}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> {post.author}</span>
                                </div>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>{post.title}</h2>
                                <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>{post.excerpt}</p>

                                <div style={{ marginTop: 'auto' }}>
                                    <a href="#" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        textDecoration: 'none', color: 'var(--bg-dark)',
                                        fontWeight: '600'
                                    }}>
                                        Read Article <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    </ScrollReveal>
                ))}
            </div>
        </motion.div>
    )
}
