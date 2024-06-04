import star from "../assets/star.png"

const FAQ = () => {
  return (
    <div className="ml-6 sm:ml-20 md:ml-40 mr-5 md:mr-0 md:mt-0 mt-8 relative">
      <h1 className="font-jura font-bold text-xl text-highlight">FAQ</h1>
      <h1 className="font-black text-4xl mb-10">
        Frequently Asked <br />
        Questions
      </h1>
      <img
        src={star}
        alt=""
        className="absolute w-10 top-20 right-[620px] md:block hidden"
      />
      <div className="flex md:gap-4 w-[86%] md:flex-row flex-col mt-1">
        <ul>
          <li className="bg-highlight rounded p-5 mb-3 text-white cursor-pointer">
            <h1 className="capitalize font-extrabold">
              the best financial accounting app ever!
            </h1>
            <p className="font-jura">
              &ldquo;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&rdquo;
            </p>
          </li>
          <li className=" rounded p-5 mb-3 cursor-pointer">
            <h1 className="capitalize font-extrabold">
              the best financial accounting app ever!
            </h1>
            <p className="font-jura">
              &ldquo;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&rdquo;
            </p>
          </li>
          <li className="bg-highlight rounded p-5 text-white mb-3 cursor-pointer">
            <h1 className="capitalize font-extrabold">
              the best financial accounting app ever!
            </h1>
            <p className="font-jura">
              &ldquo;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&rdquo;
            </p>
          </li>
        </ul>
        <ul>
          <li className=" rounded p-5 mb-3 cursor-pointer">
            <h1 className="capitalize font-extrabold">
              the best financial accounting app ever!
            </h1>
            <p className="font-jura">
              &ldquo;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&rdquo;
            </p>
          </li>
          <li className="bg-highlight rounded p-5 text-white mb-3 cursor-pointer">
            <h1 className="capitalize font-extrabold">
              the best financial accounting app ever!
            </h1>
            <p className="font-jura">
              &ldquo;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&rdquo;
            </p>
          </li>
          <li className=" rounded p-5 mb-3 cursor-pointer">
            <h1 className="capitalize font-extrabold">
              the best financial accounting app ever!
            </h1>
            <p className="font-jura">
              &ldquo;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.&rdquo;
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FAQ;
