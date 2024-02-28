import headshot from '../images/ headshot.png'

export default function Index() {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-50 border-b-1 border-gray-300">
        <div className="py-24 px-5 md:py-48 md:px-10 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <p className="pr-5 md:px-20 text-4xl md:text-8xl animate-orange-wash bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent font-block font-extrabold">
              Alex Shwe
            </p>
            <img src={headshot} className="w-36 md:w-60 h-auto rounded-full animate-orange-wash bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 p-1"/>
          </div>
        </div>
      </div>
      <div className="bg-white border-b-1 border-gray-300">
        <div className="py-5 md:py-10 flex flex-col items-center">
          <div className="flex items-stretch font-semibold text-base gap-x-10 md:gap-x-44 px-10">
            <div>Passionate Creator</div>
            <div>Lifelong Learner</div>
            <div>Hardworking Teammate</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-b-1 border-gray-300">
        <div className="py-24 px-5 md:py-48 md:px-10 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <p className="pr-5 md:px-20 text-4xl md:text-8xl animate-orange-wash bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent font-block font-extrabold">
              Alex Shwe
            </p>
            <img src={headshot} className="w-36 md:w-60 h-auto rounded-full animate-orange-wash bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 p-1"/>
          </div>
        </div>
      </div>
    </div>
  );
}
