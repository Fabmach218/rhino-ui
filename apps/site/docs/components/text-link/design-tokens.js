export default function DesignTokens() {
    const tokens = {
        '--text-link-font-color-primary': '--color-brand-primary-500',
        '--text-link-font-color-primary-hover': '--color-brand-primary-600',
        '--text-link-font-color-danger': '--color-brand-danger-500',
        '--text-link-font-color-danger-hover': '--color-brand-danger-600',
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