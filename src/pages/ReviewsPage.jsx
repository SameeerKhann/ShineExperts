import React from 'react'
import { motion } from 'framer-motion'
import { ReviewsList } from '../components/Reviews/ReviewsList'

export const ReviewsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px' }}
        >
            <ReviewsList />
        </motion.div>
    )
}
