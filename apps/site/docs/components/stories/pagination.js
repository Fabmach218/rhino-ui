import { useState } from 'react';
import { Pagination } from "@rhino-ui/components/src/components/pagination/pagination";

export function Default() {
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

export function Compact() {
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

export function PageNumbers() {
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