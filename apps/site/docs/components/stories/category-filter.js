import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { CategoryFilter } from '@rhino-ui/components/src/components/category-filter/category-filter';

export function Default() {
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

export function Sizes() {
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

export function Disabled() {
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

export function DesignTokens() {
    const tokens = {
        '--category-filter-background-color': 'transparent',
        '--category-filter-background-color-hover': '--color-brand-grey-100',
        '--category-filter-border-color': '--color-brand-grey-100',
        '--category-filter-font-color': '--color-brand-grey-600',
        '--category-filter-font-color-hover': '--color-brand-grey-600',
        '--category-filter-selected-background-color': '--color-brand-primary-500',
        '--category-filter-selected-background-color-hover': '--color-brand-primary-600',
        '--category-filter-selected-font-color': '--color-brand-white-500',
        '--category-filter-selected-font-color-hover': '--color-brand-white-500',
        '--category-filter-box-shadow-focus': '0 0 0 4px --color-brand-grey-200',
        '--category-filter-selected-box-shadow-focus': '0 0 0 4px --color-brand-success-200',
        '--category-filter-border-radius': '--size-border-radius-xl',
        '--category-filter-font-family': '--button-font-family',
        '--category-filter-font-weight': '--button-font-weight',
      };
      return Object.entries(tokens).map(([name, entry], i) => (
        <tr key={i}>
          <td>
            <code>{name}</code>
          </td>
          <td>
            <code>{entry}</code>
          </td>
        </tr>
      ));
}