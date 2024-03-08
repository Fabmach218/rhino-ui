export default function DesignTokens() {
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