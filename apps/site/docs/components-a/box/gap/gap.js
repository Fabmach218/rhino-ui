import { Box } from "@rhino-ui/components/src/components/box/box";

export default function Gap() {
    return (
        <Box gap="lg" direction="row" wrap maxWidth="4xl">
            <Box width="xl" background="primary-light" height="md" />
            <Box width="xl" background="primary-light" height="md" />
            <Box width="xl" background="primary-light" height="md" />
            <Box width="xl" background="primary-light" height="md" />
            <Box width="xl" background="primary-light" height="md" />
            <Box width="xl" background="primary-light" height="md" />
        </Box>
    );
}