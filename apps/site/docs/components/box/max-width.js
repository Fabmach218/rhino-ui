import { Box } from '@rhino-ui/components/src/components/box/box';

export default function MaxWidth() {
    return (
        <Box background="primary-lightest" gap="xs">
            <Box background="primary-light" maxWidth="2xl">
                2xl
            </Box>
            <Box background="primary-light" maxWidth="145px">
                145px
            </Box>
            <Box background="primary-light" maxWidth="50%">
                50%
            </Box>
        </Box>
    )
}