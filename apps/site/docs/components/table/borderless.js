import { Table } from "@rhino-ui/components/src/components/table/table";

export default function Borderless() {
    const columnConfig = [
        { heading: 'ID', dataKey: 'id' },
        { heading: 'Color', dataKey: 'color' },
        { heading: 'Flavor', dataKey: 'flavor' },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: 'vanilla' },
        { id: 2, color: 'blue', flavor: 'chocolate' },
        { id: 3, color: 'green', flavor: 'strawberry' },
      ];
      return <Table rowKey="id" columns={columnConfig} rows={tableData} isBorderless />;
}