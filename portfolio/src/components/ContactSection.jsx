import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

import {cn} from "@/lib/utils";

export const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {

        }, 1500)
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Get in<span className="text-primary"> Touch</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                If you're looking to discuss my projects, work on something together, or chat about anything you'd like, feel free to reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>
                    <div className="space-y-3 item-center justify-center">
                    <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-start justify-center items-center">
                                <h4 className="font-medium"> Email:
                                <a href="mailto:aeb16@rice.edu" className="text-muted-foreground hover:text-primary transition-colors">
                                    {" "}aeb16@rice.edu
                                </a>
                                </h4>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone:
                                <a href="tel:+12108960610" className="text-muted-foreground hover:text-primary transition-colors">
                                {" "} +1 (210) 896-0610
                                </a>
                                </h4>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Location:
                                <a href="mailto:aeb16@rice.edu" className="text-muted-foreground hover:text-primary transition-colors">
                                    {" "} Houston, TX
                                </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href = "https://www.linkedin.com/in/aden-briano/" target="_blank" >
                                <Linkedin /> 
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                            <input type = "text" id= "name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Aden Briano..."/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                            <input type = "text" id= "email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="aeb16@rice.edu..."/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Name</label>
                            <textarea id = "message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello, I'd like to talk about..."/>
                        </div>
                        <button type="submit" className={cn("button w-full flex items-center justify-center gap-2",
                                                            )}>
                        <Send size ={16}/>
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    );
};