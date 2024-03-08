import { Badge } from "@rhino-ui/components/src/components/badge/badge";
import { Box } from "@rhino-ui/components/src/components/box/box";

export default function Sizes() {
    return (
        <>
          <Box direction="column" alignItems="flex-start" gap="md">
            <Badge size="sm" message="Small" />
            <Badge size="md" message="Medium" />
            <Badge size="lg" message="Large" />
            <Badge size="xl" message="X-Large" />
            <Badge
              size={{
                base: 'sm',
                tablet: 'md',
                desktop: 'lg',
                hd: 'xl',
              }}
              message="Responsive"
            />
          </Box>
        </>
      );
}