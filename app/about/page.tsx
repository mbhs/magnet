import Image from "next/image";

export default function About() {
  return (
    <div className="h-[100%] w-[100%] flex flex-col">
      <div className = "flex justify-center items-center h-screen">
        <div style={{ background: 'radial-gradient(circle farthest-corner at 25% center, #7f1d1d, #460809, #230405,  #230405 100%)' }} className="wrapper relative overflow-clip w-6xl h-full w-full  flex justify-center items-left z-10 flex-col px-10 before:absolute before:h-[60%] before:w-[40%] before:animate-[blob_30s_infinite_linear] before:rounded-full before:bg-red-900 before:opacity-40 before:blur-[60px] after:absolute after:h-[80%] after:w-[60%] after:animate-blob-reverse after:rounded-full after:bg-red-900 after:opacity-40 after:animate-[blob_20s_infinite_linear_reverse] after:left-[50%] after:top-[50%] after:blur-[60px]">
          <p className="z-10 text-white font-bold text-[60px]/20">About the Magnet</p>
          <p className="z-10 text-[24px] text-[#dddddd]">Some fancy description here.</p>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(to bottom, #230405, #460809,  #230405 100%)' }} className="min-h-screen h-full w-full p-16 flex justify-center items-center">
        <div style={{ background: 'linear-gradient(to bottom, #7f1d1d, #460809)' }} className="flex flex-col justify-center w-[85%] rounded-xl bg-red-900 h-[100%] min-h-[90vh] text-center items-center">
          <p className="font-bold text-[100px] text-[#eeeeee]">About the Magnet</p>
          <div className="border-1 border-white w-[10%]"></div>
        <p className="text-[#eeeeee] w-[70%] mt-[16px]">In 1985, Montgomery County Public Schools opened its Science, Mathematics, and Computer Science Magnet Program within Montgomery Blair High School in Silver Spring, Maryland. The Magnet Program is designed to offer accelerated, interdisciplinary courses in science, mathematics, and computer science for highly able students particularly interested in these subjects.</p>
        <p className="text-[#eeeeee] w-[70%] mt-[16px]">Since Magnet students have a number of extra academic requirements, magnet students have an eight-period day, instead of the normal seven-period day of most county high school students. Magnet students can (and do!) take full advantage of Blair's other extracurriculars such as athletics, student clubs, the school's bands and plays, and other activities.</p>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(to bottom, #230405, #460809,  #230405 100%)' }} className="min-h-screen h-full w-full p-16 flex justify-center items-center">
        <div style={{ background: 'linear-gradient(to bottom, #7f1d1d, #460809)' }} className="flex flex-col justify-center w-[85%] rounded-xl bg-red-900 h-[100%] min-h-[90vh] text-center items-center">
          <p className="font-bold text-[100px] text-[#eeeeee]">Magnet Student Acheivements</p>
          <div className="border-1 border-white w-[10%]"></div>
        <p className="text-[#eeeeee] w-[70%] mt-[16px]">

30-50% of seniors annually awarded National Merit Scholarship Semifinalists

2012, 2014, 2016, 2018, 2019, 2021 & 2024 - Davidson Fellowship Winners

2010, 2011, 2012, 2014, 2018 & 2022 US Presidential Scholar Winners

Twenty-seven Regeneron Scholars, 2019-2025

2011, 2013, 2014, 2015 & 2018 Gold or Silver Medalists, International Physics Olympiad

2025 Gold Medalist, International Biology Olympiad

2024 Gold Medalist, International Chemistry Olympiad

2021 Gold Medalist, European Girls Olympiad in Informatics

2021 Putnam Fellow

2017-2019 It’s Academic Champion

Top student in the UMD Mathematics Competition 2015-2023

2016-2019 top three finshers NYU Tanden School of Engineering cybersecurity competition (winners in 2017 & 2019)
        </p>
        </div>
      </div>
    </div>
  );
}