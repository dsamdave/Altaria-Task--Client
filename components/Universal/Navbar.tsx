import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/store";

const Navbar = () => {

  const { currentUser } = useAppSelector((state) => state.auth);


  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const closeNav = () => {
    setActive(false);
  };

  const router = useRouter();

  const renderLogo = () => (
    <Link href="/" className="shrink inline-flex items-center p-2 mr-4 ">
      <Image src={"/expatdoc_logo.svg"} width={103} height={103} alt="logo" />
    </Link>
  );

  const renderToggleButton = () => (
    <button
      className="inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
      onClick={handleClick}
    >
      {active ? (
        <Image
          src={"/close.png"}
          width={39}
          height={39}
          alt="Toggle Icon"
        />
      ) : (
        <Image
          src={"/open.png"}
          width={39}
          height={39}
          alt="Toggle Icon"
        />
      )}
    </button>
  );

  const renderNavLinks = () => (
    <div
      className={`w-full lg:inline-flex lg:w-auto ${
        active ? "block" : "hidden"
      }`}
    >
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center flex flex-col lg:h-auto">
        {renderNavLink("/about", "About")}
        {renderNavLink("/features", "Features")}
        {renderNavLink("/how", "How It Works")}
        {renderNavLink("/contact", "Contact Us")}
        {renderNavLink("/faq", "FAQs")}
        {renderApplyNowButton()}
      </div>
    </div>
  );

  const renderNavLink = (href: string, label: string) => (
    <div className={`${active ? 'sm:pl-4': ''}`}>
      <Link
        href={href}
        className={`
        shrink lg:inline-flex lg:w-auto w-[160px] px-4 py-2 text-[#121212] font-regular flex items-center lg:justify-center  mt-6 lg:mt-0 xl:mr-6 text-[16px]
        ${
          (router.asPath === href )
            ? "  lg:border-b-2 border-b-2 border-black"
            : "text-tertiary-8 "
        }
        `}
        onClick={closeNav}
      >
        {label}
      </Link>
    </div>
  );

  const renderApplyNowButton = () => (
    <div className="flex justify-center lg:ml-16 xl:ml-24">
      {
        currentUser && currentUser?.accessToken && currentUser?.role === "admin" ? (

      <Link
        href="/dashboard/hospitaldb/homedb"
        className={` shrink lg:inline-flex  text-white flex items-center justify-center  mt-8 lg:mt-0 sm:ml-4 py-[10px] w-full lg:w-[168px] text-lg  font-semibold rounded-[24px] bg-[#1E2230] shadow-lg`}
      >
        Admin Dashboard
      </Link>
        ) : 

        currentUser && currentUser?.accessToken && currentUser?.role === "patient" || currentUser && currentUser?.accessToken && currentUser?.role === "user" ? (

          <Link
            href="/dashboard/users/home"
            className={` shrink lg:inline-flex  text-white flex items-center justify-center  mt-8 lg:mt-0 sm:ml-4 py-[10px] w-full lg:w-[168px] text-lg  font-semibold rounded-[24px] bg-[#1E2230] shadow-lg`}
          >
            Dashboard
          </Link>
            ) :
        
        (

      <Link
        href="/dashboard/auth/login"
        className={`shrink lg:inline-flex  text-white flex items-center justify-center  mt-8 lg:mt-0 sm:ml-4 py-[10px] w-full lg:w-[168px] text-lg  font-semibold rounded-[24px] bg-[#1E2230] shadow-lg`}
      >
        Get Started
      </Link>
        )
      }
    </div>
  );

  return (
    <div>
      <div
        className={`z-10${
          active
            ? "h-screen fixed inset-0 bg-white"
            : "bg-white"
        } `}
      >
        <nav className="flex items-center justify-between flex-wrap py-1 px-4 sm:px-10 xl:px-20 sm:py-4">
          {renderLogo()}
          {renderToggleButton()}
          {renderNavLinks()}
        </nav>
      </div>
      {/* DROPDOWN */}
    </div>
  );
};

export default Navbar;
