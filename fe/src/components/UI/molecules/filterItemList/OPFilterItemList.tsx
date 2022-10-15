import OPFilterItem from "../../atoms/filterItem/OPFilterItem";

import classes from "./OPFilterItemList.module.scss";

const ACTION_TYPES = [
  {
    id: 1,
    name: "Novac",
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 2,
    name: "Odeća i obuća",
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 3,
    name: "Hrana",
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 4,
    name: "Rodjendani",
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 5,
    name: "Ostalo",
    hasPickup: true,
    hasPayment: false,
  },
];

const OPFilterItemList = () => {
  return (
    <div className={classes["filter-item-list-wrapper"]}>
      {ACTION_TYPES.map((type) => (
        <OPFilterItem key={type.id} index={type.id} text={type.name} />
      ))}
    </div>
  );
};

export default OPFilterItemList;
