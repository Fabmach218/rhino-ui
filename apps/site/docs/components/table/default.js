import { Table } from "@rhino-ui/components/src/components/table/table";

export default function Default() {
    const columnConfig = [
        {
          heading: 'Customer',
          dataKey: 'customerInfo',
          render: (cell, row) => (
            <div>
              <div>{row.name}</div>
              <div className="font-color-grey">{row.email}</div>
            </div>
          ),
        },
        { heading: 'phone', dataKey: 'phone', width: 125 },
        { heading: 'plan', dataKey: 'plan', width: 125 },
        { heading: 'status', dataKey: 'status', width: 125 },
      ];
      const tableData = [
        {
          status: 'lead captured',
          name: 'John Smith',
          email: 'john@rhinolabs.agency',
          phone: '555 555-5555',
          plan: 'standard',
        },
        {
          status: 'proposal in progress',
          name: 'Jill Sanchez',
          email: 'jill@rhinolabs.agency',
          phone: '555 555-5555',
          plan: 'premium',
        },
        {
          status: 'PTO',
          name: 'Jin Lee',
          email: 'jin@rhinolabs.agency',
          phone: '555 555-5555',
          plan: 'standard',
        },
      ];
      return <Table rowKey="id" columns={columnConfig} rows={tableData} />;
}