export default function Home() {
  return (
    <div>
      <div className = "flex justify-center items-center h-screen">
        <div className="wrapper relative overflow-clip w-6xl h-full w-full bg-gradient-to-br from-red-800 to-red-950 before:absolute before:h-[60%] before:w-[40%] before:animate-[blob_30s_infinite_linear] before:rounded-full before:bg-red-800 before:blur-[60px] after:absolute after:h-[80%] after:w-[60%] after:animate-blob-reverse after:rounded-full after:bg-red-800 after:animate-[blob_20s_infinite_linear_reverse] after:left-[50%] after:top-[50%] after:blur-[60px] flex justify-center items-left z-10 flex-col px-10">
          <p className="z-10 text-white font-bold text-[60px]">A place to</p>
          <p className="z-10 font-bold text-[80px]">&gt; experiment</p>
        </div>
      </div>

      <div className="-mt-[100vh] h-[200vh] w-full sticky">
        <div className="sticky top-0 min-h-screen flex items-center justify-center">
          <p className="text-4xl">
            testtesttesttesttesttesttesttesttesttest
          </p>
        </div>
      </div>

    </div>
  );
}

// after:absolute after:h-[50%] after:w-[50%] after:animate-blob-reverse after:rounded-full after:bg-red-800 
