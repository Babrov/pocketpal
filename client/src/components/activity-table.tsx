import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Card,
  Title
} from '@tremor/react';

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
  operations: OperationInterface[];
}

export default function ActivityTable({ operations }: Props) {
  return (
    <Card>
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
              <TableCell className='w-50 w-min-50'>{operation.type === 'expense' ?
                <Image className='svg:fill-amber-700' height={20} width={20} alt={'minus-icon'} src={MinusIcon} /> :
                <Image height={20} width={20} alt={'plus-icon'} src={PlusIcon} />}</TableCell>
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
