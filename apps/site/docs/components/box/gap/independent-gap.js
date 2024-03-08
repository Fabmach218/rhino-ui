import { Box } from "@rhino-ui/components/src/components/box/box";

export default function IndependentGap() {
    return (
        <>
            <Box gap="xs 4xl" direction="row" wrap maxWidth="4xl">
                <Box width="xl" background="primary-light" height="md" />
                <Box width="xl" background="primary-light" height="md" />
                <Box width="xl" background="primary-light" height="md" />
                <Box width="xl" background="primary-light" height="md" />
                <Box width="xl" background="primary-light" height="md" />
                <Box width="xl" background="primary-light" height="md" />
            </Box>

            <Box gap="lg">
                <Box rowGap="xs" columnGap="xl" direction="row" wrap maxWidth="4xl">
                    <Box width="xl" background="primary-light" height="md" />
                    <Box width="xl" background="primary-light" height="md" />
                    <Box width="xl" background="primary-light" height="md" />
                    <Box width="xl" background="primary-light" height="md" />
                    <Box width="xl" background="primary-light" height="md" />
                    <Box width="xl" background="primary-light" height="md" />
                </Box>
                <Box rowGap="sm" maxWidth="4xl">
                    <Box width="100" background="primary-light" height="md" />
                    <Box width="100" background="primary-light" height="md" />
                    <Box width="100" background="primary-light" height="md" />
                </Box>
                <Box columnGap="sm" maxWidth="4xl" direction="row">
                    <Box flex="auto" background="primary-light" height="md" />
                    <Box flex="auto" background="primary-light" height="md" />
                    <Box flex="auto" background="primary-light" height="md" />
                </Box>
            </Box>
        </>
    )
}