import { NewsModel } from "../../../../models/NewsModel";
import { VolunteerActionModel } from "../../../../models/VolunteerActionModel";
import { getRandomColor } from "../../../../utils/color";
import classes from "./OPCardItem.module.scss";

interface IOPCardItemProps {
  id: number;
  type: string;
  title: string;
  status: string;
  shortDescription: string;
  imageURL?: string;
  onClickEdit: (val: any) => void;
  item: VolunteerActionModel | NewsModel;
}

const OPCardItem: React.FC<IOPCardItemProps> = ({
  id,
  type,
  title,
  status,
  shortDescription,
  imageURL,
  onClickEdit,
  item,
}) => {
  const color: string = getRandomColor(item.id ?? 0);

  const style = {
    backgroundColor: color,
  };

  return (
    <div onClick={() => {onClickEdit(item)}} className={classes["card-item-wrapper"]} style={imageURL && imageURL.length > 0 ? {} : classes["card-item-no-image"]}>
      {imageURL && item.imageURL.length > 0 && <div className={classes["card-image"]} style={{backgroundImage: `url(${imageURL})`}}></div>}
      <div className={classes["card-content-wrapper"]}>
        {type ? <p className={classes["card-content-tag"]} style={style}>
          {type}
        </p> : null}
        <p className={classes["card-content-heading"]}>{title}</p>
        {status ? <div className={classes["card-status-wrapper"]}>
          <p className={classes["card-status-text"]}>Status</p>
          <p className={classes["card-status-value"]}>{status}</p>
        </div> : null}
        <p className={classes["card-content-description"]}>
          {shortDescription}
        </p>
      </div>
    </div>
  );
};

export default OPCardItem;
