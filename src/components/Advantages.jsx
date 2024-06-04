import groupAdv from "../assets/group-adv.png"
import onHold from "../assets/onhold.png"
import star from "../assets/star.png"
import bell from "../assets/bell.png"
import gradientRev from "../assets/gradient-rev.png"
import gradient from "../assets/gradient.png"
import phone4 from "../assets/phone-4.png"
import card from "../assets/card.png"
import starIcon from "../assets/star-icon.png"

const Advantages = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex items-center md:flex-row flex-col justify-center ml-6 sm:ml-20 md:ml-40">
        <div className="md:w-1/2 p-3 mr-5 md:mr-0">
          <h1 className="font-jura font-bold text-xl text-highlight">
            ADVANTAGES
          </h1>
          <h1 className="font-black text-4xl py-3">Why Choose Uifry?</h1>
          <div className="py-3">
            <div className="flex gap-4 items-center">
              <img src={bell} alt="" />
              <h1 className="font-extrabold">Clever Notifications</h1>
            </div>
            <p className="font-jura mt-3">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={star}
            alt=""
            className="absolute w-10 top-20 right-0 ss:block hidden"
          />
          <img
            src={gradientRev}
            alt=""
            className="absolute z-[-10] top-40 -left-4"
          />
          <img
            src={onHold}
            alt=""
            className="w-2/5  absolute z-[10]   top-60 ss:top-72 right-24"
          />
          <img src={groupAdv} alt="" className="" />
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col-reverse justify-center">
        <div className="relative">
          <img
            src={star}
            alt=""
            className="absolute w-10 top-20 right-0 ss:block hidden -rotate-45"
          />
          <img
            src={gradient}
            alt=""
            className="absolute z-[-10] top-40 left-24 w-4/5 rotate-12"
          />
          <img src={card} alt="" className="absolute top-40 left-52 ss:top-48 ss:left-64 w-2/5"/>
          <img src={phone4} alt="" className="" />
        </div>
        <div className="md:w-1/2 p-3 mr-5 md:mr-0 md:pr-16 ml-6 sm:ml-20 md:ml-0">
          <h1 className="font-black text-4xl py-3">Fully Customizable</h1>
          <div className="py-3 relative">
            <div className="flex gap-4 items-center">
              <img src={starIcon} alt="" />
              <h1 className="font-extrabold">Clever Notifications</h1>
            </div>
            <p className="font-jura mt-3">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
            <img
            src={star}
            alt=""
            className="absolute w-10 top-64 right-32 md:block hidden"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advantages