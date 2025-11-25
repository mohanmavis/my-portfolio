import { ThemeToggle } from "../components/ToggleTheme";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* Theme Toggle */}
      <p>Hello World</p>
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}

      {/* Main Content */}
    </div>
  );
};
