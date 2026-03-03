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
            Magnet Mission
          </p>
          <p className="text">
            Recognizing that education is an individual experience that depends on the unique talents and interests of each person, the mission of the Blair Magnet Program is to provide an environment in which each person's education is maximized by emphasizing the interrelationships among the disciplines, developing a repertoire of problem-solving techniques, and pursuing both independent and collaborative research projects.
          </p>
          <p className = "text">
            To realize the above mission, the staff nurtures the special talents of its academically able students by fostering individualism, independent thinking, and self-confidence by challenging those students through a unique, diversified curriculum. The environment, structure, and content promote the self-learner concept in which students participate in constructing their own knowledge base and learn problem-solving strategies that foster the multidisciplinary approach. The scope of their education extends beyond traditional classroom boundaries as students are asked to connect with a community that includes not only parents, mentors, other students, and staff but also a physical environment as diverse as our region
          </p>
        </div>
      </div>

    </div>
  );
}

// after:absolute after:h-[50%] after:w-[50%] after:animate-blob-reverse after:rounded-full after:bg-red-800 
