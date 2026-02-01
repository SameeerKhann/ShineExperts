import React from 'react'
import { motion } from 'framer-motion'

export const ScrollReveal = ({ children, delay = 0, width = "100%" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            style={{ width }}
        >
            {children}
        </motion.div>
    )
}
