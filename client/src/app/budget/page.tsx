import { AreaChart, Button, Card, DateRangePicker, Flex, Tab, TabGroup, TabList, TabPanel, TabPanels, Title } from '@tremor/react';
import ActivityTable from '../../components/activity-table';

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
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  },
  {
    id: '3',
    type: 'income',
    amount: 100,
    createdAt: new Date(),
    category: 'Job'
  }
];

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

export default function BudgetPage() {
  return (
    <div className='flex flex-col mx-auto max-w-7xl gap-5'>
      <Flex justifyContent={'between'} className={'gap-5'}>
        <DateRangePicker className='mx-auto' enableYearNavigation />
        <Button>Filter</Button>
      </Flex>
      <TabGroup>
        <TabList className='mt-8'>
          <Tab>Table</Tab>
          <Tab>Analytics</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ActivityTable operations={tableData} />
          </TabPanel>
          <TabPanel>
            <Card>
              <Title>Newsletter revenue over time (USD)</Title>
              <AreaChart
                className="h-72 mt-4"
                data={chartdata}
                index="date"
                categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                colors={["indigo", "cyan"]}
              />
            </Card>
          </TabPanel>
        </TabPanels>
      </TabGroup>


    </div>
  );
}