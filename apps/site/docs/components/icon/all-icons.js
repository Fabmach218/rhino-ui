import { Box } from "@rhino-ui/components/src/components/box/box";
import { Icon } from "@rhino-ui/components/src/components/icon/icon";
import { ICON_NAMES } from "@rhino-ui/components/src/lib";

export default function AllIcons() {
    return (
        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(6rem,1fr))',
            gridAutoRows: '6rem',
            gap: '1rem',
          }}
        >
          {ICON_NAMES.map(name => (
            <Box
              key={name}
              fontSize="lg"
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              gap="sm"
            >
              <Icon className="neutral-500" name={name} />
              <Box as="p" color="grey-500" fontSize="sm">
                {name}
              </Box>
            </Box>
          ))}
        </Box>
      );
}