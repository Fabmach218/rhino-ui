import { Box } from '@rhino-ui/components/src/components/box/box';

export default function TextAlign() {
    return (
        <Box display="block">
            <Box display="block" textAlign="left">
                left
            </Box>
            <Box display="block" textAlign="center">
                center
            </Box>
            <Box display="block" textAlign="right">
                right
            </Box>
        </Box>
    )
}