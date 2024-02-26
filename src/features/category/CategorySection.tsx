import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CategoryBox from "./CategoryBox";

function CategorySection() {
  return (
    <section className="desktop:px-24 mobile:px-10 flex min-h-[100dvh] flex-col gap-[8rem] bg-opacity-75 bg-gradient-to-b from-[#1a043a] to-[#151278] px-44 py-8">
      <header className="mobile:justify-between flex items-center">
        <Link to="/">
          <Button type="small">
            <img src="./icon-back.svg" alt="back icon" />
          </Button>
        </Link>
        <h1 className="laptop:text-[10.4rem] laptop:tracking-[-0.052rem] mobile:text-[4rem] mobile:tracking-[0.24rem] mobile:w-auto w-full bg-gradient-to-b from-[#67b6ff] to-white bg-clip-text stroke-[#243041] stroke-[8] text-center text-[13.6rem] leading-[120%] tracking-[-0.068rem] text-transparent">
          Pick a Category
        </h1>
      </header>

      <div className="laptop:grid-cols-2 mobile:grid-cols-1 mobile:gap-[1.6rem] grid grid-cols-3 gap-x-[3.2rem] gap-y-20">
        <CategoryBox category="Movies" />
        <CategoryBox category="TV Shows" />
        <CategoryBox category="Countries" />
        <CategoryBox category="Capital Cities" />
        <CategoryBox category="Animals" />
        <CategoryBox category="Sports" />
      </div>
    </section>
  );
}

export default CategorySection;
