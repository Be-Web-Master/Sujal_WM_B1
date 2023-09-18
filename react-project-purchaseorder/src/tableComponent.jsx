function TableComponent({table}) {
    return ( 
        
        <table className="table-container">
            <thead>
                <th>Expiry Date</th>
                <th>Quantity</th>
            </thead>
            <tbody>
                {
                    table.map((elem)=>{
                       return( <tr>
                            <td>{elem.date}</td>
                            <td>{elem.quantity}</td>
                        </tr>
                       )
                    })
                }
            </tbody>
        </table>
    );
}

export default TableComponent;