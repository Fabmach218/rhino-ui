export default function DesignTokens() {
    const tokens = {
        '--date-picker-font-color': '--color-brand-dark-500',
        '--date-picker-font-size': '--size-font-sm',
        '--date-picker-background-color': '--color-brand-white-500',
        '--date-picker-border-radius': '--size-border-radius-sm',
        '--date-picker-item-background-color-selected': '--color-brand-primary-500',
        '--date-picker-item-background-color-selected-hover': '--color-brand-primary-600',
        '--date-picker-item-background-color-hover': '--color-brand-primary-50',
        '--date-picker-navigation-icon-color': '--color-brand-grey-300',
        '--date-picker-navigation-icon-color-hover': '--color-brand-grey-500',
        '--date-picker-navigation-icon-color-disabled-hover': '--color-brand-grey-50',
        '--date-picker-item-border-radius': '--size-border-radius-lg',
        '--date-picker-item-background-color-in-range': '--color-brand-primary-500',
        '--date-picker-item-font-color-disabled': '--color-brand-grey-100',
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