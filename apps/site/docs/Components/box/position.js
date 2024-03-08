import { Box } from '@rhino-ui/components/src/components/box/box';

export default function Position() {
    return (
        <Box
            padding="md"
            childGap="md"
            display="block"
            background="primary-lighter"
            overflow="scroll"
            height="300px"
        >
            <Box
                position="absolute"
                padding="md"
                background="secondary-light"
                style={{ zIndex: 1 }}
                width="100px"
                height="150px"
            >
                absolute
            </Box>
            <Box
                position="relative"
                padding="md"
                background="primary-light"
                textAlign="right"
                height="200px"
            >
                relative
            </Box>
            <Box
                position="sticky"
                padding="md"
                background="tertiary-light"
                height="50px"
                color="white"
                style={{ top: 0, zIndex: 2 }}
            >
                sticky
            </Box>
            <Box
                position="static"
                padding="md"
                background="primary-light"
                height="400px"
            >
                static
            </Box>
        </Box>
    )
}