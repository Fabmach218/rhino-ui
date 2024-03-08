import { Box } from '@rhino-ui/components/src/components/box/box';

export default function MinWidth() {
    return (
        <Box alignItems="flex-start" background="primary-lightest" gap="xs">
            <Box background="primary-light" minWidth="2xl">
                2xl
            </Box>
            <Box background="primary-light" minWidth="145px">
                145px
            </Box>
            <Box background="primary-light" minWidth="50%">
                50%
            </Box>
        </Box>
    )
}