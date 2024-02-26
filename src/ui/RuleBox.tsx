function RuleBox({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="desktop:px-8 laptop:grid laptop:grid-cols-[auto_1fr] laptop:text-start laptop:py-12 laptop:px-16 laptop:gap-8 laptop:gap-x-16 mobile:rounded-[2rem] flex flex-col items-center gap-16 rounded-[4rem] bg-white px-[4.8rem] py-24 text-center">
      <h3 className="laptop:row-end-3 laptop:row-start-1 mobile:text-[2.4rem] mobile:tracking-[0.12rem] mobile:row-end-2 text-[8.8rem] leading-[120%] text-[#2463ff]">
        {number}
      </h3>
      <h2 className="laptop:text-[4rem] laptop:tracking-[0.2rem] mobile:text-[2.4rem] mobile:tracking-[0.12rem] text-[4.8rem] uppercase leading-[120%] tracking-[0.24rem] text-[#261676]">
        {title}
      </h2>
      <p className="laptop:text-[2rem] laptop:tracking-[0.1rem] mobile:text-[1.6rem] mobile:tracking-[0.08rem] mobile:col-span-full text-[2.6rem] leading-[120%] tracking-[0.13rem] text-[#887dc0]">
        {text}
      </p>
    </div>
  );
}

export default RuleBox;
