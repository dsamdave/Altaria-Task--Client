import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
   <div className="bg-[#1E2230] pb-5">
     <div className=" flex items-stretch justify-between flex-wrap lg:justify-evenly  pt-10 px-4 lg:px-0">
      <div className="sm:w-[398px]">
        <Image
          src={"/w-logo.png"}
          width={103}
          height={10}
          alt=" Footer Logo"
        />
        <h1 className="text-lg text-white font-normal mt-6">
        There nothing more important than our good healthy, cause that’s our principal capital 
        </h1>

        {/* Social Login */}
        <div className="hidden xl:block">
          <ul className="flex items-center gap-4 mt-10 ">
            <Link
              href={"#"}
              className="mt-3 text-sm text-white font-normal cursor-pointer"
            >
              <Image
                src={"/ft.png"}
                width={34}
                height={34}
                alt="Youtube"
              />
            </Link>
            <Link
              href={"#"}
              className="mt-3 text-sm text-white font-normal cursor-pointer"
            >
              <Image
                src={"/fi.png"}
                width={34}
                height={34}
                alt="Facebook"
              />
            </Link>
            <Link
              href={"#"}
              className="mt-3 text-sm text-white font-normal cursor-pointer"
            >
              <Image
                src={"/fl.png"}
                width={34}
                height={34}
                alt="twitter"
              />
            </Link>
            <Link
              href={"#"}
              className="mt-3 text-sm text-white font-normal cursor-pointer"
            >
              <Image
                src={"/ff.png"}
                width={34}
                height={34}
                alt="instagram"
              />
            </Link>
          
          </ul>
        </div>
      </div>

      {/* Company */}
      <div className=" sm:w-[200px] lg:w-auto mt-16 sm:mt-0">
        <h1 className="text-xl text-white font-normal">Links</h1>
        <ul className="flex flex-col">
          <Link
            href={"/about"}
            className="mt-8 text-sm text-white font-normal cursor-pointer"
          >
            About
          </Link>
          <Link
            href={"/features"}
            className="mt-8 text-sm text-white font-normal cursor-pointer"
          >
            Features
          </Link>
          <Link
            href={"/faq"}
            className="mt-8 text-sm text-white font-normal cursor-pointer"
          >
            FAQ
          </Link>
        
        </ul>
      </div>

      {/* Support */}
      <div className="sm:w-[200px] lg:w-auto mt-16 sm:mt-0">
        <h1 className="text-xl text-white font-normal">Legal</h1>
        <ul className="flex flex-col">
          <Link
            href={"#"}
            className="mt-8 text-sm text-white font-normal cursor-pointer"
          >
            Privacy policy
          </Link>
          <Link
            href={"#"}
            className="mt-8 text-sm text-white font-normal cursor-pointer"
          >
            Terms Condition
          </Link>
          <Link
            href={"#"}
            className="mt-8 text-sm text-white font-normal cursor-pointer"
          >
           Disclaimer
          </Link>
        </ul>
      </div>
      {/* Newsletter area */}
      <div className="w-full lg:w-auto mt-16 lg:mt-0">
        <h1 className="text-2xl text-white font-bold mb-8">Join A news Letter</h1>

          <input type="email" name="" id="" placeholder="Enter Your Email" className="bg-white outline-none rounded-lg p-4 w-full sm:w-[318px]" />
          <div className="w-full sm:w-[318px] mt-4">
          <button className='w-full sm:w-[318px] rounded-lg py-4 bg-[#10BEDA] text-center text-[16px] text-white font-medium'>Send</button>
          </div>
        
      </div>
      
    </div>
    <p className="text-sm text-[#ECF0FF] font-normal mt-8 lg:mt-20 text-center">
          © {currentDate} Med-Tele. All rights reserved.
        </p>
   </div>
  );
};

export default Footer;
