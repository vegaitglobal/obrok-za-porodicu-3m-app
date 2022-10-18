import classes from "./OPCarditemList.module.scss";
import OPCardItem from "../../molecules/cardItem/OPCardItem";
import { VolunteerActionModel } from "../../../../models/VolunteerActionModel";

interface IOPCardItemListProps {
  items: VolunteerActionModel[];
  onClickEdit: (val: any) => void;
}

const OPCarditemList: React.FC<IOPCardItemListProps> = ({
  items,
  onClickEdit,
}) => {
  return (
    <div className={classes["card-list"]}>
      {items.map((item) => {
        return (
          <OPCardItem
            id={item.id}
            type={item.type.name}
            title={item.title}
            status={item.status.name}
            shortDescription={item.shortDescription}
            imageUrl={item.imageURL}
            onClickEdit={onClickEdit}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default OPCarditemList;
