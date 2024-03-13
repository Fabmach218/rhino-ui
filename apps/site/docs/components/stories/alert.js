import { useState } from 'react';
import { Alert } from "@rhino-ui/components/src/components/alert/alert";
import { Button } from "@rhino-ui/components/src/components/button/button";
import { Heading } from '@rhino-ui/components/src/components/heading/heading';

export function Variants() {
    const variants = ['default', 'info', 'success', 'warning', 'danger'];
      const message = variant => `
        This is a ${variant} alert. It also has longer text to see what these alerts
        can look like when broken into multiple lines. This one will definitely
        break into multiple lines in most standard screen resolutions.
      `;
      return (
        <>
          {variants.map(variant => (
            <Alert
              message={message(variant)}
              key={variant}
              title={variant.charAt(0).toUpperCase() + variant.slice(1)}
              variant={variant}
              hasIcon
              className="m-bottom-md"
            />
          ))}
        </>
      );
}

export function CustomJsx() {
    const myMessage = (
        <>
          <Heading as="h3" size="xl">
            Oops!
          </Heading>
          <p>Looks like something went wrong.</p>
          <Button size="sm" className="m-top-sm">
            Click this button to fix it!
          </Button>
        </>
      );
      return <Alert message={myMessage} variant="danger" />;
}

export function RenderFunction() {
    const renderMyMessage = () => (
        <>
          <Heading as="h3" size="xl">
            Oops!
          </Heading>
          <p>
            Looks like something went wrong. But I'm using a render function.
          </p>
          <Button size="sm" className="m-top-sm">
            Click this button to fix it!
          </Button>
        </>
      );
      return <Alert render={renderMyMessage} variant="danger" />;
}

export function Closable() {
    const [isAlertTwoShowing, setAlertTwoShowing] = useState(true);
      const [isAlertThreeShowing, setAlertThreeShowing] = useState(true);
      return (
        <>
          <Alert
            title="Won't Close"
            message="Closable, but with no onClose callback so nothing happens when clicked."
            variant="warning"
            isClosable
            className="m-bottom-md"
          />
          {isAlertTwoShowing ? (
            <Alert
              title="Closable"
              message="This one works!"
              variant="info"
              isClosable
              onClose={() => setAlertTwoShowing(false)}
              className="m-bottom-md"
            />
          ) : (
            <div className="m-bottom-md">
              <Button onClick={() => setAlertTwoShowing(true)} size="sm">
                Give me the second alert back!
              </Button>
            </div>
          )}
          {isAlertThreeShowing ? (
            <Alert
              message="With custom close text!"
              variant="info"
              isClosable
              onClose={() => setAlertThreeShowing(false)}
              closeText="Close me!"
            />
          ) : (
            <div className="m-bottom-md">
              <Button onClick={() => setAlertThreeShowing(true)} size="sm">
                Give me the third alert back!
              </Button>
            </div>
          )}
        </>
      );
}

export function CustomTheme() {
    return (
        <>
            <div
                style={{
                    '--color-brand-info-50': '#CFC5E9',
                    '--color-brand-info-500': '#603FB5',
                    '--alert-border-width': '0',
                }}
            >
                <Alert
                    message="Here we've overwritten base token values so that the alert inherits new values."
                    title="Custom Theme"
                    variant="info"
                    hasIcon
                    className="m-bottom-md"
                />
            </div>
            <div
            style={{
                '--alert-info-font-color': '#603FB5',
                '--alert-info-background-color': 'white',
                '--alert-info-icon-color': '#603FB5',
                '--alert-border-width': 'var(--size-border-xs)',
                '--alert-info-border-color': 'var(--alert-info-icon-color)',
            }}
            >
                <Alert
                    message="Here we've overwritten ONLY the values for the 'info' alert variant so other components will be unaffected"
                    title="Custom Theme"
                    variant="info"
                    hasIcon
                    className="m-bottom-md"
                />
                <Alert
                    message="An alert that uses default token values"
                    variant="warning"
                    title="Not Themed"
                    hasIcon
                />
            </div>
        </>
    )
}

export function DesignTokens() {
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