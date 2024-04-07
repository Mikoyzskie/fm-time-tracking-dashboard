import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-[255px] max-h-[518px] h-full mx-auto w-full bg-[#1C204B] relative text-white rounded-[15px] flex items-end p-8">
        <div className="absolute top-0 inset-x-0 w-full  max-h-[354px] h-full bg-[#5747EA] text-white rounded-[15px] pt-[37px] px-8 ">
          <Image
            src={"/image-jeremy.png"}
            alt="jeremy"
            width={234}
            height={234}
            className="border-white border-[3px] rounded-full size-[78px] bg-[#D8D8D8] mb-[43px]"
          />
          <div className="flex flex-col gap-[3px]">
            <p className="text-[#BBC0FF] text-[15px]">Report for</p>
            <h1 className="font-light text-[40px] leading-[47px] tracking-normal">Jeremy Robson</h1>
          </div>
        </div>
        <div className="flex flex-col gap-[21px] text-lg text-[#BBC0FF] leading-[21px]">
          <span className="hover:text-white hover:cursor-pointer">Daily</span>
          <span className="hover:text-white hover:cursor-pointer">Weekly</span>
          <span className="hover:text-white hover:cursor-pointer">Monthly</span>
        </div>
      </div>
    </main>
  );
}
