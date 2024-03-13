import { TextLink } from "@rhino-ui/components/src/components/text-link/text-link";

export default function ColorVariations() {
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