import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { CategoryFilter } from '@rhino-ui/components/src/components/category-filter/category-filter';

export default function Default() {
    const [isSelected, setIsSelected] = useState({
        chocolate: false,
        vanilla: true,
        strawberry: false,
      });
      const handleSelect = selectedKey => {
        setIsSelected(prevIsSelected => ({
          ...prevIsSelected,
          [selectedKey]: !prevIsSelected[selectedKey],
        }));
      };
      return (
        <Box direction="row" gap="xs">
          <CategoryFilter
            isSelected={isSelected.chocolate}
            onClick={() => handleSelect('chocolate')}
          >
            chocolate
          </CategoryFilter>
          <CategoryFilter
            isSelected={isSelected.vanilla}
            onClick={() => handleSelect('vanilla')}
          >
            vanilla
          </CategoryFilter>
          <CategoryFilter
            isSelected={isSelected.strawberry}
            onClick={() => handleSelect('strawberry')}
          >
            strawberry
          </CategoryFilter>
        </Box>
      );
}