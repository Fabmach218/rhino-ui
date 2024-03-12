import { Table } from "@rhino-ui/components/src/components/table/table";

export default function ScrollableFirstColumnLeft() {
    const containerStyle = {
        borderRadius: '3px',
        border: '1px solid #EEEEEE',
        width: '300px',
        height: '300px',
      };
      const columnConfig = [
        { heading: 'ID', dataKey: 'id', sticky: 'left' },
        { heading: 'Color', dataKey: 'color', width: 300 },
        { heading: 'Flavor', dataKey: 'flavor', width: 100 },
        { heading: 'Brightness', dataKey: 'brightness', width: 150 },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: 'vanilla', brightness: 'light' },
        { id: 2, color: 'blue', flavor: 'chocolate', brightness: 'medium' },
        { id: 3, color: 'green', flavor: 'strawberry', brightness: 'dark' },
        { id: 4, color: 'green', flavor: 'strawberry', brightness: 'dark' },
        { id: 5, color: 'green', flavor: 'strawberry', brightness: 'dark' },
        { id: 6, color: 'green', flavor: 'strawberry', brightness: 'dark' },
        { id: 7, color: 'green', flavor: 'strawberry', brightness: 'dark' },
      ];
      return (
        <div style={containerStyle}>
          <Table
            rowKey="id"
            columns={columnConfig}
            rows={tableData}
            isScrollable={{ x: true, y: true }}
          />
        </div>
      );
}