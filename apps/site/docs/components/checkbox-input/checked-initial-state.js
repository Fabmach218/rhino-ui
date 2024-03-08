import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";

export default function CheckedInitialState() {
    const [value, setValue] = useState(true);
    return (
        <CheckboxInput
            id="initialStateChecked"
            label="Label"
            onChange={event => setValue(event.target.checked)}
            isChecked={value}
        />
    );
}