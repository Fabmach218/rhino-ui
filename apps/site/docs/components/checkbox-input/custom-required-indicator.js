import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";
import { Box } from "@rhino-ui/components/src/components/box/box";

export default function CustomRequiredIndicator() {
    const [value, setValue] = useState(false);
    const [value2, setValue2] = useState(false);
    return (
    <Box gap="md">
        <CheckboxInput
        id="requiredCheckboxNull"
        label="Required Without Indicator"
        isChecked={value}
        onChange={event => setValue(event.target.checked)}
        isRequired
        requiredIndicator={null}
        />
        <CheckboxInput
        id="requiredCheckboxCustom"
        label="Required Custom Indicator"
        isChecked={value2}
        onChange={event => setValue2(event.target.checked)}
        isRequired
        requiredIndicator=" (required)"
        />
    </Box>
    );
}