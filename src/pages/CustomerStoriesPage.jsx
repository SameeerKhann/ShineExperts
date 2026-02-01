import React from 'react'
import { motion } from 'framer-motion'
import { StoriesList } from '../components/Stories/StoriesList'

export const CustomerStoriesPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px' }}
        >
            <StoriesList />
        </motion.div>
    )
}
