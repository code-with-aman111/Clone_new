import star3 from "../assets/star3.png";
import phone5 from "../assets/phone-5.png";
import line1 from "../assets/line1.png";
import line2 from "../assets/line2.png";
import apple from "../assets/apple.png";
import star from "../assets/star.png";
import gradientRev from "../assets/gradient-rev.png";

const CTA = () => {
  return (
    <div className="ml-6 sm:ml-20 md:ml-40 mr-5 md:mr-0 sm:mt-28 mt-10  relative mb-24">
      <img
        src={star}
        alt=""
        className="sm:block hidden absolute -top-16 right-10 w-12"
      />
      <img
        src={star}
        alt=""
        className="sm:block hidden absolute top-40 -left-24 w-10 -rotate-45"
      />
      <img
        src={gradientRev}
        alt=""
        className="sm:block hidden absolute -top-40 -left-48 "
      />
      <div className="w-[86%] bg-black rounded text-white flex justify-end items-center py-3 relative z-[10]">
        <img src={line1} alt="" className="w-[40%] absolute  bottom-0 left-0" />
        <img src={line2} alt="" className="w-[40%] absolute top-0 right-0" />
        <img
          src={star3}
          alt=""
          className="absolute top-10 right-96 w-10 sm:block hidden"
        />
        <img
          src={star3}
          alt=""
          className="-rotate-45 absolute bottom-20 left-96 w-8 sm:block hidden"
        />
        <div className="pl-6 sm:pl-16">
          <h1 className="font-extrabold text-3xl pb-4">
            Ready To Get Started?
          </h1>
          <p className="font-jura pb-4">
            Risus habitant leo egestas mauris diam eget morbi tempus{" "}
            <br className="md:block hidden" /> vulputate.
          </p>
          <button
            type="button"
            className="flex bg-white text-black items-center px-3 md:px-6 gap-2 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            <p className="font-jura font-black">Download App</p>
            <img src={apple} alt="" className="w-1/6" />
          </button>
        </div>
        <div>
          <img src={phone5} alt="" />
        </div>
      </div>
    </div>
  );
};
export default CTA;
