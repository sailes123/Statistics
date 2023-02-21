import React from 'react';
import './overall.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const Overall = () => {
  return (
    <div className='overAll'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Particular</TableCell>
            <TableCell>Subject 1</TableCell>
            <TableCell>Subject 2</TableCell>
            <TableCell>Subject 3</TableCell>
            <TableCell>Subject 4</TableCell>
            <TableCell>Subject 5</TableCell>
            <TableCell>Subject 6</TableCell>    
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow>
                <TableCell>Average</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>Max</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>Min</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
              <TableRow>
                <TableCell>Mid</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
                <TableCell></TableCell> 
              </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default Overall;