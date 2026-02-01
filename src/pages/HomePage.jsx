import React from 'react'
import { HeroSection } from '../components/Hero/HeroSection'
import { ReviewsSection } from '../components/Reviews/ReviewsSection'
import { ComparisonSection } from '../components/Comparison/ComparisonSection'
import { HowWeWorkSection } from '../components/HowItWorks/HowWeWorkSection'
import { ScrollReveal } from '../components/Layout/ScrollReveal'
import { motion } from 'framer-motion'

export const HomePage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HeroSection />

            <div style={{ height: '2rem' }} />

            <ScrollReveal>
                <HowWeWorkSection />
            </ScrollReveal>

            <div style={{ height: '2rem' }} />

            <ScrollReveal>
                <ComparisonSection />
            </ScrollReveal>

            <div style={{ height: '4rem' }} />

            <ScrollReveal delay={0.2}>
                <ReviewsSection />
            </ScrollReveal>
        </motion.div>
    )
}
