import { Table } from "@rhino-ui/components/src/components/table/table";

export default function EmptyCellPlaceholder() {
    const columnConfig = [
        { heading: 'ID', dataKey: 'id' },
        { heading: 'Color', dataKey: 'color', emptyCellPlaceholder: '--' },
        { heading: 'Flavor', dataKey: 'flavor' },
        {
          heading: 'Price',
          dataKey: 'price',
          render: cell => (cell ? `$${cell}` : null),
          emptyCellPlaceholder: '$0.00',
        },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: 'vanilla', price: 10 },
        { id: 2, color: '', flavor: 'chocolate', price: 12.21 },
        { id: 3, color: 'green', flavor: 'strawberry', price: 9.24 },
        { id: 4, color: 'blue', flavor: 'rocky road' },
      ];
      return <Table rowKey="id" columns={columnConfig} rows={tableData} />;
}