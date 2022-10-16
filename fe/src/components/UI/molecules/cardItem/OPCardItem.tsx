import classes from "./OPCardItem.module.scss";

interface IOPCardItemProps {
  id: number;
  type: string;
  title: string;
  status: string;
  shortDescription: string;
  imageUrl?: string;
}

const OPCardItem: React.FC<IOPCardItemProps> = ({
  id,
  type,
  title,
  status,
  shortDescription,
  imageUrl,
}) => {
  return (
    <div className={classes["card-item-wrapper"]}>
      {imageUrl && imageUrl.length > 0 && <div style={{backgroundImage: `url(${imageUrl})`, width: "100%", height: "250px"}}></div>}
      <p>{type}</p>
      <p>{title}</p>
      <p>Status {status}</p>
      <p>{shortDescription}</p>
    </div>);
};

export default OPCardItem;
