import classes from "./OPCarditemList.module.scss";
import OPCardItem from "../../molecules/cardItem/OPCardItem";
import { VolunteerActionModel } from "../../../../models/VolunteerActionModel";
import { NewsModel } from "../../../../models/NewsModel";

interface IOPCardItemListProps {
  items: VolunteerActionModel[] | NewsModel[];
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
            id={item.id ?? 0}
            type={(item as VolunteerActionModel).type ? (item as VolunteerActionModel).type.name : ""}
            title={item.title}
            status={(item as VolunteerActionModel).status ? (item as VolunteerActionModel).status.name : ""}
            shortDescription={item.shortDescription}
            imageURL={item.imageURL}
            onClickEdit={onClickEdit}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default OPCarditemList;
