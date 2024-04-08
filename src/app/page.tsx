import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center gap-[30px]">
      <div className="max-w-[255px] max-h-[518px] h-full w-full bg-[#1C204B] relative text-white rounded-[15px] flex items-end p-8">
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
      <div className="flex gap-[30px] h-full w-full">
        <div className="max-w-[255px] flex max-h-[244px] w-full h-full bg-[#FF8B64] rounded-[15px] relative overflow-hidden text-white">
          <div className="ml-auto -mt-[10.91px] mr-[17.42px]">
            <svg width="79" height="79" xmlns="http://www.w3.org/2000/svg"><path d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z" fill="#D96C47" fill-rule="nonzero" /></svg>
          </div>
          <div className="absolute bottom-0 max-h-[199px] h-full w-full bg-[#1C204B] rounded-t-[15px] pt-[29px] pr-[35px] pl-[30px] pb-8">
            <div className="flex items-center justify-between">
              <p>Work</p>
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>
            </div>
          </div>
        </div>
        <div className="max-w-[255px] flex max-h-[244px] w-full h-full bg-[#FF8B64] rounded-[15px] relative overflow-hidden text-white">
          <div className="ml-auto -mt-[10.91px] mr-[17.42px]">
            <svg width="79" height="79" xmlns="http://www.w3.org/2000/svg"><path d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z" fill="#D96C47" fill-rule="nonzero" /></svg>
          </div>
          <div className="absolute bottom-0 max-h-[199px] h-full w-full bg-[#1C204B] rounded-t-[15px] pt-[29px] pr-[35px] pl-[30px] pb-8">
            <div className="flex items-center justify-between">
              <p>Work</p>
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>
            </div>
          </div>
        </div>
        <div className="max-w-[255px] flex max-h-[244px] w-full h-full bg-[#FF8B64] rounded-[15px] relative overflow-hidden text-white">
          <div className="ml-auto -mt-[10.91px] mr-[17.42px]">
            <svg width="79" height="79" xmlns="http://www.w3.org/2000/svg"><path d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z" fill="#D96C47" fill-rule="nonzero" /></svg>
          </div>
          <div className="absolute bottom-0 max-h-[199px] h-full w-full bg-[#1C204B] rounded-t-[15px] pt-[29px] pr-[35px] pl-[30px] pb-8">
            <div className="flex items-center justify-between">
              <p>Work</p>
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
