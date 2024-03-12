import { Table } from "@rhino-ui/components/src/components/table/table";

export default function Column() {
    const codePreviewStyle = {
        padding: '3px 5px',
        borderRadius: '3px',
        border: '1px solid #EEEEEE',
        color: 'rgba(51,51,51,0.9)',
        backgroundColor: '#F8F8F8',
      };
      const columnInterfaceRows = [
        {
          name: 'align',
          type: 'left | right | center',
          description:
            'Text alignment for column cells (including header alignment). Cells will default to left if not defined.',
        },
        {
          name: 'cellClassName',
          type: 'string | (function: (cell, row, rowIndex) => string)',
          description: 'A CSS class to be applied to all cells in the column',
        },
        {
          name: 'dataKey',
          type: 'string',
          description: 'The key in the rows object that matches this column',
        },
        {
          name: 'emptyCellPlaceholder',
          type: 'string | number | undefined',
          description: 'placeholder for empty cells',
        },
        { name: 'heading', type: 'string', description: 'The heading text to be displayed' },
        {
          name: 'headerClassName',
          type: 'string',
          description: 'The CSS class to be applied to the column header cell.',
        },
        {
          name: 'isSortable',
          type: 'boolean',
          description:
            'Whether the column is sortable. Controls displaying the sort arrows and making the column header clickable',
        },
        {
          name: 'key',
          type: 'React.Key',
          description:
            'a custom key to be passed to each column. This gets autogenerated if not supplued',
        },
        {
          name: 'render',
          type: 'function: (cell, row, rowIndex) => ReactNode',
          description: 'Render any custom content based on the cell and row content',
        },
        {
          name: 'sticky',
          type: "enum: 'left', 'right', ",
          description:
            'Whether the column will stick to the left or right side of the table when the table is larger than its parent',
        },
        {
          name: 'truncateOverflow',
          type: 'boolean',
          description:
            'Whether the column content will get truncated (with ellipsis) if it surpasses the fixed-width',
        },
        { name: 'width', type: 'number', description: 'Specify the width of a particular column.' },
      ];
      const columnConfig = [
        { heading: 'Name', dataKey: 'name' },
        {
          heading: 'Type',
          dataKey: 'type',
          render: cell => <code style={codePreviewStyle}>{cell}</code>,
        },
        { heading: 'Description', dataKey: 'description' },
      ];
      return <Table rowKey="name" columns={columnConfig} rows={columnInterfaceRows} />;
}