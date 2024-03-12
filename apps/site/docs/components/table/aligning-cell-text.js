import { Table } from "@rhino-ui/components/src/components/table/table";

export default function AligningCellText() {
    const columnConfig = [
        { heading: 'Right aligned', dataKey: 'id', align: 'right' },
        { heading: 'Center aligned', dataKey: 'color', align: 'center' },
        { heading: 'Left aligned (default)', dataKey: 'flavor' },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: 'vanilla' },
        { id: 2, color: 'blue', flavor: 'chocolate' },
        { id: 3, color: 'green', flavor: 'strawberry' },
      ];
      return <Table rowKey="id" columns={columnConfig} rows={tableData} />;
}