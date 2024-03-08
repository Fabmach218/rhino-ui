import { Box } from "@rhino-ui/components/src/components/box/box";

export default function Border() {
    return (
        <>
            <Box gap="sm" direction="row">
                <Box borderColor="grey-200" borderWidth="xs md" padding="xs">
                    grey-lighter, xs md
                </Box>
                <Box borderColor="danger" borderWidth="0 sm md xs" padding="xs">
                    danger, 0 sm md xs
                </Box>
                <Box borderColor="primary-100" borderWidth="md" padding="xs">
                    primary-darker, md
                </Box>
            </Box>
        </>
    )
}