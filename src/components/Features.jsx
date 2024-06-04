import cube1 from "../assets/cube-1.png";
import cube2 from "../assets/cube-2.png";
import star2 from "../assets/star-2.png";
import phone3 from "../assets/phone-3.png";
import gradient from "../assets/gradient.png";
import star from "../assets/star.png";
import gradientRev from "../assets/gradient-rev.png";

const data = [
  {
    icon: star2,
    title: "Budgeting Intervals",
  },
  {
    icon: cube2,
    title: "Budgeting Intervals",
  },
  {
    icon: cube1,
    title: "Budgeting Intervals",
  },
];

const Features = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse mt-6 items-center overflow-hidden md:justify-center">
      <div className="relative">
        <img
          src={star}
          alt=""
          className="absolute -rotate-45 w-10 top-20 left-16 ss:block hidden"
        />
        <img
          src={gradient}
          alt=""
          className="absolute z-[-10] top-6 -left-10"
        />
        <img src={phone3} alt="" className="" />
      </div>
      <div className="m-5 relative">
        <img
          src={gradientRev}
          alt=""
          className="absolute -right-72 z-[-1] -top-16 ss:block hidden"
        />
        <div className="ml-6 sm:ml-20 md:ml-0 mr-5">
        <h1 className="font-jura font-bold text-xl text-highlight">FEATURES</h1>
          <h1 className="font-black text-4xl py-3">Uifry Premium</h1>
          {data.map((item) => (
            <div key={item.id} className="py-3">
              <div className="flex gap-2">
                <img src={item.icon} alt="" />
                <h1 className="font-extrabold">{item.title}</h1>
              </div>
              <p className="font-jura mt-1">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet <br className="md:block hidden" />
                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Features;
