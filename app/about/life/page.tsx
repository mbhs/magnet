"use client";

import Image from "next/image";
import { Button, Link, Table} from '@heroui/react';

export default function Life() {
  return (
    <div className="h-[100%] w-[100%]" style={{ background: 'linear-gradient(to bottom, #460809 80%,  #230405)' }}>
      <div className = "flex justify-center items-center h-screen">
        <div  className="wrapper relative overflow-clip w-6xl h-full w-full flex justify-center items-left z-10 flex-col px-10 before:absolute before:h-[60%] before:w-[40%] before:animate-[blob_30s_infinite_linear] before:rounded-full before:bg-red-900 before:opacity-40 before:blur-[60px] after:absolute after:h-[80%] after:w-[60%] after:animate-blob-reverse after:rounded-full after:bg-red-900 after:opacity-40 after:animate-[blob_20s_infinite_linear_reverse] after:left-[50%] after:top-[50%] after:blur-[60px] overflow-y-visible">
          <p className="z-10 text-white font-bold text-[60px]/20">Magnet Life</p>
          <p className="z-10 text-[20px]/20 text-[#cccccc]">What is it like being a magnet student?</p>
        </div>
      </div>

      {/* magnet mission */}
      <div className="min-h-screen h-full w-full p-16 flex justify-center items-center">
        <div style={{ background: "linear-gradient(to bottom, rgba(127,29,29,0.2)" }} className="flex flex-col justify-center w-[85%] rounded-xl bg-red-900 h-[100%] min-h-[90vh] text-center items-center">
          <p className="font-bold text-[100px] text-[#eeeeee]">Magnet Difference</p>
          <div className="border-1 border-white w-[10%]"></div>
        <p className="text-[#eeeeee] w-[70%] mt-[16px]">
            Since all MCPS students have strong options with their local high schools, magnet programs provide unique opportunities.
        </p>
        <div className="flex flex-row rounded-xl gap-10">
            <Image src="/assets/apple.png" width={200} height={200} alt="apple" className="rounded-xl"></Image>
            <div className="flex flex-col bg-[#7f1d1d]/10 rounded-xl">
                <p>Heading</p>
                <p>Description</p>
            </div>
        </div>
        </div>
      </div>

      

      {/* current news */}
      <div className="min-h-screen h-full w-full py-[15%] px-16 flex justify-center items-center z-40">
        <div style={{ background: "linear-gradient(to bottom, rgba(127,29,29,0.2)" }} className="flex justify-center w-[85%] rounded-2xl h-[100%] min-h-[90vh] shadow-xl">
          <div className="h-[100%] my-16 mx-12 flex flex-col justify-center items-center">
            <h1 className="font-bold text-[50px]/16 text-[#eeeeee] text-center">MAGNET ACHEIVEMENTS</h1>
            <span className="my-10 w-[80%] border-1 border-white"></span>

          </div>
        </div>
        
      </div>

    </div>
  );
}

// after:absolute after:h-[50%] after:w-[50%] after:animate-blob-reverse after:rounded-full after:bg-red-800 
