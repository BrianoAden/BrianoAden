import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const projects = [
    {
        id: 1,
        title: "SnakeASIC",
        description: "ASIC developed in Verilog using Controller/Datapath architecture to simulate the class Snake game.",
        image: "projects/integrated_core.png",
        tags: ["Magic", "Verilog", "Siemens Questasim", "Synopsys Design Compiler", "Irsim", "Innovus P&R"],
        demoUrl: "./snakeasic",
        githubUrl: "https://github.com/BrianoAden/SnakeASIC"  
    },
    {
        id: 2,
        title: "Adder Design Competition",
        description: "Built Full Adders and MUXes in Cadence Virtuoso for a design competition, comparing logic families for fastest delay.",
        image: "projects/Kogge_Stone.png",
        tags: ["Cadence Virtuoso", "32-Bit Adder Design", "Layout Design", "CMOS Logic Design", "Circuit Simulation and Analysis"],
        demoUrl: "./addercomp",
        githubUrl: "#"  
    },
    {
        id: 3,
        title: "Dog Treat Launcher",
        description: "Designed and prototyped an embedded electronics game for my dog Brady using a Pocketbeagle microcontroller and Python. ",
        image: "projects/dogtreatlauncher.jpeg",
        tags: ["PocketBeagle", "Python", "PCB Design", "Shell Scripting", "Embedded Systems", "System Design and Implementation"],
        demoUrl: "https://www.hackster.io/aden-briano/edes301-dog-treat-launcher-bcfb15",
        githubUrl: "https://github.com/BrianoAden/Dog-Treat-Launcher"  
    },
    {
        id: 4,
        title: "32b-RISCV",
        description: "My current project! I am working on implementing a full 32b-RISC-V soft processor in Verilog, using Questasim to verify functionality.",
        image: "projects/riscv.jpeg",
        tags: ["Magic", "Verilog", "Siemens Questasim", "Irsim", "Innovus P&R", "RISC-V", "Computer Architecture"],
        demoUrl: "#",
        githubUrl: "https://github.com/BrianoAden/32bRISC-V"  
    },
    {
        id: 5,
        title: "D&D Discord Bot",
        description: "Worked in a team to build a Discord bot to facilitate online D&D in under 48 hours for the HackRice Hackathon. Won the First Timers category.",
        image: "projects/dndbot.png",
        tags: ["Python", "Object Oriented Programming", "Discord API", "GitHub", "Version Control", "Time Management"],
        demoUrl: "https://devpost.com/software/dungeons-and-dragons-discord-bot",
        githubUrl: "https://github.com/BrianoAden/dnd-discord-bot"  
    },
    {
        id: 6,
        title: "Tennis Ball Analyzer",
        description: "Went through product lifecyle for low power, Tennis Ball Analyzer. Exercised technical writing, requirements development and system design skills.",
        image: "projects/tennisball.jpeg",
        tags: ["ESP32", "Embedded Systems", "Arduino", "Product Development", "C++", "System Requirements and Verification"],
        demoUrl: "https://rice.digication.com/aden-briano-1/design-analysis-stage",
        githubUrl: "https://github.com/BrianoAden/TennisBallAnalyzer"  
    },
    {
        id: 7,
        title: "16b Single Cycle Processor",
        description: "Developed and tested a 16-bit single cycle processor in Verilog and programmed using AMD Vivado onto a Real Digital Boolean Board.",
        image: "projects/16b.jpeg",
        tags: ["Verilog", "AMD Vivado", "Assembly", "Computer Architecture", "SystemVerilog", "FPGA Programming"],
        demoUrl: "#",
        githubUrl: "https://github.com/BrianoAden/16-b-Processor"  
    },
    {
        id: 8,
        title: "Radar Gun",
        description: "Developed and tested a Radar Gun for testing speed of Rice Beer Bike Competitors. Exercised PCB design and embedded electronics skills. ",
        image: "projects/radar.png",
        tags: ["TI Microcontroller", "Embedded Systems", "C", "Product Development", "PCB Design", "Finite State Machine Architecture"],
        demoUrl: "https://nkh5.github.io/ELEC327-Final-Project/",
        githubUrl: "https://github.com/BrianoAden/RadarGun"  
    },
    {
        id: 9,
        title: "Rice Robotics Rover",
        description: "Lead a team in the development of a power distribution system, RF comms system, and microcontroller motor control system for Rice Rover.",
        image: "projects/rover.png",
        tags: ["ESP32", "Motor Control", "C++", "Embedded Systems", "PCB Design", "Power Distribution", "RF Communications"],
        demoUrl: "#",
        githubUrl: "https://github.com/BrianoAden/Rover-ELEC"  
    }
]



export const ProjectsSection = () => {
    return <section id = "projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Welcome to my projects section! Each project here is the product of much dedication and care, and has a sophisticated report and corresponding GitHub repo to explore. I hope you enjoy!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-4 mb-10">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="">
                        <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-0"> {project.description} </p>
                        </div>
                            <div className="flex space-x-3 absolute bottom-0 left-5 size-12">
                                <Link to = {project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300 bottom"> <ExternalLink size={20}/> </Link>
                                <Link to = {project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300 bottom"> <Github size={20}/> </Link>
                            </div>
                        </div>
                    </div>
            ))}
            </div>

            <div className="text-center mt-12">
                <a className="button w-fit flex items-center mx-auto gap-2" href="https://github.com/BrianoAden" target="_blank">
                    Check out my Github! <ArrowRight size={60}/>
                </a>
            </div>
        </div>
        </section>   
};