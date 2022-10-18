import { getRandomColor } from "../../../../utils/color";
import classes from "./OPCardItem.module.scss";

interface IOPCardItemProps {
  id: number;
  type: string;
  title: string;
  status: string;
  shortDescription: string;
  imageUrl?: string;
  onClickEdit: (val: any) => void;
  item: any;
}

const OPCardItem: React.FC<IOPCardItemProps> = ({
  id,
  type,
  title,
  status,
  shortDescription,
  imageUrl,
  onClickEdit,
  item
}) => {
  const color: string = getRandomColor(id);

  const style = {
    backgroundColor: color,
  };

  return (
    <div onClick={() => {onClickEdit(item)}} className={classes["card-item-wrapper"]} style={imageUrl && imageUrl.length > 0 ? {} : {paddingTop: "42px", minHeight: "261px"}}>
      {imageUrl && imageUrl.length > 0 && <div className={classes["card-image"]} style={{backgroundImage: `url(${imageUrl})`}}></div>}
      <div className={classes["card-content-wrapper"]}>
        <p className={classes["card-content-tag"]} style={style}>
          {type}
        </p>
        <p className={classes["card-content-heading"]}>{title}</p>
        <div className={classes["card-status-wrapper"]}>
          <p className={classes["card-status-text"]}>Status</p>
          <p className={classes["card-status-value"]}>{status}</p>
        </div>
        <p className={classes["card-content-description"]}>
          {shortDescription}
        </p>
      </div>
    </div>
  );
};

export default OPCardItem;
