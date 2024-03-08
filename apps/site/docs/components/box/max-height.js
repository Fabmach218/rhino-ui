import { Box } from '@rhino-ui/components/src/components/box/box';

export default function MaxHeight() {
    return (
        <Box
            height="300px"
            background="primary-lightest"
            direction="row"
            gap="xs"
        >
            <Box
                maxHeight="lg"
                flex="auto"
                justifyContent="center"
                alignItems="center"
                background="primary-light"
            >
                lg
            </Box>
            <Box
                maxHeight="50px"
                flex="auto"
                justifyContent="center"
                alignItems="center"
                background="primary-light"
            >
                50px
            </Box>
            <Box
                maxHeight="50%"
                flex="auto"
                justifyContent="center"
                alignItems="center"
                background="primary-light"
            >
                50%
            </Box>
        </Box>
    )
}