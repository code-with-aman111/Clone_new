import contact from "../assets/contact.png"
import logo from "../assets/Group.png"
import envelope from "../assets/envelope.png"

const Footer = () => {
  return (
    <div className="ml-6 sm:ml-20 md:ml-40 md:mr-40 mr-6">
      <div className=" flex justify-between md:flex-row flex-col mb-8">
        <div className="font-jura text-sm mb-4">
          <img src={logo} alt="" className="w-24 mb-3" />
          <div className="flex gap-1 items-center font-bold mb-3 animate make-animate">
            <img src={envelope} alt="" className="w-5" />
            <p>Help@Frybix.Com</p>
          </div>
          <div className="flex gap-1 items-center font-bold animate make-animate">
            <img src={contact} alt="" className="w-5" />
            <p>+123 456 678 89</p>
          </div>
        </div>
        <div className="font-jura flex md:justify-between gap-16 md:gap-6 lg:gap-24 my-4 md:my-0">
          <ul>
            <h1 className="font-black text-xl mb-3">Links</h1>
            <li className="text-sm font-bold mb-3 animate make-animate">
              Home
            </li>
            <li className="text-sm font-bold mb-3 animate make-animate">
              About Us
            </li>
            <li className="text-sm font-bold mb-3 animate make-animate">
              Bookings
            </li>
            <li className="text-sm font-bold cursor-pointer animate make-animate">
              Blogs
            </li>
          </ul>
          <ul>
            <h1 className="font-black text-xl mb-3">Legal</h1>
            <li className="text-sm font-bold mb-3 animate make-animate">
              Terms Of Use
            </li>
            <li className="text-sm font-bold mb-3 animate make-animate">
              Privacy Policy
            </li>
            <li className="text-sm font-bold mb-3 animate make-animate">
              Cookie Policy
            </li>
          </ul>
          <ul>
            <h1 className="font-black text-xl mb-3">Products</h1>
            <li className="text-sm font-bold mb-3 animate make-animate">
              Take Tour
            </li>
            <li className="text-sm font-bold mb-3 animate make-animate">
              Live Chat
            </li>
            <li className="text-sm font-bold mb-3 animate make-animate">
              Reviews
            </li>
          </ul>
        </div>
        <div className="font-jura my-4 md:my-0">
          <h1 className="font-black text-xl mb-3">Newsletter</h1>
          <p className="text-sm mb-3 font-bold">Stay Up To Date</p>
          <div className="flex flex-col ss:flex-row gap-4">
            <input
              type="text"
              placeholder="Your email"
              className="md:w-28 w-full py-3 px-1"
            />
            <button className="bg-black text-white rounded py-2 px-3 text-sm animate make-animate">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="font-bold font-jura capitalize text-sm text-center py-8 md:pt-16 sm:pb-20 border-t-2">
        Copyright 2022 uifry.com all rights reserved
      </p>
    </div>
  );
}
export default Footer