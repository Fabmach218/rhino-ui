export default function DesignTokens() {
    const tokens = {
        '--tabs-slider-font-family': '--button-font-family',
        '--tabs-slider-font-weight': '--button-font-weight',
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