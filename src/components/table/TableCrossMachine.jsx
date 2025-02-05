import React, { Fragment } from 'react';
import { useMemo } from "react";
import { useTable } from 'react-table';


const TableCrossMachine = ({ tableClass }) => {

    const columns = useMemo(
        () => [
            {
                Header: '기기명',
                accessor: 'col1',
            },
            {
                Header: '기기 ID',
                accessor: 'col2',
            },
            {
                Header: '장애',
                accessor: 'col3',
            },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                col1: '야탑사거리(북)',
                col2: 'VVDS_320101',
                col3: <span className="fc_error_code">장애</span>,
            },
            {
                col1: '야탑사거리(동)',
                col2: 'VVDS_320101',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑사거리(남)',
                col2: 'VVDS_320101',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑사거리(서)',
                col2: 'VVDS_320101',
                col3: <span className="fc_success">정상</span>,
            },
        ],
        []
    );

    const {
        getTableProps, 
        getTableBodyProps,
        headerGroups, 
        rows, 
        prepareRow 
    } = useTable({ columns, data });

    return (
        <Fragment>
            <table {...getTableProps} className={tableClass}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </Fragment>
    );
};

export default TableCrossMachine;