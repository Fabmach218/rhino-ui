import { Box } from '@rhino-ui/components/src/components/box/box';

export default function MinHeight() {
    return (
        <Box
            height="300px"
            background="primary-lightest"
            alignItems="flex-start"
            direction="row"
            gap="xs"
        >
            <Box
                width="33"
                minHeight="3xl"
                justifyContent="center"
                alignItems="center"
                background="primary-light"
            >
                3xl
            </Box>
            <Box
                width="33"
                minHeight="50px"
                justifyContent="center"
                alignItems="center"
                background="primary-light"
            >
                50px
            </Box>
            <Box
                width="33"
                minHeight="50%"
                justifyContent="center"
                alignItems="center"
                background="primary-light"
            >
                50%
            </Box>
        </Box>
    )
}