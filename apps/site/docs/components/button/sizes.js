import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";

export default function Sizes() {
    return (
        <Box gap="sm" direction="row" alignItems="flex-start">
            <Button size="xs" variant="light">
                Extra Small
            </Button>
            <Button size="sm" variant="light">
                Small
            </Button>
            <Button size="md" variant="light">
                Medium
            </Button>
            <Button size="lg" variant="light">
                Large
            </Button>
            <Button
            size={{
                base: 'xs',
                tablet: 'sm',
                desktop: 'md',
                hd: 'lg',
            }}
            variant="light"
            >
                Responsive
            </Button>
        </Box>
    )
}