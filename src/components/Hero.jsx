import arrow from "../assets/Vector 1.png"
import play from "../assets/Group 3.png"
import group from "../assets/Group 35924.png"
import phone1 from "../assets/phone1.png"
import phone2 from "../assets/phone2.png"
import frame from "../assets/Frame 1.png"
import gradientRev from "../assets/gradient-rev.png"
import gradient from "../assets/gradient.png"
import star from "../assets/star.png"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[90px] justify-center">
      <div className="ml-6 sm:ml-20 md:ml-40 mr-3 md:mr-0 flex-1 mt-8">
        <div className="relative">
          <img
            src={star}
            alt=""
            className="absolute -top-10 -left-16 w-10 -rotate-45 ss:block hidden"
          />
          <img
            src={gradientRev}
            alt=""
            className="absolute z-[-1] -top-24 left-36 w-96 ss:block hidden"
          />
          <h1 className="font-black text-5xl ss:text-6xl mb-5">
            Make The Best Financial Decisions
          </h1>
          <p className="font-jura mb-5">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            <br className={`sm:block hidden `} />
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex mb-3 gap-1">
            <button className="bg-black text-white flex items-center rounded py-3 px-6 text-sm gap-2 font-jura transition duration-300 ease-in-out transform hover:scale-105">
              Get Started <img src={arrow} alt="" />
            </button>
            <button className="bg-white flex items-center rounded py-2 px-6 text-sm gap-2 font-jura font-bold transition duration-300 ease-in-out transform hover:scale-105">
              <img src={play} alt="" /> Watch Video
            </button>
          </div>
          <img
            src={star}
            alt=""
            className="absolute w-10 -rotate-45 top-72 left-60 ss:block hidden"
          />
          <img src={group} alt="" className="w-[90%]" />
        </div>
      </div>
      <div className="relative flex-1 md:w-full w-8/10 min-h-56">
        <img src={gradient} alt="" className="absolute z-[-3] top-48" />
        <img
          src={phone1}
          alt=""
          className="absolute w-5/6 top-16 left-20 z-[-1]"
        />
        <img src={phone2} alt="" className="w-5/6 " />
        <img
          src={frame}
          alt=""
          className="absolute w-5/6 z-[-2] md:top-10 md:left-20 top-8 left-16"
        />
      </div>
    </div>
  );
}
export default Hero