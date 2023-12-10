import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import BlueSvg from "../assets/BlueSvg";
import GreenSvg from "../assets/GreenSvg";

export default function NavBar() {
  return (
    <section className={"relative"}>
      <div className={"absolute -z-10"}>
        <BlueSvg />
        <GreenSvg />
      </div>

      <header className={"w-11/12 mx-auto"}>
        <div className={"flex items-center justify-between text-[14px] p-10"}>
          <Link
            to={"/"}
            className={
              "text-[#1B1C57] flex items-center capitalize text-base font-bold z-10"
            }
          >
            <img src="/images/logo.svg" className={"mr-4"} alt="logo" />
            Hounter
          </Link>

          <nav className={"z-10 text-white"}>
            <ul
              className={
                "flex items-center justify-between gap-6 text-base relative"
              }
            >
              <li>
                <Link
                  to={"/about"}
                  className={
                    "rounded-[32px] py-2 px-4 border border-[#ffffff]/30 bg-[#ffffff]/10"
                  }
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/article"}
                  className={
                    "rounded-[32px] py-2 px-4 border border-[#ffffff]/30 bg-[#ffffff]/10"
                  }
                >
                  Article
                </Link>
              </li>
              <li>
                <Link
                  to={"/property"}
                  className={
                    "rounded-[32px] flex items-center gap-2.5 py-2 px-4 border border-[#ffffff]/30 bg-[#ffffff]/10"
                  }
                >
                  Property
                  <FaChevronDown />
                </Link>
              </li>
              <li>
                <Link
                  to={"/signup"}
                  className={
                    "rounded-[32px] py-2 px-4 ml-16 border border-[#ffffff]/30 bg-[#D1FAE5] text-[#047857] font-semibold"
                  }
                >
                  Sign Up!
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
}
