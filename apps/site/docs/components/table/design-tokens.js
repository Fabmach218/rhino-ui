export default function DesignTokens() {
    const tokens = {
        'table-border-color': '--color-brand-grey-100',
        'table-border-width': '--size-border-xs',
        'table-background-color': '--color-brand-white-500',
        'table-font-color': '--color-brand-grey-600',
        'table-font-size': '--size-font-sm',
        'table-padding-horizontal': '--size-spacing-lg',
        'table-padding-vertical': '--size-spacing-md',
        'table-compact-padding-horizontal': '--size-spacing-xs',
        'table-compact-padding-vertical': '--size-spacing-xs',
        'table-header-background-color': '--color-brand-white-500',
        'table-header-font-size': '--size-font-xs',
        'table-header-font-color': '--color-brand-grey-600',
        'table-header-font-weight': '--size-font-weight-bold',
        'table-header-sort-icon-spacing': '--size-spacing-xs',
        'table-header-padding-vertical': '--size-spacing-md',
        'table-header-border-width': '--size-border-xs',
        'table-row-hover-background': '--color-brand-grey-50',
        'table-row-striped-background': '--color-brand-grey-50',
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