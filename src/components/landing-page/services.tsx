"use effect"
import { services } from "@/constants/services"
import { motion } from "motion/react"

export default function Service() {
    return (
        <section id="services" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-primary">Our Services</h2>
                <p className="mt-2 text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <motion.div
                    className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-150px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                ease: "easeInOut",
                                staggerChildren: 0.2,
                                delayChildren: 0.1,
                            },
                        },
                    }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-lg bg-red-200 transition-shadow hover:shadow-lg"
                        >
                            <div>{service.icon}</div>
                            <h3 className="mt-3 font-semibold text-lg">{service.name}</h3>
                            <p className="mt-2 text-slate-600 text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
        )
}