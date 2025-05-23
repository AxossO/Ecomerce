"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { enter, lineEnter } from "../animation";

const Categories = () => {
  const [isHover, setIsHovered] = useState(true);
  const categories = [
    {
      name: "Video Games",
      sections: ["PlayStation 5 Games", "PlayStation 4 Games", "Xbox Games"],
    },
    {
      name: "Consoles & Hardware",
      sections: ["PS5 Consoles", "PS4 Consoles", "Xbox Consoles"],
    },
    {
      name: "Accessories",
      sections: ["Controllers", "Headsets", "Charging Docks"],
    },
    {
      name: "Pre-Owned",
      sections: ["Used Games", "Refurbished Consoles"],
    },
    ,
    {
      name: "Pre-Owned",
      sections: ["Used Games", "Refurbished Consoles"],
    },
    ,
    {
      name: "Pre-Owned",
      sections: ["Used Games", "Refurbished Consoles"],
    },
    ,
    {
      name: "Pre-Owned",
      sections: ["Used Games", "Refurbished Consoles"],
    },
  ];
  return (
    <motion.div className="bg-nav-bg">
      <div className="Navcontainer">
        <ul className="items-center space-x-2 flex text-sm z-10">
          {categories.map((item, index) => (
            <motion.div
              className="flex space-x-2 relative"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              key={index}
            >
              <li
                className={`items-center cursor-pointer flex relative text-nowrap py-6  ${
                  isHover === index ? "text-blue-600" : ""
                }`}
              >
                {item.name}

                <motion.span
                  className="line"
                  variants={lineEnter}
                  animate={isHover === index ? "show" : "hidden"}
                  initial="hidden"
                ></motion.span>
              </li>
              <motion.div
                variants={enter}
                exit="hidden"
                animate="show"
                initial="hidden"
                className=" flex items-center"
                key={isHover === index ? "chevron-down" : "chevron-up"}
              >
                {isHover === index ? (
                  <motion.div className="flex ">
                    <ChevronDown width={15} />
                    <motion.div className=" flex flex-col ">
                      <motion.ul
                        className="absolute left-0 mt-[46px] space-y-2 bg-nav-nav  w-48 rounded-md text-white "
                        key={index}
                      >
                        {item.sections.map((section, secIndex) => (
                          <motion.li
                            className=" pr-8 py-3 rounded-md pl-4 hover:bg-[#8b8b8b] w-full  cursor-pointer text-nowrap"
                            key={secIndex}
                          >
                            {section}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </motion.div>
                ) : (
                  <ChevronUp width={15} />
                )}
              </motion.div>
            </motion.div>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Categories;
