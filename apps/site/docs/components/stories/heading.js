import { Heading } from '@rhino-ui/components/src/components/heading/heading';
import { FONT_COLOR_OPTIONS, FONT_SIZE_OPTIONS } from "@rhino-ui/components/src/lib";
import { v4 as uuid } from 'uuid';

export function Levels() {
    return (
        <>
            <Heading as="h1">h1 Heading</Heading>
            <Heading as="h2">h2 Heading</Heading>
            <Heading as="h3">h3 Heading</Heading>
            <Heading as="h4">h4 Heading</Heading>
            <Heading as="h5">h5 Heading</Heading>
            <Heading as="h6">h6 Heading</Heading>
        </>
    )
}

export function Sizes() {
    return (
        <>
            {[...FONT_SIZE_OPTIONS].reverse().map(fontSize => (
                <Heading as="h3" size={fontSize} key={uuid()}>
                {`Size ${fontSize}`}
                </Heading>
            ))}
        </>
    )
}

export function ResponsiveSizes() {
    return (
        <Heading
            as="h3"
            size={{ base: 'sm', tablet: 'lg', desktop: 'xl', hd: '3xl' }}
        >
            Leading the world towards a clean energy future
        </Heading>
    )
}

export function Colors() {
    return (
        <>
            {FONT_COLOR_OPTIONS.map(variant => (
                <Heading as="h3" variant={variant} key={uuid()}>
                    {variant}
                </Heading>
            ))}
        </>
    )
}

export function DesignTokens() {
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