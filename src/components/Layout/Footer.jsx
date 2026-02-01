import React from 'react'
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import Logo from '../UI/Logo'

export const Footer = () => {
    return (
        <footer style={{
            marginTop: 'auto',
            background: 'var(--bg-dark)',
            color: 'white',
            paddingTop: '4rem',
            paddingBottom: '2rem',
            borderTopLeftRadius: '40px',
            borderTopRightRadius: '40px'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Column 1: Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Contact Us</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '50%' }}>
                                    <Mail size={18} color="var(--primary-green)" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Email</p>
                                    <p style={{ fontWeight: '600' }}>info@shineexperts.co.uk</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '50%' }}>
                                    <Clock size={18} color="var(--primary-green)" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Office Hours</p>
                                    <p style={{ fontWeight: '600' }}>Mon - Sat 8am - 8pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Service Map */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Service Area</h3>
                        <div style={{ height: '250px', borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303962.8152342555!2d-2.47953258837303!3d53.50654763133379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sGreater%20Manchester!5e0!3m2!1sen!2suk!4v1706606600000!5m2!1sen!2suk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Greater Manchester Service Area"
                            ></iframe>
                        </div>
                    </div>

                    {/* Column 3: Brand Info */}
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <Logo size={200} color="var(--primary-green)" />
                        </div>
                        <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: '2rem' }}>
                            Professional cleaning services you can trust. We bring the shine back to your home and office space across Greater Manchester.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'white', opacity: 0.8 }}><Facebook size={24} /></a>
                            <a href="#" style={{ color: 'white', opacity: 0.8 }}><Instagram size={24} /></a>
                            <a href="#" style={{ color: 'white', opacity: 0.8 }}><Twitter size={24} /></a>
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem', opacity: 0.5 }}>
                    <p>&copy; 2026 Shine Experts Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
