import Image from "next/image";

export default function About() {
  return (
    <div className="h-[100%] w-[100%]">
      <div className = "flex justify-center items-center h-screen">
        <div style={{ background: 'radial-gradient(circle farthest-corner at 25% center, #7f1d1d, #460809, #230405,  #230405 100%)' }} className="wrapper relative overflow-clip w-6xl h-full w-full  flex justify-center items-left z-10 flex-col px-10 before:absolute before:h-[60%] before:w-[40%] before:animate-[blob_30s_infinite_linear] before:rounded-full before:bg-red-900 before:opacity-40 before:blur-[60px] after:absolute after:h-[80%] after:w-[60%] after:animate-blob-reverse after:rounded-full after:bg-red-900 after:opacity-40 after:animate-[blob_20s_infinite_linear_reverse] after:left-[50%] after:top-[50%] after:blur-[60px]">
          <p className="z-10 text-white font-bold text-[60px]/20">About the Magnet</p>
          <p className="z-10 text-[24px] text-[#dddddd]">Some fancy description here.</p>
        </div>
      </div>

    </div>
  );
}