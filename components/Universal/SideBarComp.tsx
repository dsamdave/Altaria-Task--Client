import { useRouter } from "next/router";
import Spinner from "./Spinner";

const Sidebar = () => {
  const router = useRouter();

  // Define the menu items
  const menuItems = [
    { href: "/bills/airtime/select", icon: "ti-mobile", label: "Airtime Recharge", keyword: "airtime" },
    { href: "/bills/data/select", icon: "ti-signal", label: "Data Recharge", keyword: "data" },
    { href: "/bills/cable-tv/select", icon: "ti-desktop", label: "Cable TV Recharge", keyword: "cable" },
    { href: "/bills/electricity/select", icon: "ti-bolt", label: "Electricity Recharge", keyword: "electricity" },
    { href: "/sports-betting", icon: "ti-medall", label: "Sports Betting", keyword: "sports" },
    { href: "/education", icon: "ti-book", label: "Education", keyword: "education" },
    { href: "#", icon: "ti-menu-alt", label: "More", keyword: "more" },
  ];

  return (
    <div className="col-lg-3 pr-md--2">
      <div className="bg-white shadow-xs rounded-lg h-100">
        <a
          href="#"
          className="dash-menu d-none d-block-md fw-700 p-3 text-current font-xsss ls-3"
        >
          BROWSE CATEGORIES
          <i className="ti-menu float-right font-xss mt-1"></i>
        </a>
        <ul className="tab-ul">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`shrink bg-white p-3 border-bottom-light w-100 fw-600 font-xsss d-inline-block ${
                  router.pathname.includes(item.keyword)
                    ? "text-grey-700 fw-700"
                    : "text-grey-500"
                }`}
              >
                <i className={`${item.icon} font-md float-left mr-3`}></i>
                {item.label}
                <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* <Spinner /> */}
    </div>
  );
};

export default Sidebar;
