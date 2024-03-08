export default function DesignTokens() {
    const tokens = {
        '--card-background-color': '--color-brand-white-500',
        '--card-border-radius': '--size-border-radius-md',
        '--card-box-shadow': '--size-box-shadow-sm',
        '--card-subdued-background-color': '--color-brand-grey-50',
        '--card-section-border-color': '--color-brand-grey-100',
        '--card-section-subdued-border-color': '--color-brand-grey-100',
        '--card-footer-background-color': '--color-brand-grey-50',
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