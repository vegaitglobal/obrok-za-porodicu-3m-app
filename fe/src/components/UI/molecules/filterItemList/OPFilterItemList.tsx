import { VolunteerActionTypeModel } from "../../../../models/VolunteerActionTypeModel";
import OPFilterItem from "../../atoms/filterItem/OPFilterItem";

import classes from "./OPFilterItemList.module.scss";

interface IOPFilterItemListProps {
  filterItems: VolunteerActionTypeModel[];
}

const OPFilterItemList: React.FC<IOPFilterItemListProps> = ({
  filterItems,
}) => {
  return (
    <div className={classes["filter-item-list-wrapper"]}>
      {filterItems.map((type) => (
        <OPFilterItem key={type.id} index={type.id ?? 0} text={type.name} />
      ))}
    </div>
  );
};

export default OPFilterItemList;
