import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, UserCheck } from 'lucide-react'

const PrivacyPolicyPage = () => {
    return (
        <div style={{ padding: '8rem 1rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: 'var(--bg-dark)', marginBottom: '1rem' }}>
                    Privacy <span style={{ color: 'var(--primary-green)' }}>Policy</span>
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Last Updated: February 1, 2026</p>
            </motion.div>

            <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '3rem', background: 'white' }}>

                <section>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--bg-dark)' }}>
                        <Shield size={28} color="var(--primary-green)" /> 1. Introduction
                    </h2>
                    <p style={{ color: '#444', lineHeight: '1.8' }}>
                        At Shine Experts Ltd ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--bg-dark)' }}>
                        <Eye size={28} color="var(--primary-green)" /> 2. Data We Collect
                    </h2>
                    <p style={{ color: '#444', lineHeight: '1.8', marginBottom: '1rem' }}>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                    </p>
                    <ul style={{ color: '#444', lineHeight: '2', paddingLeft: '1.5rem' }}>
                        <li><strong>Identity Data:</strong> includes first name, last name.</li>
                        <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--bg-dark)' }}>
                        <Lock size={28} color="var(--primary-green)" /> 3. How We Use Your Data
                    </h2>
                    <p style={{ color: '#444', lineHeight: '1.8' }}>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide cleaning services to you, to manage our relationship with you, and to improve our website and customer service experience.
                    </p>
                </section>

                <section>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--bg-dark)' }}>
                        <UserCheck size={28} color="var(--primary-green)" /> 4. Your Legal Rights
                    </h2>
                    <p style={{ color: '#444', lineHeight: '1.8' }}>
                        Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of your personal data. To exercise any of these rights, please contact us at <strong>info@shineexperts.co.uk</strong>.
                    </p>
                </section>

                <section>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--bg-dark)' }}>
                        <FileText size={28} color="var(--primary-green)" /> 5. Consent
                    </h2>
                    <p style={{ color: '#444', lineHeight: '1.8' }}>
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                    </p>
                </section>

            </div>
        </div>
    )
}

export default PrivacyPolicyPage
