import React from 'react'
import { ServicesSection } from '../components/Services/ServicesSection'
import { DetailedServices } from '../components/Services/DetailedServices'
import { ScrollReveal } from '../components/Layout/ScrollReveal'
import { motion } from 'framer-motion'

export const ServicesPage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ScrollReveal>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Expertise</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Choosing the right clean for your home.</p>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <ServicesSection />
            </ScrollReveal>

            <div style={{ height: '4rem' }} />

            <ScrollReveal delay={0.2}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Service Catalog</h2>
                    <p style={{ color: '#666' }}>Everything we do, all in one place.</p>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <DetailedServices />
            </ScrollReveal>
        </motion.div>
    )
}
