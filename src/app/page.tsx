"use client"

import React from "react";
import { motion } from "motion/react"
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import About from "@/components/landing-page/about-hospital";
import Contact from "@/components/landing-page/contact-page";
import Service from "@/components/landing-page/services";


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
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
              className="my-12 flex-1"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                We <span className="text-primary">care</span> about you.
              </h1>

              <motion.p
                className="my-6 text-lg sm:max-w-lg bg-linear-to-r to-gray-600 from-black text-transparent bg-clip-text"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati soluta magni fugiat sapiente autem consectetur, dignissimos architecto dicta perspiciatis. Sapiente minus sit a ex.
              </motion.p>

              <motion.div
                className="mt-8 flex gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Button size="lg">Our Services</Button>
                <Button size="lg" variant="secondary">
                  Book Appointment
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>


        <Service />
        <About />
        <Contact />
      </main>
      <footer>
        <p className="p-4 text-center">All Copyright @ Hospital. 2025</p>
      </footer>
    </React.Fragment >
  );
}
