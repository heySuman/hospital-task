import { AccordionItem, AccordionContent, AccordionTrigger, Accordion } from "../ui/accordion";

export default function About() {
    return (
        <section id="about" className="bg-slate-100 py-16">
            <div className="max-w-7xl my-6 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <h2 className="text-3xl font-bold text-primary">About Our Hospital</h2>
                    <p className="mt-4 text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec velit fermentum volutpat. Integer vitae augue id mauris faucibus volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    </p>

                    <p className="mt-4 text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci nec velit fermentum volutpat. Integer vitae augue id mauris faucibus volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    </p>

                </div>
                <div className="rounded-lg overflow-hidden">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius rem unde facilis aliquid nemo consequuntur, magni sit illo. Quibusdam quos voluptatum similique beatae aspernatur.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia, nisi nostrum, alias voluptates possimus iure laudantium, porro cum velit impedit dolorem ullam ducimus et?
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eum rem ullam! Rem molestiae eaque tempore, deserunt obcaecati aspernatur modi asperiores veritatis culpa reprehenderit illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quia illum non ea error ipsa, minima delectus. Expedita explicabo obcaecati incidunt quo iure quidem pariatur.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta animi distinctio exercitationem mollitia dolor dolorem a aliquid qui deleniti! Hic, dicta nulla quas eveniet, ratione, itaque corporis obcaecati quae illo voluptatum sed! Dolor, alias ratione!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsa?
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta animi distinctio exercitationem mollitia dolor dolorem a aliquid qui deleniti! Hic, dicta nulla quas eveniet, ratione, itaque corporis obcaecati quae illo voluptatum sed! Dolor, alias ratione!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsa?
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta animi distinctio exercitationem mollitia dolor dolorem a aliquid qui deleniti! Hic, dicta nulla quas eveniet, ratione, itaque corporis obcaecati quae illo voluptatum sed! Dolor, alias ratione!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsa?
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>

    )
}