'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TableData = {
  patient: string;
  date_of_birth: string;
  program: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
};

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: 'patient',
    header: 'Patient',
  },
  {
    accessorKey: 'date_of_birth',
    header: 'Date of Birth',
  },
  {
    accessorKey: 'program',
    header: 'Program',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];
