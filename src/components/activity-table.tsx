import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface OperationInterface {
  id: string;
  type: string;
  amount: number;
  createdAt: Date;
  category: string;
}

interface Props {
  operations: OperationInterface[]
}

export default function ActivityTable({operations}:Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {operations.map((operation) => (
          <TableRow key={operation.id}>
            <TableCell>{operation.type}</TableCell>
            <TableCell>
              <Text>{operation.amount}</Text>
            </TableCell>
            <TableCell>
              <Text>{operation.category}</Text>
            </TableCell>
            <TableCell>
              <Text>{operation.createdAt.toString()}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
