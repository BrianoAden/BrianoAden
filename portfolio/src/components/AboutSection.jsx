import { Code, Handshake, Cpu} from "lucide-react"

export const AboutSection = () => {
    return (
    <section id="about" className = "py-24 px-4 relative">
        {" "}
        <div className="containter mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">All About Me!</h3>

                    <p className="text-muted-foreground">
                    I am a current Rising Senior at Rice University in Houston, TX, studying Electrical and Computer Engineering.
                    I'm currently working on a 32-bit RISC-V soft processor, as well as a custom MCU-integrated PCB for playing the classic Snake game. As of July 2025, I am currently interning at
                    General Dynamics Mission Systems as a Systems Engineering Intern. Please feel free to scroll through my projects and skills, and visit my Github + Linkedin!
                    </p>

                    <p className="text-muted-foreground">
                        Outside of school and work, I love to travel! I also have a beautiful dog named Brady (who is also my GitHub profile picture). One of my goals in life is to spend my retirement playing Chess in Central Park in New York City. I enjoy speedcubing, reading comic books/manga, watching tv shows, and hanging out with my family and friends!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="button">
                            {" "}
                            Get In Touch
                        </a>

                        <a href="assets/BrianoAden_Resume2025.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Resume
                        </a>
                    </div>
                </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> FPGA Programming</h4>
                                    <p className="text-muted-foreground">My Digital Logic class opened my eyes to the wonders of FPGA programming. Verilog is a language that I enjoy very much, and the versatility and use cases of FPGAs are enticing to me!</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cpu className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> ASIC Design</h4>
                                    <p className="text-muted-foreground">In my VLSI Design class, I had the opportunity to design a Snake ASIC. This was an amazing experience that taught me a lot about controllers, datapaths, and the chip design flow!</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Handshake className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Leadership</h4>
                                    <p className="text-muted-foreground">I was the Electrical Sub-Team Lead for Rice Robotics Rover for the 2024-2025 academic year. This coming academic year, I am the Electrical Lead for Rice Robotics Rover! I'm very excited to help push the goals of the club and help everybody on my team on our journey to compete in the University Rover Challenge!</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    );
};