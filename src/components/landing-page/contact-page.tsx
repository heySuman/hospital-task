import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
    return (
        <section id="contact" className="py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
                    <p className="mt-3 text-slate-600">Have questions or need to book an appointment? Lorem ipsum dolor sit amet.</p>
                    <p className="mt-3 text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora, incidunt odio repudiandae dolores amet doloribus eius quae obcaecati excepturi reprehenderit quo alias minima id.</p>
                </div>

                <div className="mt-6">
                    <div className="rounded-lg">
                        <h3 className="font-semibold text-xl">Get in touch</h3>
                        <p className="mt-2 text-slate-600">Phone: +0 0000-0000<br />Email: mail@hospital.com</p>
                        <form className="mt-4 space-y-3">
                            <Input placeholder="Enter Your Name" />
                            <Input placeholder="Enter email" />
                            <Textarea placeholder="Enter Your Message" />
                            <Button>Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}