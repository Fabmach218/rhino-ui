import { Button } from "@rhino-ui/components/src/components/button/button";
import { Table } from "@rhino-ui/components/src/components/table/table";

export default function CustomActions() {
    const renderFlavor = (cell, row, index) => {
        const rows = [{ href: cell.href, name: cell.name, id: row.id, index }];
        const columns = [
          { heading: 'Url', dataKey: 'href', render: cell => <a href={cell}>{cell}</a> },
          { heading: 'Name', dataKey: 'name' },
          { heading: 'ID', dataKey: 'id' },
          { heading: 'Index', dataKey: 'index' },
        ];
        return <Table columns={columns} rows={rows} rowKey="id" isCompact />;
      };
      const columnConfig = [
        { heading: 'ID', dataKey: 'id' },
        { heading: 'Color', dataKey: 'color' },
        { heading: 'Based on the cell/row', dataKey: 'flavor', render: renderFlavor },
        { heading: 'Any custom JSX', render: (_args) => <Button>Do anything</Button> },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: { name: 'vanilla', href: 'www.vanilla.com' } },
        { id: 2, color: 'blue', flavor: { name: 'chocolate', href: 'www.chocolate.com' } },
        { id: 3, color: 'green', flavor: { name: 'strawberry', href: 'www.strawberry.com' } },
      ];
      return <Table rowKey="id" columns={columnConfig} rows={tableData} />;
}