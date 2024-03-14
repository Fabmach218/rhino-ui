import BrowserOnly from '@docusaurus/BrowserOnly';
import { TextLink } from "@rhino-ui/components/src/components/text-link/text-link";
import { BrowserRouter, Link } from "react-router-dom";

export function ReactRouter() {
    return (
        <BrowserOnly>
          {() => 
            <BrowserRouter>
              <Link to="/" component={TextLink}>
                Click me!
              </Link>
          </BrowserRouter>
          }
        </BrowserOnly>
      );
}

export function AdditionalAttributes() {
    return (
        <TextLink href="http://ux.rhinolabs.agency" target="_blank">
          I will open in a new tab
        </TextLink>
      );
}

export function LinkProps() {
    return (
        <BrowserOnly>
          {() =>
            <BrowserRouter>
                <Link to="/" replace component={TextLink}>
                  I will replace the current history entry
                </Link>
            </BrowserRouter>
          }
        </BrowserOnly>
      );
}

export function InsideParagraph() {
    return (
        <p>
          This is a longish paragraph. Even though it says nothing of value, it does contain a link
          so that's exciting! Can you find{' '}
          <TextLink href="https://ux.rhinolabs.agency">the link</TextLink> that's in here?
        </p>
      );
}

export function InheritedFontSize() {
    return (
        <p className="font-size-sm">
          The link component will inherit your container's font size so you can place it anywhere
          and it should fit in just fine. Here is{' '}
          <TextLink href="https://ux.rhinolabs.agency">that link</TextLink> again but inheriting a small
          font-size.
        </p>
      );
}

export function ColorVariations() {
    return (
        <p>
          We've got two variations if you want to communicate that a certain link may do something
          harmful, use the{' '}
          <TextLink href="https://ux.rhinolabs.agency" variant="danger">
            danger
          </TextLink>{' '}
          style. Otherwise go with the default{' '}
          <TextLink href="https://ux.rhinolabs.agency">primary</TextLink>.
        </p>
      );
}

export function DesignTokens() {
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