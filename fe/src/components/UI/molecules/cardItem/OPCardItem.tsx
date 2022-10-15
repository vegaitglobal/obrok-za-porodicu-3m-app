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
  return <div className={classes["card-item-wrapper"]}>CardItem</div>;
};

export default OPCardItem;
