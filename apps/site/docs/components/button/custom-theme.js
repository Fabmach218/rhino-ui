import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";

export default function CustomTheme() {
    return (
        <Box
            gap="sm"
            direction="row"
            alignItems="flex-start"
            style={{
                '--button-font-family': 'var(--asset-fonts-brand)',
                '--button-font-weight': 'var(--size-font-weight-regular)',
                '--button-size-xs-border-radius': '0',
                '--button-size-sm-border-radius': '0',
                '--button-size-md-border-radius': '0',
                '--button-size-lg-border-radius': '0',
            }}
        >
            <Button size="xs">Get Solar</Button>
            <Button size="sm">Get Solar</Button>
            <Button size="md">Get Solar</Button>
            <Button size="lg">Get Solar</Button>
        </Box>
    )
}