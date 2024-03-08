import { Box } from '@rhino-ui/components/src/components/box/box';

export default function OmmitingKeys() {
    return (
        <Box padding={{ desktop: 'lg' }} background="primary-lighter">
            <p>
                This box will have no padding until the viewport reaches the desktop
                breakpoint.{' '}
            </p>
        </Box>
    )
}