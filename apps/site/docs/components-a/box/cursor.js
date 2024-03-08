import { Box } from "@rhino-ui/components/src/components/box/box";

export default function Cursor() {
    return (
        <Box
            padding="md"
            gap="md"
            flex="auto"
            background="primary-lighter"
            overflow="auto"
        >
            <Box cursor="pointer" padding="md" background="primary-light">
                pointer
            </Box>
            <Box cursor="move" padding="md" background="primary-light">
                move
            </Box>
            <Box cursor="not-allowed" padding="md" background="primary-light">
                not-allowed
            </Box>
            <Box cursor="grab" padding="md" background="primary-light">
                grab
            </Box>
            <Box cursor="zoom-in" padding="md" background="primary-light">
                zoom-in
            </Box>
            <Box cursor="zoom-out" padding="md" background="primary-light">
                zoom-out
            </Box>
        </Box>
    )
}