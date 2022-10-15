interface Props {
    headers: Array<string>;
}

export function TableHeader({ headers }: Props): JSX.Element {
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