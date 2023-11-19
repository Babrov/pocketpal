'use client';

import { Button, NumberInput, Select, SelectItem } from '@tremor/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Modal } from './modal';

export default function AddModal(): JSX.Element | null {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOpen = searchParams.has('add');

  const handleClose = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('add');
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return <Modal isOpen={isOpen} onClose={handleClose}>
    <div className="flex flex-col gap-10">
      <h2 className='text-2xl font-semibold mb-4'>New Expense</h2>

      <div className="flex flex-col gap-5">
      <Select>
        <SelectItem value="1">
          Groceries
        </SelectItem>
        <SelectItem value="2">
          Restaurants
        </SelectItem>
        <SelectItem value="3">
          Gas
        </SelectItem>
      </Select>

      <NumberInput placeholder="Amount..." />
      </div>

      <div className='flex gap-3 justify-end'>
        <Button size="md" variant="primary">
          Save
        </Button>
      </div>
    </div>
  </Modal>;
}
