import { useState, useEffect } from 'react';
import { Table } from "@rhino-ui/components/src/components/table/table";

export default function SortableWithDefaultSortedColumn() {
    const sortDescending = (arrOfObj, key) =>
        [...arrOfObj].sort((a, b) => (b[key] > a[key] ? 1 : -1));
      const sortAscending = (arrOfObj, key) =>
        [...arrOfObj].sort((a, b) => (a[key] > b[key] ? 1 : -1));
      const getNewSortDirection = (event, currentSortedColumn) => {
        if (
          event.sortedKey === currentSortedColumn.dataKey &&
          currentSortedColumn.sortDirection === 'ascending'
        )
          return 'descending';
        return 'ascending';
      };
      const initialData = [
        { id: 1, color: 'red', flavor: 'vanilla' },
        { id: 2, color: 'green', flavor: 'strawberry' },
        { id: 3, color: 'blue', flavor: 'chocolate' },
      ];
      const [sortedColumn, setSortedColumn] = useState({
        dataKey: 'color',
        sortDirection: 'descending',
      });
      const [tableData, setTableData] = useState([
        ...(sortedColumn.sortDirecton === 'ascending'
          ? sortAscending(initialData, sortedColumn.dataKey)
          : sortDescending(initialData, sortedColumn.dataKey)),
      ]);
      const handleSort = event => {
        const newSortDirection = getNewSortDirection(event, sortedColumn);
        setSortedColumn({
          dataKey: event.sortedKey,
          sortDirection: newSortDirection,
        });
      };
      useEffect(() => {
        if (sortedColumn.dataKey && sortedColumn.sortDirection) {
          const sortedData =
            sortedColumn.sortDirection === 'ascending'
              ? sortAscending(tableData, sortedColumn.dataKey)
              : sortDescending(tableData, sortedColumn.dataKey);
          setTableData(sortedData);
        }
      }, [sortedColumn]);
      const columnConfig = [
        { heading: 'ID', dataKey: 'id', isSortable: true },
        { heading: 'Color', dataKey: 'color', isSortable: true },
        { heading: 'Flavor', dataKey: 'flavor', isSortable: true },
      ];
      return (
        <Table
          rowKey="id"
          columns={columnConfig}
          rows={tableData}
          sortedColumn={sortedColumn}
          onSort={handleSort}
        />
      );
}