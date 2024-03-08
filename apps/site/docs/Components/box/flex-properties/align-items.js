import { Box } from "@rhino-ui/components/src/components/box/box";

export default function AlignItems() {
    return (
        <Box flex="auto" gap="md">
            <Box direction="row" alignItems="center" gap="md">
                <Box width="70px">start</Box>
                <Box
                    flex="auto"
                    height="100px"
                    background="primary-lighter"
                    alignItems="flex-start"
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
                    height="100px"
                    background="primary-lighter"
                    alignItems="center"
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
                    height="100px"
                    background="primary-lighter"
                    alignItems="flex-end"
                    direction="row"
                    gap="md"
                >
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box width="70px">baseline</Box>
                <Box
                    flex="auto"
                    height="100px"
                    background="primary-lighter"
                    alignItems="baseline"
                    direction="row"
                    gap="md"
                >
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                    <Box width="md" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box width="70px">stretch</Box>
                <Box
                    flex="auto"
                    height="100px"
                    background="primary-lighter"
                    alignItems="stretch"
                    direction="row"
                    gap="md"
                >
                    <Box width="md" background="primary" />
                    <Box width="md" background="primary" />
                    <Box width="md" background="primary" />
                </Box>
            </Box>
        </Box>
    )
}