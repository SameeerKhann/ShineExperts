import React from 'react'
import { ContactSection } from '../components/Contact/ContactSection'
import { motion } from 'framer-motion'

export const ContactPage = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
            <ContactSection />
        </motion.div>
    )
}
