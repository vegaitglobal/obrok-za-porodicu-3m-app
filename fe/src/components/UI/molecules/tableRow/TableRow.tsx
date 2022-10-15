interface Props {
    item: any;
    columns: Array<string>;
}

const TableRow: React.FC<Props> = ({ item, columns }) => {
    return (
        <tr key={`table-row-${item.id}`}>
            {columns.map((column, columnIndex) => (
                <td key={`table-row-cell-${columnIndex}`} >
                    {typeof item[column] === "string" ? item[column] : item[column] ? "Yes" : "No"}
                </td>
            ))}
        </tr>
    );
}

export default TableRow;