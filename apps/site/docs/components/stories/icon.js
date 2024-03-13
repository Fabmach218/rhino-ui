import { Box } from "@rhino-ui/components/src/components/box/box";
import { Icon } from "@rhino-ui/components/src/components/icon/icon";
import { ICON_NAMES } from "@rhino-ui/components/src/lib";

export function Size() {
    return (
        <>
            <Box direction="row" gap="sm" margin="0 0 md 0" fontSize="xs">
               <Icon name="remove" color="danger-500" />
               <Box>Size is set by the Icon's parent</Box>
            </Box>
            <Box direction="row" fontSize="xl" gap="sm">
                <Icon name="star" color="warning-400" />
                <Box>Size is set by the Icon's parent</Box>
            </Box>
        </>
    )
}

export function Color() {
    return (
        <>
            <Box direction="row" gap="sm" margin="0 0 md 0">
                <Icon name="remove" color="danger-500" />
                <Box>Color is set at the Icon level</Box>
            </Box>
            <Box direction="row" gap="sm" color="secondary-400">
                <Icon name="book" />
                <Box>Color is set by the Icon's parent</Box>
            </Box>
        </>
    )
}

export function UnknownIcon() {
    return <Icon name="does-not-exist" className="font-size-2xl" />
}

export function AllIcons() {
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