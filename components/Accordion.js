// A simple React accordion component example
// https://justacoding.blog/react-accordion-component-example/
import { useState } from "react";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const AccordionItem = ({
  children,
  title,
  subtitle,
  isActive,
  onItemClick,
}) => {
  return (
    <div
      className={"shadow-0 accordionItem !m-0 " + (isActive ? " active" : "")}
    >
      <div
        className="!px-5 bg-white/80 dark:bg-slate-400 accordionTitle transition fre flex justify-between "
        onClick={onItemClick}
      >
        <div className="flex items-center gap-2 h-fit">
          {subtitle && !isActive && (
            <p className="text-xs accordionSubtitle text-slate-700 dark:text-slate-100 nun">
              {subtitle}
            </p>
          )}
          <h3 className=" text-t-bd dark:text-blues-100">{title}</h3>
        </div>
        <span>
          {isActive ? (
            <FaChevronUp className="" />
          ) : (
            <>
              {" "}
              <FaChevronDown className="" />
            </>
          )}
        </span>
      </div>

      <div className=" accordionContent">
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

const HelpAccordion = ({
  items,
  header,
  footer,
  initialActiveItemIndex,
  closeOtherItemsOnClick,
}) => {
  const [activeItemIndexes, setActiveItemIndexes] = useState([
    initialActiveItemIndex || 0,
  ]);

  // Responsible for toggling active item indexes
  // Must also consider whether closeOtherItemsOnClick
  // was passed and react accordingly to that
  const handleItemClick = (index) => {
    if (closeOtherItemsOnClick) {
      setActiveItemIndexes(activeItemIndexes.includes(index) ? [] : [index]);
      return;
    }

    let newActiveItemIndexes = [...activeItemIndexes];
    if (newActiveItemIndexes.includes(index)) {
      newActiveItemIndexes = newActiveItemIndexes.filter(
        (item) => item !== index
      );
    } else {
      newActiveItemIndexes.push(index);
    }
    setActiveItemIndexes(newActiveItemIndexes);
  };

  return (
    <div className="bg-white/80 dark:bg-slate-700 accordion">
      {!!header && <div className="accordionHeader">{header}</div>}
      {items.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            isActive={activeItemIndexes.includes(index)}
            onItemClick={() => handleItemClick(index)}
          >
            {item.content}
          </AccordionItem>
        );
      })}
      {!!footer && <div className="accordionFooter">{footer}</div>}
    </div>
  );
};

export default HelpAccordion;
