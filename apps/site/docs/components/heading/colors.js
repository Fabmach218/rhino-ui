import { Heading } from "@rhino-ui/components/src/components/heading/heading";
import { FONT_COLOR_OPTIONS } from "@rhino-ui/components/src/lib";
import { v4 as uuid } from 'uuid';

export default function Colors() {
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