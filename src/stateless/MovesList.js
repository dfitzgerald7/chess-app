import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const MoveList = props => {
  return (
  <div style={{ height: "1000px", overflow: "auto"}} >
    <Table className="MoveList" style={{height: 10}}>
      <TableHead>
        <TableRow>
          <TableCell>Move List </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.moves.map((move, index) => (
          <TableRow key={index}>
            <TableCell align="right">{index+1}. {move}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default MoveList
