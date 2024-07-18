import Headers from '@/components/ui/Headers';
import {
  columns,
  TableData,
} from '@/components/volunteersComponents/patients/columns';
import { DataTable } from '@/components/volunteersComponents/patients/dataTable';

async function Data(): Promise<TableData[]> {
  return new Array(10).fill(null).map(() => ({
    patient: 'musab sofare',
    date_of_birth: '1998/1/1',
    program: 'Chat Session',
    status: 'success',
  }));
}

export default async function PatientsPage() {
  const data = await Data();
  return (
    <section>
      <Headers>Lorem</Headers>
      <div className="mt-8">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
