import React, { Fragment } from 'react';
import { useMemo } from "react";
import { useTable, Column } from 'react-table';


interface Props{
    tableClass?: string;
}

const TableCrossInfo = ({ tableClass }:Props) => {

    const columns: Column<{ col1: string; col2: string | number; }>[] = useMemo(
        () => [
            {
                Header: '',
                accessor: 'col1',
            },
            {
                Header: '',
                accessor: 'col2',
            },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                col1: '(5분) 교통량',
                col2: '546 대',
            },
            {
                col1: '(5분) 평균 속도',
                col2: '67km/h',
            },
            {
                col1: '평균 지체시간',
                col2: '25 초',
            },
        ],
        []
    );

    const {
        getTableProps, 
        getTableBodyProps, 
        rows, 
        prepareRow 
    } = useTable({ columns, data });

    return (
        <Fragment>
            <table {...getTableProps} className={tableClass}>
                {/* <thead>
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                    ))}
                </thead> */}
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

export default TableCrossInfo;