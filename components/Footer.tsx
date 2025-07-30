import { SITECONFIG } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

import { FaYoutube } from "react-icons/fa6";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mx-auto px-4 py-16 mt-0 md:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Logo + Description + Social Icons */}
            <div className="lg:col-span-2 col-span-1 mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left h-full justify-between">
              <div>
                <Link
                  href="/"
                  className="flex items-center justify-center md:justify-start -mt-6"
                >
                  <Image
                    width={600}
                    height={500}
                    src="/images/logo/sabbir-nasir-png-logo.png"
                    alt="Sabbir Nasir Logo"
                    className="object-contain w-48 md:w-44 lg:w-48 h-auto"
                  />
                </Link>
                <p className=" mt-8 leading-7 max-w-[380px]">
                  Need expert guidance? Get in touch with our team today or call
                  for personalized support and consulting services.
                </p>
              </div>

              <div className="hidden lg:flex gap-4 mt-4 justify-center md:justify-start">
                {[
                  {
                    href: "https://www.facebook.com/teamsabbirnasir",
                    icon: <FaFacebook className="text-[20px]" />,
                  },
                  {
                    href: "https://www.linkedin.com/teamsabbirnasir",
                    icon: <FaLinkedin className="text-[20px]" />,
                  },
                  {
                    href: "https://www.instagram.com/teamsabbirnasir",
                    icon: <PiInstagramLogoFill className="text-[20px]" />,
                  },
                  {
                    href: "https://www.youtube.com/teamsabbirnasir",
                    icon: <FaYoutube className="text-[20px]" />,
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    target="_blank"
                    className="group inline-block p-3 bg-[#F4F6F6] border border-primary rounded-full duration-300 hover:bg-primary"
                  >
                    <div className="text-primary group-hover:text-white size-5">
                      {item.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Useful Links */}
            <div className="w-full flex flex-col items-center justify-center my-5 md:my-0 md:block col-span-1">
              <h3 className="mb-5">Useful Links</h3>
              <ul className="list-none space-y-5 text-[16px] font-acumin text-primary text-center md:text-left">
                {SITECONFIG?.footer?.quick_links?.map((el, idx) => (
                  <li key={idx}>
                    <Link href={el.slug} className="hover:underline">
                      <p className="text-primary"> {el.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <Newsletter />

            <div className="lg:hidden flex gap-4 mt-4 justify-center md:justify-start">
              {[
                {
                  href: "https://www.facebook.com/teamsabbirnasir",
                  icon: <FaFacebook className="text-[20px]" />,
                },
                {
                  href: "https://www.linkedin.com/sabbir-nasir-associates",
                  icon: <FaLinkedin className="text-[20px]" />,
                },
                {
                  href: "https://www.instagram.com/teamsabbirnasir",
                  icon: <PiInstagramLogoFill className="text-[20px]" />,
                },
                {
                  href: "https://www.youtube.com/@TeamSabbir_Nasir",
                  icon: <FaYoutube className="text-[20px]" />,
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="group inline-block p-3 bg-[#F4F6F6] border border-primary rounded-full duration-300 hover:bg-primary"
                >
                  <div className="text-primary group-hover:text-white size-5">
                    {item.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          {/* <hr className="my-8 border-black " /> */}
        </div>
        <div className=" bg-[#F4F6F6] py-6 hidden xl:block">
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center text-black text-[16px] font-medium">
            {" "}
            <div>
              © 2025{" "}
              <Link
                href="https://www.teamsabbirnasir.com"
                className="hover:underline"
              >
                Sabbir Nasir
              </Link>
              . All Rights Reserved.
            </div>
            <div>
              Designed By{" "}
              <Link
                href="https://www.bayshorecommunication.com/"
                target="_blank"
                className="hover:underline"
              >
                BayShore Communication
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
