import { BadgeCheck, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col my-5">
      <BadgeCheck className="w-30 h-30 text-primary" />
      <h1 className="text-6xl font-bold my-5">TodoList</h1>
      <p className="text text-primary flex">
        <Sparkles className="w-3 h-3" />
        Organize your day with elegant implicity
      </p>
    </div>
  );
};

export default Header;
