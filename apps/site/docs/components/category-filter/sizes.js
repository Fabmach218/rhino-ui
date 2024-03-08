import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { CategoryFilter } from '@rhino-ui/components/src/components/category-filter/category-filter';

export default function Sizes() {
    const [isSelected, setIsSelected] = useState({
        xs: false,
        sm: false,
        md: false,
        lg: false,
        responsive: false,
      });
      const handleSelect = selectedKey => {
        setIsSelected(prevIsSelected => ({
          ...prevIsSelected,
          [selectedKey]: !prevIsSelected[selectedKey],
        }));
      };
      return (
        <Box direction="row" gap="sm" wrap>
          <CategoryFilter
            isSelected={isSelected.xs}
            onClick={() => handleSelect('xs')}
            size="xs"
          >
            Extra Small
          </CategoryFilter>
          <CategoryFilter
            isSelected={isSelected.sm}
            onClick={() => handleSelect('sm')}
            size="sm"
          >
            Small
          </CategoryFilter>
          <CategoryFilter
            isSelected={isSelected.md}
            onClick={() => handleSelect('md')}
            size="md"
          >
            Medium
          </CategoryFilter>
          <CategoryFilter
            isSelected={isSelected.lg}
            onClick={() => handleSelect('lg')}
            size="lg"
          >
            Large
          </CategoryFilter>
          <CategoryFilter
            isSelected={isSelected.responsive}
            onClick={() => handleSelect('responsive')}
            size={{ base: 'xs', tablet: 'sm', desktop: 'md', hd: 'lg' }}
          >
            Responsive
          </CategoryFilter>
        </Box>
      );
}