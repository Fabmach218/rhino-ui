import { useState } from 'react';
import { Pagination } from "@rhino-ui/components/src/components/pagination/pagination";

export default function Default() {
    const [activePage, setActivePage] = useState(1);
      return (
        <Pagination
          activePage={activePage}
          itemsPerPage={20}
          onChange={setActivePage}
          totalItemsCount={87}
          numberOfPagesDisplayed={0}
        />
      );
}