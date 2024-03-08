import { Box } from "@rhino-ui/components/src/components/box/box";

export default function JustifyContent() {
    return (
        <Box flex="auto" gap="md">
            <Box direction="row" alignItems="center" gap="md">
                <Box width="70px">start</Box>
                <Box
                    flex="auto"
                    background="primary-lighter"
                    justifyContent="flex-start"
                    direction="row"
                    gap="md"
                >
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box width="70px">center</Box>
                <Box
                    flex="auto"
                    background="primary-lighter"
                    justifyContent="center"
                    direction="row"
                    gap="md"
                >
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box width="70px">end</Box>
                <Box
                    flex="auto"
                    background="primary-lighter"
                    justifyContent="flex-end"
                    direction="row"
                    gap="md"
                >
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box width="70px">between</Box>
                <Box
                    flex="auto"
                    background="primary-lighter"
                    justifyContent="space-between"
                    direction="row"
                    gap="md"
                >
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box width="70px">around</Box>
                <Box
                    flex="auto"
                    background="primary-lighter"
                    justifyContent="space-around"
                    direction="row"
                    gap="md"
                >
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box width="70px">evenly</Box>
                <Box
                    flex="auto"
                    background="primary-lighter"
                    justifyContent="space-evenly"
                    direction="row"
                    gap="md"
                >
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                </Box>
            </Box>
        </Box>
    )
}