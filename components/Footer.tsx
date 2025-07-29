import { SITECONFIG } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mx-auto px-4 py-20 mt-0 md:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Logo + Description + Social Icons */}
            <div className="lg:col-span-2 col-span-1 mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left h-full justify-between">
              <div>
                <Link
                  href="/"
                  className="flex items-center justify-center md:justify-start -mt-6"
                >
                  <Image
                    width={180}
                    height={60}
                    src="/images/logo/sabbir-nasir-png-logo.png"
                    alt="Sabbir Nasir Logo"
                    className="object-contain w-48 md:w-44 lg:w-52 h-auto"
                  />
                </Link>
                <p className=" mt-5 leading-7 max-w-[380px]">
                  Need expert guidance? Get in touch with our team today or call
                  for personalized support and consulting services.
                </p>
              </div>

              <div className="flex gap-3 mt-4 justify-center md:justify-start">
                {[
                  {
                    href: "https://www.facebook.com/MelamedLawPLLC",
                    icon: <FaFacebookF className="text-[20px]" />,
                  },
                  {
                    href: "https://www.linkedin.com/company/melamedlawpllc",
                    icon: <FaLinkedinIn className="text-[20px]" />,
                  },
                  {
                    href: "https://www.instagram.com/melamedlaw_pllc",
                    icon: <FaInstagram className="text-[20px]" />,
                  },
                  {
                    href: "https://www.youtube.com/@melamedlawpllc",
                    icon: <FaYoutube className="text-[20px]" />,
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    target="_blank"
                    className="group inline-block p-3 bg-white rounded-full duration-300 hover:bg-primary"
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
            <div className="lg:col-span-2 col-span-1 w-full mt-0 md:-mt-10">
              <div className="bg-[#F4E7DA] rounded-2xl shadow-md p-6 md:p-8 space-y-5">
                <h3 className="">
                  Our <span className="text-[#2C2C2C]">Newsletter</span>
                </h3>
                <p className=" leading-relaxed">
                  Stay informed with the latest insights, strategies, updates
                  and receive expert tips from Team Sabbir Nasir to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-full bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a14427]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-full bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a14427]"
                  />
                  <button
                    type="submit"
                    className="w-full text-[#a14427] font-semibold border border-[#a14427] rounded-full py-2.5 hover:bg-[#a14427] hover:text-white transition duration-300"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <hr className="my-8 border-black " />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center text-black text-[18px] font-medium">
            <div>
              © 2025{" "}
              <a
                href="https://www.teamsabbirnasir.com"
                className="hover:underline text-secondary"
              >
                Sabbir Nasir
              </a>
              . All Rights Reserved.
            </div>
            <div>
              Design{" "}
              <a
                href="https://www.bayshorecommunication.com/"
                target="_blank"
                className="hover:underline text-secondary"
              >
                BayShore Communication
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
