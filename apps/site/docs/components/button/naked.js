import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";

export default function Naked() {
    return (
        <Box display="block" fontSize="sm" color="secondary-500">
          <Button isNaked>Naked Button</Button>
        </Box>
    )
}