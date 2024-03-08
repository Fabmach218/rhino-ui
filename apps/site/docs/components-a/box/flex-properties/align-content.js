import { Box } from "@rhino-ui/components/src/components/box/box";

export default function AlignContent() {
    return (
        <Box gap="md">
            <Box direction="row" alignItems="center" gap="md">
                <Box flex="auto" width="70px">
                    start
                </Box>
                <Box
                    flex="auto"
                    alignContent="flex-start"
                    height="200px"
                    wrap
                    gap="md"
                    background="primary-lighter"
                    direction="row"
                >
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box flex="auto" width="70px">
                    center
                </Box>
                <Box
                    flex="auto"
                    alignContent="center"
                    height="200px"
                    wrap
                    gap="md"
                    background="primary-lighter"
                    direction="row"
                >
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box flex="auto" width="70px">
                    end
                </Box>
                <Box
                    flex="auto"
                    alignContent="flex-end"
                    height="200px"
                    wrap
                    gap="md"
                    background="primary-lighter"
                    direction="row"
                >
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box flex="auto" width="70px">
                    stretch
                </Box>
                <Box
                    flex="auto"
                    alignContent="stretch"
                    height="200px"
                    wrap
                    gap="md"
                    background="primary-lighter"
                    direction="row"
                >
                    <Box width="2xl" background="primary" />
                    <Box width="2xl" background="primary" />
                    <Box width="2xl" background="primary" />
                    <Box width="2xl" background="primary" />
                    <Box width="2xl" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center"  gap="md">
                <Box flex="auto" width="70px">
                    between
                </Box>
                <Box
                    flex="auto"
                    alignContent="space-between"
                    height="200px"
                    wrap
                    gap="md"
                    background="primary-lighter"
                    direction="row"
                >
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                </Box>
            </Box>
            <Box direction="row" alignItems="center" gap="md">
                <Box flex="auto" width="70px">
                    around
                </Box>
                <Box
                    flex="auto"
                    alignContent="center"
                    height="200px"
                    wrap
                    gap="md"
                    background="primary-lighter"
                    direction="row"
                >
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                    <Box width="2xl" height="md" background="primary" />
                </Box>
            </Box>
        </Box>
    )
}