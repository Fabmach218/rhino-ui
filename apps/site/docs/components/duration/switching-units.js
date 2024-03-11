import { Box } from '@rhino-ui/components/src/components/box/box';
import { Duration } from '@rhino-ui/components/src/components/duration/duration';

export default function SwitchingUnits() {
    return (
        <Box gap="xs">
            <Duration milliseconds={3600000} displayHours={7200000} />
            <Duration milliseconds={3600000} displayHours={3600000} /> 
        </Box>
    )
}