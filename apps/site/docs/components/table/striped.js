import { Table } from "@rhino-ui/components/src/components/table/table";

export default function Striped() {
    const columnConfig = [
        { heading: 'ID', dataKey: 'id' },
        { heading: 'Color', dataKey: 'color' },
        { heading: 'Flavor', dataKey: 'flavor' },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: 'vanilla' },
        { id: 2, color: 'blue', flavor: 'chocolate' },
        { id: 3, color: 'green', flavor: 'strawberry' },
        { id: 4, color: 'green', flavor: 'strawberry' },
        { id: 5, color: 'green', flavor: 'strawberry' },
        { id: 6, color: 'green', flavor: 'strawberry' },
        { id: 7, color: 'green', flavor: 'strawberry' },
      ];
      return <Table rowKey="id" columns={columnConfig} rows={tableData} isStriped />;
}