import { Box } from "@rhino-ui/components/src/components/box/box";

export default function ChildGap() {
    return (
        <Box childGap="md" display="block">
            <Box display="block" background="primary-light" padding="sm" />
            <Box display="block" background="primary-light" padding="sm" />
            <Box display="block" background="primary-light" padding="sm" />
            <Box display="block" background="primary-light" padding="sm" />
            <Box display="block" background="primary-light" padding="sm" />
        </Box>
    )
}