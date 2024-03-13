import { TextLink } from "@rhino-ui/components/src/components/text-link/text-link";

export default function InheritedFontSize() {
    return (
        <p className="font-size-sm">
          The link component will inherit your container's font size so you can place it anywhere
          and it should fit in just fine. Here is{' '}
          <TextLink href="https://ux.rhinolabs.agency">that link</TextLink> again but inheriting a small
          font-size.
        </p>
      );
}