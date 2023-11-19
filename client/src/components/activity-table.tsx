import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from '@tremor/react';
import Image from 'next/image';

import MinusIcon from '../assets/minus-circle.svg';
import PlusIcon from '../assets/plus-circle.svg';

interface OperationInterface {
  id: string;
  type: string;
  amount: number;
  createdAt: Date;
  category: string;
}

interface Props {
  readonly operations: OperationInterface[];
}

export default function ActivityTable({ operations }: Props) {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell />
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operations.map(operation => (
            <TableRow key={operation.id}>
              <TableCell className="w-50 w-min-50">
                {operation.type === 'expense' ? (
                  <Image alt="minus-icon" className="svg:fill-amber-700" height={20} src={MinusIcon} width={20} />
                ) : (
                  <Image alt="plus-icon" height={20} src={PlusIcon} width={20} />
                )}
              </TableCell>
              <TableCell>
                <Text>{operation.amount}</Text>
              </TableCell>
              <TableCell>
                <Text>{operation.category}</Text>
              </TableCell>
              <TableCell>
                <Text>{operation.createdAt.toLocaleString()}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
