import React from 'react'
import { ServiceAreasSection } from '../components/Areas/ServiceAreasSection'
import { motion } from 'framer-motion'

export const ServiceAreasPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px' }} // Account for fixed navbar
        >
            <ServiceAreasSection />
        </motion.div>
    )
}
