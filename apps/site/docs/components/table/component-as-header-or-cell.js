import { Badge } from "@rhino-ui/components/src/components/badge/badge";
import { Table } from "@rhino-ui/components/src/components/table/table";

export default function ComponentAsHeaderOrCell() {
    const columnConfig = [
        { heading: 'ID', dataKey: 'id' },
        { heading: 'Color', dataKey: 'color' },
        { heading: <Badge message="Status" />, dataKey: 'status' },
      ];
      const tableData = [
        { id: 1, color: 'red', status: <Badge message="danger" variant="danger" /> },
        { id: 2, color: 'blue', status: <Badge message="info" variant="info" /> },
        { id: 3, color: 'green', status: <Badge message="success" variant="success" /> },
      ];
      return (
        <Table
          rowKey="id"
          columns={columnConfig}
          rows={tableData}
        />
      );
}