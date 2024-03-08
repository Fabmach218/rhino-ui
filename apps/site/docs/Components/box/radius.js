import { Box } from '@rhino-ui/components/src/components/box/box';

export default function Radius() {
    return (
        <Box direction="row" gap="2xs" justifyContent="space-between">
            <Box radius="xs" background="secondary-light" padding="sm">
                xs
            </Box>
            <Box radius="sm" background="secondary-light" padding="sm">
                sm
            </Box>
            <Box radius="md" background="secondary-light" padding="sm">
                md
            </Box>
            <Box radius="lg" background="secondary-light" padding="sm">
                lg
            </Box>
            <Box radius="circle" background="secondary-light" padding="sm">
                circle
            </Box>
            <Box radius="sm lg" background="secondary-light" padding="sm">
                sm lg
            </Box>
            <Box radius="sm md lg" background="secondary-light" padding="sm">
                sm md lg
            </Box>
            <Box radius="xs sm md lg" background="secondary-light" padding="sm">
                xs sm md lg
            </Box>
            <Box radius="0 0 md md" background="secondary-light" padding="sm">
                0 0 md md
            </Box>
            <Box radius="md md 0 0" background="secondary-light" padding="sm">
                md md 0 0
            </Box>
        </Box>
    )
}