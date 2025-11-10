"use client"

import React from "react";
import { motion } from "motion/react"
import NavBar from "@/components/navbar";
import { services } from "@/constants/services";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="text-slate-800 ">
        <section
          id="hero"
          className="relative w-full bg-slate-50 overflow-hidden bg-fixed bg-center bg-repeat bg-cover"
          style={{
            backgroundImage: `url('/images/hero-section.avif')`
          }}
        >
          <motion.div
            className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  delay: 1,
                  staggerChildren: 1,
                  delayChildren: 0.3,
                },
              },
            }}
            whileInView={"visible"}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="my-12 flex-1"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold bg-linear-to-r to-slate-500 from-black text-transparent bg-clip-text">
                We care about you.
              </h1>

              <motion.p
                className="my-6 text-lg sm:max-w-1/2 bg-linear-to-r to-gray-600 from-black text-transparent bg-clip-text"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum eaque modi non possimus? Quis reprehenderit nihil nisi quia voluptate. Laudantium autem sunt sint possimus!
              </motion.p>

              <motion.div
                className="mt-8 flex gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Button size={"extra-large"}>Our Services</Button>
                <Button size={"extra-large"} variant={"secondary"}>
                  Book Appointment
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id="services" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="mt-2 text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 1,
                    ease: "easeInOut",
                    staggerChildren: 0.2,
                    delayChildren: 0.1,
                  },
                },
              }}
              whileInView={"visible"}
              viewport={{ once: true, margin: "-200px" }}
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

        <section id="about" className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold">About Our Hospital</h2>
              <p className="mt-4 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec velit fermentum volutpat. Integer vitae augue id mauris faucibus volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Accredited specialists across departments</li>
                <li>• State-of-the-art operating theatres and labs</li>
                <li>• Holistic patient support services</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow">
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-2 text-slate-600">Have questions or need to book an appointment? Lorem ipsum dolor sit amet.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold">Get in touch</h3>
                <p className="mt-2 text-slate-600">Phone: +1 (202) 555-0100<br />Email: info@hospital.example</p>
                <form className="mt-4 space-y-3">
                  <input className="w-full px-3 py-2 border rounded" placeholder="Your name" />
                  <input className="w-full px-3 py-2 border rounded" placeholder="Email" />
                  <textarea className="w-full px-3 py-2 border rounded" placeholder="Message" />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
                </form>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold">Visit Us</h3>
                <p className="mt-2 text-slate-600">123 Health Ave, Suite 100<br />Open: Mon–Fri 8:00–18:00</p>
                <div className="mt-4 rounded overflow-hidden shadow">
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment >
  );
}
