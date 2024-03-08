import { Box } from "@rhino-ui/components/src/components/box/box";

export default function BackgroundColor() {
    return (
        <>
            <Box background="secondary-lighter" margin="xs" padding="xs">
                secondary-lighter
            </Box>
            <Box background="danger-lightest" margin="xs" padding="xs">
                danger-lightest
            </Box>
            <Box background="primary" margin="xs" padding="xs">
                primary
            </Box>
        </>
    )
}