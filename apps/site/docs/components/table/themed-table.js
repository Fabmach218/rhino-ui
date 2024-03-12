import { Table } from "@rhino-ui/components/src/components/table/table";

export default function ThemedTable() {
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
      return (
        <div style={{
          '--table-border-color': 'var(--color-brand-grey-700)',
          '--table-border-width': 'var(--size-border-md)',
          '--table-background-color': 'var(--color-brand-grey-900)',
          '--table-header-background-color': 'var(--color-brand-grey-900)',
          '--table-font-color': 'var(--color-brand-grey-100)',
          '--table-header-font-color': 'var(--color-brand-grey-100)',
          '--table-header-font-size': 'var(--size-font-lg)',
          '--table-font-size': 'var(--size-font-md)',
          '--table-row-striped-background': 'var(--color-brand-grey-800)',
        }}>
          <Table rowKey="id" columns={columnConfig} rows={tableData} isStriped />
        </div>
      );
}