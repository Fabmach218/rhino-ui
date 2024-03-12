import { useState } from 'react';
import { Pagination } from "@rhino-ui/components/src/components/pagination/pagination";

export default function PageNumbers() {
    const [activePage, setActivePage] = useState(1);
      return (
        <Pagination
          activePage={activePage}
          itemsPerPage={20}
          onChange={setActivePage}
          totalItemsCount={1000}
          isCompact
          arePagesVisible
          numberOfPagesDisplayed={3}
        />
      );
}