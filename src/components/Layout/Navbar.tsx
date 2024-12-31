/**
 * The `Navbar` component is the main navigation bar for the application. It displays the website's logo, navigation links, and a button. The component also includes a mobile menu that is displayed when the screen size is smaller than the large breakpoint.
 *
 * The `Navbar` component receives a `websiteConfig` prop of type `ConfigResponse | null`, which contains the configuration data for the website, including the navigation items, logo, and button.
 *
 * The component uses the `useState` hook to manage the state of the mobile menu, and the `useRouter` hook from Next.js to handle navigation. The `handleButtonClick` function is used to navigate to a specific route when a navigation link or the button is clicked.
 *
 * The `ExpandableItem` component is used to render navigation items that have a badge and can be expanded to show a list of related services. The `TypeOfServicesOption` array is used to determine the list of services to display in the expanded menu.
 */
import React, { useRef, useState } from "react";
import { ConfigResponse, NavItem } from "@/types/layout.type";
import Link from "next/link";
import Button from "../Common/Button";
import { useRouter } from "next/router";
import {
  DesktopServicesDropdown,
  ExpandableItem,
} from "./NavbarExpandableView";

// import { useLanguage } from "@/contexts/LocaleContext";
// import Cookies from "js-cookie";

interface NavbarProps {
  websiteConfig: ConfigResponse | null;
}

const Navbar: React.FC<NavbarProps> = ({ websiteConfig }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  // const { pathname, query, locale } = router;
  // const [language, setLanguage] = useState(locale);

  // const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const newLocale = event.target.value;
  //   router.replace({ pathname, query }, undefined, { locale: newLocale });
  //   setLanguage(event.target.value);
  // };

  const handleCloseMobileMenu = () => {
    setIsOpen(false);
  };

  const handleButtonClick = (route: string) => {
    router.push(route);
    setIsOpen(false);
  };

  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesHover = (isHovered: boolean) => {
    setIsServicesHovered(isHovered);
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        if (!isDropdownHovered) {
          setIsServicesHovered(false);
        }
      }, 300);
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  if (!websiteConfig) return <></>;

  const { nav, logo, navButton } = websiteConfig.data.attributes;

  return (
    <nav className="bg-white shadow-md rounded-b-[20px] fixed w-full z-50">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-[0px] ">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <link rel="preload" as="image" href={logo.data.attributes.url} />
              <img src={logo.data.attributes.url} alt="Logo" width={"250px"}/>
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-12">
            {nav.map((item: NavItem) => (
              <div
                key={item.id}
                onMouseEnter={() =>
                  item.slug === "/services" && handleServicesHover(true)
                }
                onMouseLeave={() =>
                  item.slug === "/services" && handleServicesHover(false)
                }
                className="relative"
              >
                <Link
                  href={`${item.slug === "/services" ? "" : item.slug}`}
                  className={`text-gray-900 relative ${
                    router.asPath === item.slug ||
                    router.asPath.startsWith(item.slug)
                      ? "text-text-blue underline underline-offset-8 decoration-2"
                      : ""
                  }`}
                >
                  {item.name}
                  {item.isBadge && (
                    <span className="bg-primary-blue text-white rounded-full px-3 py-px ml-1 text-xs absolute bottom-[19px] left-[45px] text-center">
                      {websiteConfig.data.serviceCount}
                    </span>
                  )}
                </Link>
                {item.slug === "/services" &&
                  (isServicesHovered || isDropdownHovered) && (
                    <DesktopServicesDropdown
                      serviceNames={websiteConfig.data.serviceNames}
                      setIsDropdownHovered={setIsDropdownHovered}
                      setIsServicesHovered={setIsServicesHovered}
                    />
                  )}
              </div>
            ))}
            <Button
              name={navButton.buttonText}
              type="primaryBtn"
              onClick={() => handleButtonClick(navButton.slug)}
            />

            {/* <select
              value={language}
              onChange={handleLocaleChange}
              className="ml-4 p-2 border border-gray-300 rounded"
            >
              <option value="en">English</option>
              <option value="th">Thai</option>
              <option value="ms">Malaysia</option>
              <option value="id">Indonesia</option>
              <option value="vi">Vietnamese</option>
            </select> */}
          </div>
          <div className="-mr-2 flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <>
                  <link
                    rel="preload"
                    as="image"
                    href="/assets/images/close.svg"
                  />

                  <img src="/assets/images/close.svg" alt="close" />
                </>
              ) : (
                <>
                  <link
                    rel="preload"
                    as="image"
                    href="/assets/images/hamburger.svg"
                  />
                  <img src="/assets/images/hamburger.svg" alt="hamburger" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-30">
          <div className="fixed inset-y-0 right-0 max-w-[246px] w-full bg-white shadow-lg overflow-scroll">
            <div className="flex items-center justify-end px-4 py-3">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center  pl-2 pr-3 pt-[30px] rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close main menu</span>
                <link
                  rel="preload"
                  as="image"
                  href="/assets/images/close.svg"
                />
                <img src="/assets/images/close.svg" alt="close" />
              </button>
            </div>
            <div className="pt-2 pb-3">
              {/* Mobile menu links */}

              {nav.map((item: NavItem) =>
                item.isBadge && websiteConfig.data.serviceNames.length > 0 ? (
                  <ExpandableItem
                    key={item.id}
                    item={item}
                    serviceCount={websiteConfig.data.serviceCount}
                    serviceNames={websiteConfig.data.serviceNames}
                    handleClose={handleCloseMobileMenu}
                  />
                ) : (
                  <Link
                    href={`${item.slug}`}
                    key={item.id}
                    className={`${
                      router.asPath === item.slug
                        ? "text-primary-blue"
                        : "text-text-black"
                    } block py-3 px-8 text-base font-light  relative}`}
                    onClick={handleCloseMobileMenu}

                    // locale={router.locale}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="py-3 px-8">
                <Button
                  name={navButton.buttonText}
                  type="primaryBtn"
                  onClick={() => handleButtonClick(navButton.slug)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
