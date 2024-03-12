import { Table } from "@rhino-ui/components/src/components/table/table";

export default function CustomCellClasses() {
    const columnConfig = [
        {
          heading: 'with cellClassName',
          dataKey: 'id',
          cellClassName:
            'background-color-secondary-lightest',
        },
        {
          heading: 'With headerClassName',
          dataKey: 'color',
        },
        { heading: 'Flavor', dataKey: 'flavor' },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: 'vanilla' },
        { id: 2, color: 'blue', flavor: 'chocolate' },
        { id: 3, color: 'green', flavor: 'strawberry' },
      ];
      return <Table rowKey="id" columns={columnConfig} rows={tableData} />;
}