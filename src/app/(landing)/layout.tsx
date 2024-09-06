import NewsLetter from "@/components/landing/newsletter";
import PopUpProvider from "@/components/provider/pop-up-provider";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

interface ILandingLayout {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: ILandingLayout) {
  return (
    <div className="relative bg-light min-h-screen transition-colors overflow-x-hidden dark:bg-dark">
      <PopUpProvider>
        <Navbar />
        {children}
        <NewsLetter />
        <Footer />
      </PopUpProvider>
    </div>
  );
}
