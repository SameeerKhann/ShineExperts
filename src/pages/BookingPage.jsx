import React from 'react'
import { BookingWizard } from '../components/Booking/BookingWizard'
import { motion } from 'framer-motion'

export const BookingPage = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <BookingWizard />
        </motion.div>
    )
}
