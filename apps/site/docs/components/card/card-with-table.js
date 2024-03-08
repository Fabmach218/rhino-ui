import { Card } from "@rhino-ui/components/src/components/card/card";
import { Table } from "@rhino-ui/components/src/components/table/table";

export default function CardWithTable() {
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
      return (
        <Card>
          <Card.Header title="Flavor Table" />
          <Card.Section padding="0">
            <Table rowKey="id" columns={columnConfig} rows={tableData} />
          </Card.Section>
        </Card>
      );
}