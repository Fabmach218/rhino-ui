import { Badge } from "@rhino-ui/components/src/components/badge/badge";
import { Box } from "@rhino-ui/components/src/components/box/box";

export default function Variants() {
    const variants = [
        'default',
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'danger',
      ];
      return (
        <Box direction="row" gap="sm">
          {variants.map(variant => (
            <Badge message={variant} variant={variant} key={variant} />
          ))}
        </Box>
      );
}