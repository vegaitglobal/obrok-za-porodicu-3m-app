import classes from "./TableRow.module.scss";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit_icon.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/delete_icon.svg";

interface Props {
  item: any;
  columns: Array<string>;
  deleteHandler: (id: number) => void;
}

const TableRow: React.FC<Props> = ({ item, columns, deleteHandler }) => {
  const onClickHandler = () => {
    deleteHandler(item.id);
  };

  return (
    <tr key={`table-row-${item.id}`}>
      {columns.map((column, columnIndex) => (
        <td key={`table-row-cell-${columnIndex}`}>
          {typeof item[column] === "string" && item[column] !== undefined ? (
            item[column]
          ) : item[column] ? (
            "Yes"
          ) : item[column] === undefined ? (
            <>
              <button className={classes["icon-button"]}>
                <EditIcon width={16} height={16} />
              </button>
              <button
                className={classes["icon-button"]}
                onClick={onClickHandler}
              >
                <DeleteIcon width={16} height={16} />
              </button>
            </>
          ) : (
            "No"
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
