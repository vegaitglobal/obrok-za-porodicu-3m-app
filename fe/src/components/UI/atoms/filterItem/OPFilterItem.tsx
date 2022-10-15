import { useState } from "react";
import { getRandomColor } from "../../../../utils/color";
import classes from "./OPFilterItem.module.scss";

interface IOPFilterItemProps {
  index: number;
  text: string;
  selected?: boolean;
}

const OPFilterItem: React.FC<IOPFilterItemProps> = ({
  index,
  text,
  selected = false,
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const color: string = getRandomColor(index);
  const style = {
    color: color,
    border: `1px solid ${color}`,
  };
  const selectedStyle = {
    backgroundColor: color,
  };

  const selectClickHandler = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={classes["filter-item"]}
      style={isSelected ? selectedStyle : style}
      onClick={selectClickHandler}
    >
      {text}
    </div>
  );
};

export default OPFilterItem;
