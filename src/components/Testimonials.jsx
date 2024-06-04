import star from "../assets/star.png"
import gradientRev from "../assets/gradient-rev.png"
import test1 from "../assets/test1.png"
import test2 from "../assets/test2.png"

const Testimonials = () => {
  return (
    <div>
      <h1 className="font-jura font-bold text-xl text-center">TESTIMONIAL</h1>
      <h1 className="font-black text-4xl pb-3 text-center">
        What Our Users <br /> Say About Us?
      </h1>
      <div className="flex items-center md:flex-row flex-col justify-center">
        <div className="relative w-4/5 sm:w-3/5">
            <img src={test1} alt="" className="" />
          <img
            src={star}
            alt=""
            className="absolute w-10 bottom-12 left-12 ss:block hidden -rotate-45"
          />
          <img
            src={gradientRev}
            alt=""
            className="absolute z-[-10] top-40 left-2 w-4/5 rotate-12"
          />

        </div>
        <div className="md:w-1/2 mr-5 md:mr-0 sm:pr-10 md:pr-40 ml-6 sm:ml-20 md:ml-0 py-3">
            <h1 className="font-extrabold capitalize text-2xl mb-8">
              the best financial accounting app ever!
            </h1>
            <p className="font-jura mt-3 mb-8">
              &quot;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.&quot;
            </p>
            <img src={test2} alt="" className="mb-10"/>
            <p className="font-jura font-black">Nick Jonas</p>
        </div>
      </div>
    </div>
  );
}
export default Testimonials