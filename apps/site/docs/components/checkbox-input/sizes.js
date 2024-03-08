import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";
import { Box } from "@rhino-ui/components/src/components/box/box";

export default function Sizes() {
    const [sm, setSm] = useState(null);
      const [md, setMd] = useState(null);
      const [lg, setLg] = useState(null);
      const [responsive, setResponsive] = useState(null);
      return (
        <Box gap="md">
          <CheckboxInput
            id="smCheckboxInput"
            label="Small checkbox"
            helpText="More helpful text about this checkbox"
            isChecked={sm}
            onChange={event => setSm(event.target.checked)}
            size="sm"
          />
          <CheckboxInput
            id="mdCheckboxInput"
            label="Medium checkbox"
            helpText="More helpful text about this checkbox"
            isChecked={md}
            onChange={event => setMd(event.target.checked)}
            size="md"
          />
          <CheckboxInput
            id="lgCheckboxInput"
            label="Large checkbox"
            helpText="More helpful text about this checkbox"
            isChecked={lg}
            onChange={event => setLg(event.target.checked)}
            size="lg"
          />
          <CheckboxInput
            id="responsiveCheckboxInput"
            label="Responsive checkbox"
            helpText="Will change sizes depending on viewport width"
            isChecked={responsive}
            onChange={event => setResponsive(event.target.checked)}
            size={{ base: 'sm', tablet: 'md', desktop: 'lg', hd: 'sm' }}
          />
        </Box>
      );
}