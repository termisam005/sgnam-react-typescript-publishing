import React, { Fragment, ReactNode } from 'react';
import { useMemo } from "react";
import { useTable, Column } from 'react-table';
import LabelComponent from '../common/LabelComponent';


interface Props{
    tableClass?: string;
    clickList?: ()=>void;
}

const TableMonitoring = ({ tableClass, clickList }:Props) => {

    const columns: Column<{ col1: string; col2: string | number; col3: ReactNode | number }>[] = useMemo(
        () => [
            {
                Header: '구분',
                accessor: 'col1',
            },
            {
                Header: '정상',
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
                col1: '레이더식S교차로',
                col2: '790',
                col3: <LabelComponent className='label_tag grade_color02 fs_13 wauto' txt='1' />,
            },
            {
                col1: '영상식S교차로',
                col2: '790',
                col3: <LabelComponent className='label_tag grade_color02 fs_13 wauto' txt='1' />,
            },
            {
                col1: 'VDS',
                col2: '790',
                col3: 0,
            },
            {
                col1: 'DSRC-RSE',
                col2: '790',
                col3: 0,
            },
            {
                col1: 'VMS',
                col2: '790',
                col3: 0,
            },
            {
                col1: 'CCTV',
                col2: '790',
                col3: 0,
            },
            {
                col1: 'BIT',
                col2: '790',
                col3: 0,
            },
            {
                col1: '서버',
                col2: '790',
                col3: 0,
            },
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
                        <tr {...row.getRowProps()} onClick={clickList}>
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

export default TableMonitoring;