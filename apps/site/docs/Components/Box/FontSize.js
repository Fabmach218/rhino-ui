import { Box } from '@rhino-ui/components/src/components/box/box';
import { FONT_SIZE_OPTIONS } from '@rhino-ui/components/src/lib/tokens';

export default function FontSize() {
    return [...FONT_SIZE_OPTIONS].reverse().map((fontSize, i) => (
        <Box fontSize={fontSize} key={i}>
          {`${fontSize} font size`}
        </Box>
      ))
}