import { Table } from "@rhino-ui/components/src/components/table/table";

export default function GlobalAlign() {
    const columnConfig = [
        { heading: 'Center Aligned via Column Config', dataKey: 'id', align: 'center' },
        { heading: 'Globally aligned right', dataKey: 'color' },
        { heading: 'Also globally aligned right', dataKey: 'flavor' },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: 'vanilla' },
        { id: 2, color: 'blue', flavor: 'chocolate' },
        { id: 3, color: 'green', flavor: 'strawberry' },
      ];
      return <Table rowKey="id" columns={columnConfig} rows={tableData} align="right" />;
}