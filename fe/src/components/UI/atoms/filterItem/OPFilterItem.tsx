import { useState } from "react";
import { getRandomColor } from "../../../../utils/color";
import classes from "./OPFilterItem.module.scss";
import { useDispatch } from "react-redux";
import {
  addActionTypeIdVolunteerActions,
  removeActionTypeIdVolunteerActions,
} from "../../../../store/actions/volunteerActionsType";

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
  const dispatch = useDispatch();

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
    const isSelectedUpdated = !isSelected;
    setIsSelected(isSelectedUpdated);
    dispatch(
      isSelectedUpdated
        ? addActionTypeIdVolunteerActions(index)
        : removeActionTypeIdVolunteerActions(index)
    );
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
