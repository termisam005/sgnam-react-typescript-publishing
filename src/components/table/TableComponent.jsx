import React, { Fragment } from 'react';
import { useMemo } from "react";
import { useTable } from 'react-table';
import CheckBoxComponent from '../common/CheckBoxComponent';


const TableComponent = () => {

    const columns = useMemo(
        () => [
            {
                Header: '',
                accessor: 'col1',
                Cell: ({ cell: {  } }) => <CheckBoxComponent />,
            },
            {
                Header: 'No.',
                accessor: 'col1',
            },
            {
                Header: '사용자 ID',
                accessor: 'col2',
            },
            {
                Header: '사용자명',
                accessor: 'col3',
            },
            {
                Header: '직위',
                accessor: 'col4',
            },
            {
                Header: '부서',
                accessor: 'col5',
            },
            {
                Header: '직책',
                accessor: 'col6',
            },
            {
                Header: '근무형태',
                accessor: 'col7',
            },
            {
                Header: '최초추가일자',
                accessor: 'col8',
            },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                col1: '1',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '2',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '3',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '4',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '5',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '6',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '7',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '8',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '9',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '10',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '11',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '12',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '13',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '14',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '15',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '16',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '17',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
            },
            {
                col1: '18',
                col2: 'USEROO1',
                col3: '김인천',
                col4: '주무관',
                col5: '교통정보운영과',
                col6: '------',
                col7: '------',
                col8: '2023-01-01',
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
            <table {...getTableProps} className="uni_table01">
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

export default TableComponent;