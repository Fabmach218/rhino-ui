export default function DesignTokens() {
    const tokens = {
        '--alert-default-background-color': '--color-brand-grey-100',
        '--alert-default-font-color': '--color-brand-grey-600',
        '--alert-default-icon-color': '--color-brand-grey-600',
        '--alert-default-border-color': '--color-brand-grey-200',
        '--alert-info-background-color': '--color-brand-info-50',
        '--alert-info-font-color': '--color-brand-grey-600',
        '--alert-info-icon-color': '--color-brand-info-500',
        '--alert-info-border-color': '--color-brand-info-200',
        '--alert-success-background-color': '--color-brand-success-50',
        '--alert-success-font-color': '--color-brand-grey-600',
        '--alert-success-icon-color': '--color-brand-success-500',
        '--alert-success-border-color': '--color-brand-success-200',
        '--alert-warning-background-color': '--color-brand-warning-50',
        '--alert-warning-font-color': '--color-brand-grey-600',
        '--alert-warning-icon-color': '--color-brand-warning-500',
        '--alert-warning-border-color': '--color-brand-warning-200',
        '--alert-danger-background-color': '--color-brand-danger-50',
        '--alert-danger-font-color': '--color-brand-grey-600',
        '--alert-danger-icon-color': '--color-brand-danger-500',
        '--alert-danger-border-color': '--color-brand-danger-200',
        '--alert-border-width': '--size-border-xs',
        '--alert-border-color': 'transparent',
        '--alert-box-shadow': '--size-box-shadow-0',
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