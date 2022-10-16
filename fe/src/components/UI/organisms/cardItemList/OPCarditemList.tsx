import classes from "./OPCarditemList.module.scss";
import OPCardItem from "../../molecules/cardItem/OPCardItem";

const OPCarditemList = () => {
  return (
    <div className={classes["card-list"]}>
      <OPCardItem
        id={1}
        type="Novac"
        title="Akcija prikupljanja sredstava za porodicu Popovic"
        status="Trenutno u toku"
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        imageUrl="https://blog.feedingwestchester.org/hubfs/blog-39-5-facts-about-hungry-children-in-america.jpg"
      />
    </div>
  );
};

export default OPCarditemList;
