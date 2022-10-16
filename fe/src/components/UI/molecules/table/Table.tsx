import TableHeader from "../tableHeader/TableHeader";
import TableRow from "../tableRow/TableRow";
import classes from "./Table.module.scss";

interface Props {
  headers: Array<string>;
  data: Array<any>;
  columns: Array<string>;
  deleteHandler: (id: number) => void;
  onClickEdit: (val: any) => void;
}

const Table: React.FC<Props> = ({
  headers,
  data,
  columns,
  deleteHandler,
  onClickEdit,
}) => {
  return (
    <table className={classes}>
      <thead>
        <TableHeader headers={headers} />
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <TableRow
              key={item.id}
              item={item}
              columns={columns}
              deleteHandler={deleteHandler}
              onClickEdit={onClickEdit}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
