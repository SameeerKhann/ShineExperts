import React from 'react'
import { MapPin, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const boroughs = [
    {
        name: "Manchester",
        areas: ["City Centre", "Didsbury", "Chorlton", "Withington", "Fallowfield", "Hulme", "Cheetham Hill", "Mosten", "Newton Heath"]
    },
    {
        name: "Salford",
        areas: ["Salford Quays", "Eccles", "Worsley", "Pendlebury", "Swinon", "Walkden", "Irlam"]
    },
    {
        name: "Stockport",
        areas: ["Bramhall", "Cheadle", "Hazel Grove", "Marple", "Reddish", "Edgeley", "Heaton Moor"]
    },
    {
        name: "Trafford",
        areas: ["Altrincham", "Sale", "Stretford", "Urmston", "Bowdon", "Hale", "Old Trafford"]
    },
    {
        name: "Bolton",
        areas: ["Bolton Town Centre", "Farnworth", "Horwich", "Westhoughton", "Little Lever"]
    },
    {
        name: "Bury",
        areas: ["Bury Centre", "Prestwich", "Radcliffe", "Ramsbottom", "Whitefield"]
    },
    {
        name: "Oldham",
        areas: ["Oldham Centre", "Chadderton", "Failsworth", "Lees", "Royton", "Shaw"]
    },
    {
        name: "Rochdale",
        areas: ["Rochdale Centre", "Heywood", "Middleton", "Littleborough", "Milnrow"]
    },
    {
        name: "Tameside",
        areas: ["Ashton-under-Lyne", "Denton", "Droylsden", "Hyde", "Stalybridge"]
    },
    {
        name: "Wigan",
        areas: ["Wigan Centre", "Leigh", "Ashton-in-Makerfield", "Hindley", "Standish"]
    }
]

export const ServiceAreasSection = () => {
    return (
        <section className="bento-grid" id="areas" style={{ marginTop: '4rem', paddingBottom: '4rem' }}>
            <div className="col-span-12" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--bg-dark)', marginBottom: '1rem' }}
                >
                    Areas We <span style={{ color: 'var(--primary-green)' }}>Serve</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ color: '#666', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}
                >
                    We provide premium cleaning services across the entire Greater Manchester region. If you're in any of the areas below, we've got you covered.
                </motion.p>
            </div>

            {boroughs.map((borough, index) => (
                <motion.div
                    key={borough.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-panel col-span-4"
                    style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        background: 'white'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ background: '#062229', padding: '0.8rem', borderRadius: '12px' }}>
                            <MapPin color="var(--primary-green)" size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--bg-dark)' }}>{borough.name}</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                        {borough.areas.map(area => (
                            <div key={area} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#555' }}>
                                <CheckCircle2 size={14} color="var(--primary-green)" />
                                <span>{area}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}

            <div className="bento-card col-span-12 p-2 p-md-4" style={{
                background: 'var(--bg-dark)',
                color: 'white',
                marginTop: '2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
            }}>
                <h3 style={{ fontSize: '2.5rem' }}>Don't see your area?</h3>
                <p style={{ color: 'var(--text-mist)', fontSize: '1.2rem', maxWidth: '600px' }}>
                    We are constantly expanding our reach. Contact us to see if we can provide services in your specific location.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <button className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Contact Support</button>
                </div>
            </div>
        </section>
    )
}
