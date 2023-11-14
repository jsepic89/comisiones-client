const TableHeaders = ({ data }) => {

    const headers = Object.keys(data[0] ?? {});

    const formatHeader = (header) => {
        const formattedHeader = header.replace(/_/g, ' ');
        return formattedHeader.charAt(0).toUpperCase() + formattedHeader.slice(1);
    };
    
    return headers.map((header) => {
        const formattedHeader = formatHeader(header)
        return (
            <th className="border rounded-md p-2 border-separate bg-slate-300" key={header}>
                {formattedHeader}
            </th>
        )
    })
}

export default TableHeaders