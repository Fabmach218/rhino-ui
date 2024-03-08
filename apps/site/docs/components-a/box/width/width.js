import { Box } from '@rhino-ui/components/src/components/box/box';

export default function Width() {
    return (
        <Box background="primary-lightest" gap="xs">
            <Box background="primary-light" width="227px">
                227px
            </Box>
            <Box background="primary-light" width="10rem">
                10rem
            </Box>
            <Box background="primary-light" width="50%">
                50%
            </Box>
        </Box>
    )
}