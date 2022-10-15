import classes from "./CardItem.module.scss";

interface ICardItemProps {
  id: number;
  type: string;
  title: string;
  status: string;
  shortDescription: string;
  imageUrl?: string;
}

const CardItem: React.FC<ICardItemProps> = ({
  id,
  type,
  title,
  status,
  shortDescription,
  imageUrl,
}) => {
  return <div className={classes["card-item-wrapper"]}>CardItem</div>;
};

export default CardItem;
