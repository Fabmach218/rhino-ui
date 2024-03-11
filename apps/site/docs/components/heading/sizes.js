import { Heading } from "@rhino-ui/components/src/components/heading/heading";
import { FONT_SIZE_OPTIONS } from "@rhino-ui/components/src/lib";
import { v4 as uuid } from 'uuid';

export default function Sizes() {
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