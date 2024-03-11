export default function DesignTokens() {
    const tokens = {
        '--option-tile-background-color': {
          global: '--form-control-background-color',
          default: '--color-brand-white-base',
        },
        '--option-tile-border-color': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-border-radius': {
          global: '--form-control-size-md-border-radius',
          default: '--size-border-radius-md',
        },
        '--option-tile-font-family': {
          global: '--form-control-font-family',
          default: '--asset-fonts-body',
        },
        '--option-tile-line-height': {
          global: '--form-control-line-height',
          default: '--size-line-height-input',
        },
        '--option-tile-border-color-hover': {
          global: '--form-control-border-color-hover',
          default: '--color-brand-grey-300',
        },
        '--option-tile-background-color-disabled': {
          global: '--form-control-background-color-disabled',
          default: '--color-brand-grey-50',
        },
        '--option-tile-font-color-disabled': {
          global: '--form-control-font-color-disabled',
          default: '--color-brand-grey-300',
        },
        '--option-tile-border-color-disabled': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-font-color-error': {
          global: '--form-control-font-color-error',
          default: '--color-brand-danger-500',
        },
        '--option-tile-border-color-error-hover': {
          global: '--form-control-border-color-hover',
          default: '--color-brand-grey-300',
        },
        '--option-tile-font-color-error-disabled': {
          global: '--form-control-font-color-error-disabled',
          default: '--color-brand-danger-200',
        },
        '--option-tile-border-color-error-disabled-hover': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-background-color-selected': {
          global: '--form-control-background-color-selected',
          default: '--color-brand-primary-50',
        },
        '--option-tile-border-color-selected': {
          global: '--form-control-border-color-selected',
          default: '--color-brand-primary-500',
        },
        '--option-tile-background-color-disabled-selected': {
          global: '--form-control-background-color-disabled',
          default: '--color-brand-grey-50',
        },
        '--option-tile-border-color-disabled-selected': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-border-color-disabled-selected-hover': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-background-color-selected-error': {
          global: '--form-control-background-color-error',
          default: '--color-brand-danger-50',
        },
        '--option-tile-border-color-selected-error': {
          global: '--form-control-border-color-selected-error',
          default: '--color-brand-danger-500',
        },
        '--option-tile-font-color-selected-error': {
          global: 'form-control-font-color-error',
          default: '--color-brand-danger-500',
        },
        '--option-tile-font-color-disabled-selected-error': {
          global: '--form-control-font-color-error-disabled',
          default: 'color-brand-danger-200',
        },
        '--option-tile-border-color-selected-error-hover': {
          global: '--form-control-border-color-selected-error',
          default: 'color-brand-danger-500',
        },
        '--option-tile-border-color-selected-hover': {
          global: '--form-control-border-color-selected-hover',
          default: '--color-brand-primary-500',
        },
      };
      return Object.entries(tokens).map(([name, entry], i) => (
        <tr key={i}>
          <td>
            <code>{name}</code>
          </td>
          <td>
            <code>{entry.global}</code>
          </td>
          <td>
            <code>{entry.default}</code>
          </td>
        </tr>
      ));
}