import { Space, Table, Tag } from 'antd';
import React from 'react';
const { Column, ColumnGroup } = Table;

const ExamTable = () => {
    const data = [
        {
          key: '1',
          firstName: 'Exam1',
          lastName: 10,
          age:15,
          address: 10,
          second: 17,
          last: 35,
        },
        {
          key: '1',
          firstName: 'Exam2',
          lastName: 5,
          age:15,
          address: 25,
          second: 27,
          last: 30,
        },
        {
          key: '1',
          firstName: 'Exam3',
          lastName: 10,
          age:15,
          address: 10,
          second: 17,
          last: 35,
        },
        {
          key: '1',
          firstName: 'Exam4',
          lastName: 5,
          age:15,
          address: 25,
          second: 27,
          last: 30,
        },
        {
          key: '1',
          firstName: 'Exam5',
          lastName: 10,
          age:15,
          address: 10,
          second: 17,
          last: 35,
        },
        {
          key: '1',
          firstName: 'Exam6',
          lastName: 5,
          age:15,
          address: 25,
          second: 27,
          last: 30,
        },
        {
          key: '1',
          firstName: 'Exam7',
          lastName: 10,
          age:15,
          address: 10,
          second: 17,
          last: 35,
        },
        {
          key: '1',
          firstName: 'Exam8',
          lastName: 5,
          age:15,
          address: 25,
          second: 27,
          last: 30,
        },
        {
          key: '1',
          firstName: 'Exam9',
          lastName: 10,
          age:15,
          address: 10,
          second: 17,
          last: 35,
        },
        {
          key: '1',
          firstName: 'Exam10',
          lastName: 5,
          age:15,
          address: 25,
          second: 27,
          last: 30,
        },
        {
          key: '1',
          firstName: 'Exam11',
          lastName: 10,
          age:15,
          address: 10,
          second: 17,
          last: 35,
        },
        {
          key: '1',
          firstName: 'Exam12',
          lastName: 5,
          age:15,
          address: 25,
          second: 27,
          last: 30,
        },
       
        
      ];
  return (
    <div className='table'>
         <Table dataSource={data}>
      <Column title="Exam" dataIndex="firstName" key="firstName" style={{color:"white",
      background:"black"
    }}/>
      <Column title="0-25" dataIndex="lastName" key="lastName" />
      <Column title="25-50" dataIndex="age" key="age" />
      <Column title="50-75" dataIndex="address" key="address" />
      <Column title="75-100" dataIndex="address" key="address" />
      </Table>
    </div>
  )
}

export default ExamTable;
