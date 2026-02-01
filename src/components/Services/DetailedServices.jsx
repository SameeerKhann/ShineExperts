import React, { useState } from 'react'
import {
    Home, Briefcase, ShoppingBag, Stethoscope, Coffee,
    Building, GraduationCap, Church, Sparkles, SprayCan,
    Key, Wind, Hammer, Sofa, Armchair, Bed, Blinds,
    Zap, Utensils, Flame, Grid, Droplets, Shirt,
    Truck, Car, Umbrella, XOctagon
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Categories for the top tabs
const CATEGORIES = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'office', label: 'Office', icon: Briefcase },
    { id: 'retail', label: 'Retail', icon: ShoppingBag },
    { id: 'health', label: 'Healthcare', icon: Stethoscope },
    { id: 'hospitality', label: 'Hospitality', icon: Coffee },
]

// Service Data (Mocking the comprehensive list from reference)
const SERVICES_DATA = {
    home: [
        { title: "Regular Cleaning", icon: Sparkles },
        { title: "One-Off Cleaning", icon: SprayCan },
        { title: "Domestic Cleaning", icon: Home },
        { title: "End of Tenancy", icon: Key, badge: "SAVE £150 TODAY!" },
        { title: "Spring Cleaning", icon: Wind },
        { title: "After Builders", icon: Hammer },
        { title: "Holiday Rental", icon: Coffee },
        { title: "Carpet Cleaning", icon: Grid, badge: "DEAL - £15 OFF!" },
        { title: "Upholstery Cleaning", icon: Sofa, badge: "DEAL - £15 OFF!" },
        { title: "Leather Sofa", icon: Armchair },
        { title: "Mattress Cleaning", icon: Bed, badge: "DEAL - £15 OFF!" },
        { title: "Curtains & Blinds", icon: Blinds, badge: "DEAL - £15 OFF!" },
        { title: "Appliance Cleaning", icon: Zap },
        { title: "Oven Cleaning", icon: Utensils, badge: "DEAL - £15 OFF!" },
        { title: "AGA Cleaning", icon: Flame },
        { title: "BBQ Cleaning", icon: Flame },
        { title: "Window Cleaning", icon: Grid, badge: "DEAL - £15 OFF!" },
        { title: "Gutter Cleaning", icon: Droplets, badge: "DEAL - £15 OFF!" },
        { title: "Laundry Pick Up", icon: Shirt },
        { title: "Dry Cleaning", icon: Shirt },
        { title: "Mobile Car Wash", icon: Car },
        { title: "Antiviral Sanitisation", icon: XOctagon },
        { title: "Chimney Cleaning", icon: CloudFog }
    ],
    // Fallback for other tabs just to show functionality
    office: [
        { title: "Office Deep Clean", icon: Briefcase },
        { title: "Carpet Maintenance", icon: Grid },
        { title: "Window Cleaning", icon: Grid }
    ]
}

// Helper for icon since we used string names in data above but lucide imports
const getIcon = (IconComponent) => {
    return IconComponent ? <IconComponent size={24} strokeWidth={1.5} /> : <Sparkles size={24} />
}
// Fix for the fallback icon usage below
import { CloudFog } from 'lucide-react'


export const DetailedServices = () => {
    const [activeTab, setActiveTab] = useState('home')
    const [selectedService, setSelectedService] = useState(null)

    // Helper to get a description based on title (Mocking real content)
    const getDescription = (title) => {
        return `Our professional ${title} service ensures a spotless environment. We use eco-friendly products and advanced techniques to deliver the best results for your home or office. 100% satisfaction guaranteed.`
    }

    return (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', position: 'relative' }}>

            {/* Tabs Navigation */}
            {/* ... keeping existing tabs code ... */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                overflowX: 'auto',
                paddingBottom: '1rem',
                marginBottom: '2rem',
                borderBottom: '1px solid rgba(0,0,0,0.1)'
            }}>
                {CATEGORIES.map(cat => {
                    const isActive = activeTab === cat.id
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 1.5rem',
                                background: 'transparent',
                                border: isActive ? '2px solid var(--bg-dark)' : '1px solid transparent', // Box style from screenshot
                                borderRadius: '8px',
                                cursor: 'pointer',
                                color: isActive ? 'var(--bg-dark)' : '#999',
                                minWidth: '100px',
                                transition: 'all 0.2s'
                            }}
                        >
                            <cat.icon size={28} />
                            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{cat.label}</span>
                        </button>
                    )
                })}
            </div>

            {/* Grid Content */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.5rem'
            }}>
                <AnimatePresence mode="wait">
                    {(SERVICES_DATA[activeTab] || SERVICES_DATA.home).map((service, idx) => (
                        <motion.div
                            key={service.title}
                            layoutId={service.title} // For shared element transition
                            onClick={() => setSelectedService(service)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bento-card light"
                            style={{
                                padding: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                cursor: 'pointer',
                                borderRadius: '12px',
                                background: 'white',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                position: 'relative',
                                overflow: 'visible'
                            }}
                            whileHover={{ y: -3, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}
                        >
                            {/* ... existing card content ... */}
                            {/* Service Icon */}
                            <div style={{ color: '#666' }}>
                                {service.icon ? <service.icon size={24} color="#555" /> : <Sparkles size={24} />}
                            </div>

                            {/* Title */}
                            <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: 0, color: '#333' }}>
                                {service.title}
                            </h3>

                            {/* Badge */}
                            {service.badge && (
                                <div style={{
                                    position: 'absolute',
                                    top: -10,
                                    right: -10,
                                    background: 'var(--primary-green)',
                                    color: 'var(--bg-dark)',
                                    fontSize: '0.65rem',
                                    fontWeight: 'bold',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                }}>
                                    {service.badge}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            style={{
                                position: 'fixed', inset: 0,
                                background: 'rgba(0,0,0,0.5)',
                                zIndex: 50,
                                backdropFilter: 'blur(4px)'
                            }}
                        />

                        {/* Modal */}
                        <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 51, pointerEvents: 'none' }}>
                            <motion.div
                                layoutId={selectedService.title}
                                style={{
                                    background: 'white',
                                    padding: '2.5rem',
                                    borderRadius: '24px',
                                    maxWidth: '500px',
                                    width: '90%',
                                    position: 'relative',
                                    pointerEvents: 'auto',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                                }}
                            >
                                <button
                                    onClick={() => setSelectedService(null)}
                                    style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: '#999' }}
                                >
                                    &times;
                                </button>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ background: 'var(--primary-green)', padding: '1rem', borderRadius: '50%', color: 'var(--bg-dark)' }}>
                                        {selectedService.icon ? <selectedService.icon size={32} /> : <Sparkles size={32} />}
                                    </div>
                                    <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--bg-dark)' }}>{selectedService.title}</h2>
                                </div>

                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem' }}>
                                    {getDescription(selectedService.title)}
                                </p>

                                <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '12px', marginBottom: '2rem' }}>
                                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Includes</h4>
                                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444' }}>
                                        <li>Certified Professional Team</li>
                                        <li>Eco-friendly Supplies</li>
                                        <li>Insurance Coverage</li>
                                    </ul>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="btn-outline"
                                        style={{ flex: 1, borderColor: '#ddd', color: '#666', justifyContent: 'center' }}
                                    >
                                        Close
                                    </button>
                                    <a
                                        href="/book"
                                        className="btn btn-primary"
                                        style={{ flex: 1, textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
                                    >
                                        Book This Service
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

        </section>
    )
}
