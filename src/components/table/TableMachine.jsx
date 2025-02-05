import React, { Fragment } from 'react';
import { useMemo } from "react";
import { useTable } from 'react-table';

import PagingComponent from '../common/PagingComponent';


const TableMachine = ({ tableClass, onClick }) => {

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
                col1: '야탑4R(북)',
                col2: 'VS_320101',
                col3: <span className="fc_error_code">장애</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
            },
            {
                col1: '야탑4R(동)',
                col2: 'VS_320102',
                col3: <span className="fc_success">정상</span>,
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
            <div className='mclist_top m-b-12'>
                <dl className='mclist_dl'>
                    <dt>장애</dt>
                    <dd>
                        <p className='mclist_box obstacle'>
                            <span className='count'>1</span>
                        </p>
                    </dd>
                </dl>
                <dl className='mclist_dl'>
                    <dt>정상 작동</dt>
                    <dd>
                        <p className='mclist_box'>
                            <span className='count'>790</span>
                        </p>
                    </dd>
                </dl>
            </div>
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
                        <tr {...row.getRowProps()} onClick={onClick}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                        </tr>
                    );
                    })}
                </tbody>
            </table>
            <div className='p-t-12'>
                <div className='paging_space'>
                    <PagingComponent />
                </div>
            </div>
        </Fragment>
    );
};

export default TableMachine;