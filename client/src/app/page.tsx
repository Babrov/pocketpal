import { BadgeDelta, BarChart, Card, Flex, Metric, Text, Title } from '@tremor/react';
import Link from 'next/link';

import ActivityTable from '../components/activity-table';

export const dynamic = 'force-dynamic';

const chartdata = [
  {
    name: 'Groceries',
    Amount: 2488
  },
  {
    name: 'Gas',
    Amount: 1445
  },
  {
    name: 'Restaurants',
    Amount: 743
  }
];

const tableData = [
  {
    id: '1',
    type: 'expense',
    amount: 100,
    createdAt: new Date(),
    category: 'Groceries'
  },
  {
    id: '2',
    type: 'expense',
    amount: 100,
    createdAt: new Date(),
    category: 'Groceries'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  }
];

export default async function Page(): Promise<JSX.Element> {
  return (
    <div className="flex flex-col mx-auto max-w-6xl gap-5">
      <Title>Last 7 Days</Title>
      <div className="flex flex-col md:flex-row gap-5">
        <Card className="max-w-sm">
          <Link href="/budget">
            <Flex alignItems="center" justifyContent="between">
              <Text>Income</Text>
              <BadgeDelta deltaType="moderateIncrease" isIncreasePositive size="xs">
                +12.3%
              </BadgeDelta>
            </Flex>
            <Metric>$ 2000</Metric>
          </Link>
        </Card>

        <Card className="max-w-sm">
          <Link href="/budget">
            <Flex alignItems="center" justifyContent="between">
              <Text>Expenses</Text>
              <BadgeDelta deltaType="moderateIncrease" isIncreasePositive size="xs">
                +12.3%
              </BadgeDelta>
            </Flex>
            <Metric>$ 1000</Metric>
          </Link>
        </Card>
      </div>
      <ActivityTable operations={tableData} />

      <Card>
        <Link href="/categories">
          <Title>Categories</Title>
        </Link>
        <BarChart categories={['Amount']} className="mt-6" colors={['blue']} data={chartdata} index="name" yAxisWidth={48} />
      </Card>
    </div>
  );
}
