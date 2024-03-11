import { Box } from '@rhino-ui/components/src/components/box/box';
import { Duration } from '@rhino-ui/components/src/components/duration/duration';

export default function Rounding() {
    return (
        <Box gap="xs">
            <p>Up: <Duration milliseconds={60001} roundUp={true} /> </p>
            <p>Down: <Duration milliseconds={60001} roundUp={false} /> </p>
        </Box>
    )
}