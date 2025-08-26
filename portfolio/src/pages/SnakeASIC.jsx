import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "../components/Footer";
import { SnakeSection } from "../components/SnakeSection";


export const SnakeASIC = () => {

    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <SnakeSection />
        </main>
        {/* Footer */}
        <Footer />
    </div>
    );
};