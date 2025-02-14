import React, { Fragment, ReactNode } from 'react';
import { useMemo } from "react";
import { useTable, Column } from 'react-table';


interface Props{
    tableClass?: string;
}

const TableBitStatus = ({ tableClass }:Props) => {
// Bit 상태 테이블

    const columns: Column<{ col1: ReactNode | number; col2: ReactNode | string; col3: ReactNode | string; }>[] = useMemo(
        () => [
            {
                Header: <p className='w76'>정류장 번호</p>,
                accessor: 'col1',
            },
            {
                Header: <p className='w142'>정류장명</p>,
                accessor: 'col2',
            },
            
            {
                Header: <p className='text_ellipsis w58'>통신장애</p>,
                accessor: 'col3',
            },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className={'text_ellipsis'}>정상</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className={'text_ellipsis'}>정상</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
            },
            {
                col1: <p>121990000</p>,
                col2: <p>주공2단지, 창영초등학교</p>,
                col3: <p className='text_ellipsis fc_error_code'>장애</p>
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
                <caption className="hidden_tag">BIT상태 테이블 리스트</caption>
                <thead>
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()} className="tac">{column.render("Header")}</th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} className='row_type2'>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()} className="tac">{cell.render("Cell")}</td>;
                        })}
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </Fragment>
    );
};

export default TableBitStatus;