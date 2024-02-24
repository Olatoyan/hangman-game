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
    <div className="flex flex-col items-center gap-16 rounded-[4rem] bg-white px-[4.8rem] py-24 text-center">
      <h3 className="text-[8.8rem] leading-[120%] text-[#2463ff]">{number}</h3>
      <h2 className="text-[4.8rem] uppercase leading-[120%] tracking-[0.24rem] text-[#261676]">
        {title}
      </h2>
      <p className="text-[2.6rem] leading-[120%] tracking-[0.13rem] text-[#887dc0]">
        {text}
      </p>
    </div>
  );
}

export default RuleBox;
