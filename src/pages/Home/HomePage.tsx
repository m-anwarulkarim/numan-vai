import { ArticleGrid } from "../article/ArticleGrid";
import { AtTakhassass } from "../At-Takhassass/AtTakhassass";
import { DepartmentSection } from "../Departments/DepartmentSection";
import HeroSection from "./components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div>
        <DepartmentSection />
      </div>
      <main className=" bg-gray-50">
        <h1 className="text-3xl font-bold text-center py-10">প্রবন্ধ ও রচনা</h1>
        <ArticleGrid />
      </main>
      <div>
        <AtTakhassass />
      </div>
    </div>
  );
};

export default HomePage;
