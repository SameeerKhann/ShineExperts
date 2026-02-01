import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export const ContactSection = () => {
    return (
        <section className="bento-grid" id="contact" style={{ marginTop: '4rem' }}>
            {/* Header */}
            <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--bg-dark)' }}>Get in Touch</h2>
                <p style={{ color: '#666', fontSize: '1.2rem' }}>We'd love to hear about your project.</p>
            </div>

            {/* Contact Info Card */}
            <div className="bento-card"
                style={{
                    gridColumn: 'span 5',
                    background: 'var(--bg-dark)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'white' }}>Contact Info</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                                <Mail color="var(--primary-green)" />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Email</p>
                                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>info@shineexperts.co.uk</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                                <MapPin color="var(--primary-green)" />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>HQ</p>
                                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Greater Manchester, UK</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div style={{
                    marginTop: '2rem', height: '200px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#aaa', fontSize: '0.9rem'
                }}>
                    Interactive Map Area
                </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel" style={{ gridColumn: 'span 7', padding: '3rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--bg-dark)' }}>Send Message</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 600, color: '#444' }}>First Name</label>
                            <input style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', background: 'rgba(255,255,255,0.8)' }} placeholder="John" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 600, color: '#444' }}>Last Name</label>
                            <input style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', background: 'rgba(255,255,255,0.8)' }} placeholder="Doe" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: 600, color: '#444' }}>Email</label>
                        <input style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', background: 'rgba(255,255,255,0.8)' }} placeholder="john@example.com" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: 600, color: '#444' }}>Message</label>
                        <textarea style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', background: 'rgba(255,255,255,0.8)', minHeight: '150px' }} placeholder="How can we help?" />
                    </div>

                    <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: 'fit-content' }}>
                        Send Message <Send size={18} style={{ marginLeft: 8 }} />
                    </button>
                </form>
            </div>
        </section>
    )
}
