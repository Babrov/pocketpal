import { Card, Title,Text, Flex, BadgeDelta, Metric, BarChart } from '@tremor/react';
import ActivityTable from '../components/activity-table';

export const dynamic = 'force-dynamic';

const chartdata = [
  {
    name: "Groceries",
    Amount: 2488,
  },
  {
    name: "Gas",
    Amount: 1445,
  },
  {
    name: "Restaurants",
    Amount: 743,
  },
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


export default async function Page() {
  return (
    <main className="flex flex-col p-4 md:p-10 mx-auto max-w-7xl gap-5">
      <Title>Last 7 Days</Title>
      <Card className="max-w-sm">
        <Flex justifyContent="between" alignItems="center">
          <Text>Income</Text>
          <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
            +12.3%
          </BadgeDelta>
        </Flex>
        <Metric>$ 2000</Metric>
      </Card>

      <Card className="max-w-sm">
        <Flex justifyContent="between" alignItems="center">
          <Text>Expenses</Text>
          <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
            +12.3%
          </BadgeDelta>
        </Flex>
        <Metric>$ 1000</Metric>
      </Card>
      <Card>
        <Title>Recent</Title>
        <ActivityTable operations={tableData} />
      </Card>
      <Title></Title>
      <Card>
        <Title>Categories</Title>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="name"
          categories={["Amount"]}
          colors={["blue"]}
          yAxisWidth={48}
        />
      </Card>
    </main>
  );
}
