import { useState } from 'react';
import { Pagination } from "@rhino-ui/components/src/components/pagination/pagination";

export default function Compact() {
    const [activePage, setActivePage] = useState(1);
      return (
        <Pagination
          activePage={activePage}
          itemsPerPage={20}
          onChange={setActivePage}
          totalItemsCount={100}
          isCompact
        />
      );
}