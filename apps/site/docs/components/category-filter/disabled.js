import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { CategoryFilter } from '@rhino-ui/components/src/components/category-filter/category-filter';

export default function Disabled() {
    const [isSelected, setSelected] = useState(false);
      return (
        <Box direction="row" gap="sm">
          <CategoryFilter isSelected={false} isDisabled>
            Unselected
          </CategoryFilter>
          <CategoryFilter isSelected={true} isDisabled>
            Selected
          </CategoryFilter>
        </Box>
      );
}