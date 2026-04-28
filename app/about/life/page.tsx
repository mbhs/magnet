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
      <div className="min-h-screen h-full w-full p-16 flex justify-center items-center z-50 relative">
        <div style={{ background: "linear-gradient(to bottom, rgba(127,29,29,0.2)" }} className="flex flex-col justify-center w-[85%] rounded-xl bg-red-900 h-[100%] min-h-[90vh] text-center items-center">
          <p className="font-bold text-[100px] text-[#eeeeee] pt-10">Magnet Difference</p>
          <div className="border-1 border-white w-[10%]"></div>
        <p className="text-[#eeeeee] w-[70%] mt-[16px]">
            Since all MCPS students have strong options with their local high schools, magnet programs provide unique opportunities.
        </p>
        <div className="grid grid-cols-2 rounded-xl gap-10 p-10">
            <div className="flex flex-col bg-[#7f1d1d]/10 rounded-xl p-10 gap-4">
                <p className="text-white font-bold text-[32px]">An eight-period school day</p>
                <p className="text-white text-[16px]">The magnet program school day ends at 3:20pm instead of 2:30pm so that students can take one more class than in a traditional MCPS high school. After-school activities typically start around 3:30pm so students can participate in everything Blair has to offer.</p>
            </div>
            <div className="flex flex-col bg-[#7f1d1d]/10 rounded-xl p-10 gap-4">
                <p className="text-white font-bold text-[32px]">Unique Courses</p>
                <p className="text-white text-[16px]">As Blair is a large school, there are more electives to take at Blair than any other school in MCPS.  This includes a large range of STEM Electives that are specific to the magnet program.</p>
            </div>
            <div className="flex flex-col bg-[#7f1d1d]/10 rounded-xl p-10 gap-4">
                <p className="text-white font-bold text-[32px]">Blocked Classes</p>
                <p className="text-white text-[16px]">During a student's freshmen year, core courses are blocked so that the same group os students takes all the core courses together.  This allows for interdisciplinary projects to be given across content areas and supervised by multiple teachers.</p>
            </div>
            <div className="flex flex-col bg-[#7f1d1d]/10 rounded-xl p-10 gap-4">
                <p className="text-white font-bold text-[32px]">Quality Instruction</p>
                <p className="text-white text-[16px]">MCPS high schools have a great number of excellent teachers across all subject areas.  Within the magnet program, teachers are selected not only for their instructional approach, but also their content knowledge that goes well beyond typical course requirements.  Teachers expect that students not only meet course objectives, but help students with independent work that expands beyond the scope of even the most advanced courses.  </p>
            </div>
        </div>
        </div>
      </div>

      

      {/* current news */}
      

    </div>
  );
}

// after:absolute after:h-[50%] after:w-[50%] after:animate-blob-reverse after:rounded-full after:bg-red-800 
