import { TextLink } from "@rhino-ui/components/src/components/text-link/text-link";

export default function InsideParagraph() {
    return (
        <p>
          This is a longish paragraph. Even though it says nothing of value, it does contain a link
          so that's exciting! Can you find{' '}
          <TextLink href="https://ux.rhinolabs.agency">the link</TextLink> that's in here?
        </p>
      );
}