import { Badge } from '@rhino-ui/components/src/components/badge/badge';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { Duration } from '@rhino-ui/components/src/components/duration/duration';

export default function InsideBadge() {
    return (
        <Box direction="row" gap="sm">
            <Badge message={<Duration milliseconds={60001} />} variant="default"/>
            <Badge message={<Duration milliseconds={3600000} />} variant="warning" />
            <Badge message={<Duration milliseconds={86500000} />} variant="danger"/>
        </Box>
    )
}