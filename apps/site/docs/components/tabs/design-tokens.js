export default function DesignTokens() {
    const tokens = {
        '--tabs-font-weight': '--size-font-weight-bold',
        '--tabs-font-color-hover': '--color-brand-primary-500',
        '--tabs-selected-border-color': '--color-brand-primary-500',
        '--tabs-selected-font-color': '--color-brand-primary-500',
        '--tabs-selected-font-color-hover': '--color-brand-primary-600',
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