import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";

export default function Default() {
    const [value, setValue] = useState(null);
    return (
    <CheckboxInput
        id="defaultStateIsUnchecked"
        label="Label"
        onChange={event => setValue(event.target.checked)}
        isChecked={value}
    />
    );
}