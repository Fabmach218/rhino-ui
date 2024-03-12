import { Table } from "@rhino-ui/components/src/components/table/table";

export default function TruncateOverflow() {
    const columnConfig = [
        { heading: 'ID', dataKey: 'id' },
        { heading: 'Color', dataKey: 'color', width: 100 },
        { heading: 'Flavor', dataKey: 'flavor' },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: 'vanilla' },
        { id: 2, color: 'blue longy long long long', flavor: 'chocolate' },
        { id: 3, color: 'green', flavor: 'strawberry' },
      ];
      return <Table rowKey="id" columns={columnConfig} rows={tableData} truncateOverflow />;
}