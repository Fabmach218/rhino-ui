import { Box } from '@rhino-ui/components/src/components/box/box';

export default function Margin() {
    return (
        <>
            <Box margin="lg" background="primary-lighter">
                lg margin
            </Box>
            <Box margin="lg md" background="primary-lighter">
                lg vertical and md horizontal
            </Box>
            <Box margin="0 2xl" background="primary-lighter">
                0 vertical and 2xl horizontal
            </Box>
            <Box margin="sm md 2xl" background="primary-lighter">
                sm top, md horizontal, 2xl bottom
            </Box>
            <Box margin="sm lg 2xl 0" background="primary-lighter">
                sm top, lg right, 2xl bottom, 0 left
            </Box>
        </>
    )
}