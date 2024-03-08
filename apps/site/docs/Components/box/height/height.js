import { Box } from '@rhino-ui/components/src/components/box/box';

export default function Height() {
    return (
        <Box background="primary-lightest" gap="xs">
            <Box
                background="primary-light"
                height="227px"
                justifyContent="center"
                alignItems="center"
            >
                227px
            </Box>
            <Box
                background="primary-light"
                height="10rem"
                justifyContent="center"
                alignItems="center"
            >
                10rem
            </Box>
            <Box
                background="primary-light"
                height="4em"
                justifyContent="center"
                alignItems="center"
            >
                4em
            </Box>
        </Box>
    )
}