import { Box } from '@rhino-ui/components/src/components/box/box';

export default function WidthTokens() {
    return (
        <Box background="primary-lightest" gap="xs" overflow="auto">
            <Box background="primary-light" width="sm">
                sm
            </Box>
            <Box background="primary-light" width="md">
                md
            </Box>
            <Box background="primary-light" width="lg">
                lg
            </Box>
            <Box background="primary-light" width="xl">
                xl
            </Box>
            <Box background="primary-light" width="2xl">
                2xl
            </Box>
            <Box background="primary-light" width="3xl">
                3xl
            </Box>
            <Box background="primary-light" width="4xl">
                4xl
            </Box>
            <Box background="primary-light" width="5xl">
                5xl
            </Box>
        </Box>
    )
}