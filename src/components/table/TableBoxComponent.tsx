import React, { Fragment } from 'react';
import { useMemo } from "react";
import { useTable, Column } from 'react-table';
import CheckBoxComponent from '../common/CheckBoxComponent';


interface Props{
    tableClass?: string;
}

const TableBoxComponent = ({ tableClass }:Props) => {

    const columns: Column<{ col1: string; col2: number | string; col3: string; col4: string; }>[]= useMemo(
        () => [
            {
                Header: <CheckBoxComponent />,
                accessor: 'col1',
                Cell: ({ cell: {  } }) => <CheckBoxComponent />,
            },
            {
                Header: '사용자명',
                accessor: 'col2',
            },
            {
                Header: '사용자 ID',
                accessor: 'col3',
            },
            {
                Header: '직위',
                accessor: 'col4',
            }
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                col1: '',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
            },
            {
                col1: '',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
            },
            {
                col1: '',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
            },
            {
                col1: '',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
            },
            {
                col1: '',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
            },
            {
                col1: '',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
            }
        ],
        []
    );

    const {
        getTableProps, //table props
        getTableBodyProps, //table body props
        headerGroups, //헤더들
        rows, //로우 데이터들
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

export default TableBoxComponent;