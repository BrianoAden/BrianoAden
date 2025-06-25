import { Code, Briefcase, User} from "lucide-react"

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
                    <h3 className="text-2xl font-semibold">Passionate Computer Engineer!</h3>

                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, magni? Ab dolore saepe dolorem quo numquam cupiditate rem error consequuntur soluta fugit ducimus, officiis sapiente in delectus odit, molestiae recusandae!
                    </p>

                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum voluptatibus magnam earum modi minima, ipsam mollitia et soluta ducimus nihil dolor voluptate pariatur voluptas rem laudantium unde. Eius, laboriosam?
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="button">
                            {" "}
                            Get In Touch
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
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
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat distinctio, eligendi odit id quisquam aliquam similique ipsum optio, dolor illum, nam delectus dicta consequatur in et officiis dolorum obcaecati magni.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat distinctio, eligendi odit id quisquam aliquam similique ipsum optio, dolor illum, nam delectus dicta consequatur in et officiis dolorum obcaecati magni.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat distinctio, eligendi odit id quisquam aliquam similique ipsum optio, dolor illum, nam delectus dicta consequatur in et officiis dolorum obcaecati magni.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    );
};