interface Props {
    item: any;
    columns: Array<string>;
}

export function TableRow({ item, columns }: Props): JSX.Element {
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