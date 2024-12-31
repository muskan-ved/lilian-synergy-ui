import { NavItem, ServiceNames } from "@/types/layout.type";
import { useRouter } from "next/router";
import { useState } from "react";
import { TypeOfServicesOption } from "@/utils/staticData";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";

interface ExpandableItemProps {
  item: NavItem;
  serviceCount: number;
  serviceNames: ServiceNames[];
  handleClose: (route: string) => void;
}

interface DesktopServicesDropdownProps {
  serviceNames: ServiceNames[];
  setIsServicesHovered: (value: boolean) => void;
  setIsDropdownHovered: (value: boolean) => void;
}

export const ExpandableItem: React.FC<ExpandableItemProps> = ({
  item,
  serviceCount,
  serviceNames,
  handleClose,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between items-center py-3 px-8 text-base font-light text-gray-900 relative">
        <Link
          href={item.slug}
          className={`${
            router.asPath === item.slug
              ? "text-primary-blue"
              : "text-text-black"
          }`}
          onClick={() => handleClose(item.slug)}

          // locale={router.locale}
        >
          {item.name}
        </Link>
        {item.isBadge && serviceCount > 0 && (
          <span className={styles.service_count}>{serviceCount}</span>
        )}
        <span onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <>
              <link
                rel="preload"
                as="image"
                href="/assets/images/upArrow.svg"
              />
              <img src="/assets/images/upArrow.svg" alt="upArrow" />
            </>
          ) : (
            <>
              <link
                rel="preload"
                as="image"
                href="/assets/images/downArrow.svg"
              />

              <img src="/assets/images/downArrow.svg" alt="downArrow" />
            </>
          )}
        </span>
      </div>
      {isExpanded && (
        <div className=" bg-highlight-area">
          {TypeOfServicesOption.map((staticService: string) => {
            const matchingService = serviceNames.find(
              (dynService) =>
                dynService.name.toLowerCase() === staticService.toLowerCase()
            );

            return (
              <Link
                href={matchingService ? matchingService.slug : ""}
                key={staticService}
                onClick={() =>
                  matchingService && handleClose(matchingService.slug)
                }
                className={`${
                  matchingService && router.asPath === matchingService.slug
                    ? "text-primary-blue"
                    : "text-dark-blackOpacity"
                } block pl-8 py-2 font-light text-sm ${
                  matchingService ? "cursor-pointer" : "cursor-not-allowed"
                }`}

                // locale={router.locale}
              >
                {staticService}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const DesktopServicesDropdown: React.FC<
  DesktopServicesDropdownProps
> = ({ serviceNames, setIsServicesHovered, setIsDropdownHovered }) => {
  const router = useRouter();

  const handleDropdownHover = (isHovered: boolean) => {
    setIsDropdownHovered(isHovered);
    if (isHovered) {
      setIsServicesHovered(true);
    }
  };

  const handleDropdownOptionClick = () => {
    setIsServicesHovered(false);
    setIsDropdownHovered(false);
  };

  return (
    <div className={styles.service_dropdown_container}>
      <div className={styles.service_dropdown_inner}>
        <div
          className={styles.service_dropdown_container_item}
          onMouseEnter={() => handleDropdownHover(true)}
          onMouseLeave={() => handleDropdownHover(false)}
        >
          {TypeOfServicesOption.map((staticService: string) => {
            const matchingService = serviceNames.find(
              (dynService) =>
                dynService.name.toLowerCase() === staticService.toLowerCase()
            );

            return (
              <div
                className={styles.service_dropdown_container_item_inner}
                key={staticService}
              >
                <Link
                  href={matchingService ? matchingService.slug : ""}
                  onClick={handleDropdownOptionClick}
                  className={`${
                    matchingService && router.asPath === matchingService.slug
                      ? "text-primary-blue underline underline-offset-8 decoration-2"
                      : "text-dark-blackOpacity"
                  } block py-2  hover:bg-gray-100 ${
                    matchingService ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  locale={router.locale}
                >
                  {staticService}
                </Link>
                {staticService === "Branding" && (
                  <div className={styles.service_dropdown_arrow_icon_container}>
                    <Link
                      href="/services"
                      className={styles.service_dropdown_link_color}
                      onClick={handleDropdownOptionClick}
                    >
                      See all{" "}
                    </Link>{" "}
                    <link
                      rel="preload"
                      as="image"
                      href="/assets/images/right-icon.svg"
                    />
                    <img src="/assets/images/right-icon.svg" alt="right-icon" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
