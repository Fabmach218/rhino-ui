export default function DesignTokens() {
    const tokens = {
        '--heading-font-family': '--asset-fonts-brand',
        '--heading-font-weight': '--size-font-weight-black',
        '--heading-line-height': '--size-line-height-heading',
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