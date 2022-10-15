interface Props {
    headers: Array<string>;
}

const TableHeader: React.FC<Props> = ({ headers }) => {
    return (
        <tr>
            {headers.map((header, headerIndex) => (
                <th key={`table-head-cell-${headerIndex}`}>
                    {header}
                </th>
            ))}
        </tr>
    );
}

export default TableHeader;