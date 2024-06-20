
import HeroSection16 from "./components/Pages/Hero";
import BlogSection11 from "./components/Pages/BlogSection";
import { FooterWithSocialLinks } from "./components/Pages/Footer";

export default function App() {
  return (
    <div className="container mx-auto">
      <HeroSection16 />
      <BlogSection11 /> 
      <FooterWithSocialLinks/>
    </div>
  );
}
