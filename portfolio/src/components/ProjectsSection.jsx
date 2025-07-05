import { ExternalLink, Github, ArrowRight } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "SnakeASIC",
        description: "ASIC developed in Verilog using Controller/Datapath architecture to simulate the class Snake game!",
        image: "projects/integrated_core.png",
        tags: ["Magic", "Verilog", "Questasim", "Irsim", "Innovus P&R"],
        demoUrl: "assets/ELEC_422_Final_Report.pdf",
        githubUrl: "https://github.com/BrianoAden/SnakeASIC"  
    },
    {
        id: 2,
        title: "Adder Design Competition",
        description: "Design competition where I implemented a Full Adder and Multiplexer in various logic families to determine the design that yielded the smallest propagation delay for each device!",
        image: "projects/Kogge_Stone.png",
        tags: ["Cadence Virtuoso"],
        demoUrl: "assets/ELEC423_Final_Report.pdf",
        githubUrl: "#"  
    },
    {
        id: 3,
        title: "32b-RISCV",
        description: "My current project! I am working on implementing a full 32b-RISC-V soft processor in Verilog, using Questasim to verify functionality.",
        image: "projects/riscv.jpeg",
        tags: ["Magic", "Verilog", "Questasim", "Irsim", "Innovus P&R", "Computer Architecture", "RISC-V"],
        demoUrl: "#",
        githubUrl: "https://github.com/BrianoAden/32bRISC-V"  
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
                        <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>
                        </div>
                            <div className="flex space-x-3 absolute bottom-0 left-5 size-12">
                                <a href = {project.demoUrl} target = "_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 bottom"> <ExternalLink size={20}/> </a>
                                <a href = {project.githubUrl} target = "_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 bottom"> <Github size={20}/> </a>
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