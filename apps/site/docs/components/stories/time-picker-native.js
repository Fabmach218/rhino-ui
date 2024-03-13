import { useState } from 'react';
import { Box } from "@rhino-ui/components/src/components/box/box";
import { TimePickerNative } from "@rhino-ui/components/src/components/time-picker-native/time-picker-native";

export function Default() {
    const [value, setValue] = useState(null);
      return (
        <Box>
          <TimePickerNative
            id="defaultTimePickerNative"
            name="defaultTimePickerNative"
            onChange={event => {
              console.log(event.target.value);
              setValue(event.target.value);
            }}
            label="Pick a Time"
            value={value}
          />
        </Box>
      );
}

export function WithInterval() {
    const [value, setValue] = useState(null);
      return (
        <Box>
          <TimePickerNative
            id="intervalTimePickerNative"
            name="intervalTimePickerNative"
            onChange={event => setValue(event.target.value)}
            value={value}
            label="Pick a Time"
            interval={3600}
          />
        </Box>
      );
}

export function WithStartAndEnd() {
    const [value, setValue] = useState(null);
      return (
        <Box>
          <TimePickerNative
            id="startEnd"
            name="startEnd"
            onChange={event => setValue(event.target.value)}
            value={value}
            label="Pick a Time"
            startTime={{ hour: 9, minute: 0 }}
            endTime={{ hour: 15, minute: 31 }}
          />
        </Box>
      );
}

export function WithCustomDate() {
    const [value, setValue] = useState(null);
      return (
        <Box>
          <TimePickerNative
            id="customDate"
            name="customDate"
            onChange={event => setValue(event.target.value)}
            value={value}
            label="Pick a Time"
            startTime={{ hour: 9, minute: 0 }}
            endTime={{ hour: 15, minute: 31 }}
            dateDisplayOptions={{ hour12: false, hour: '2-digit', minute: '2-digit' }}
          />
        </Box>
      );
}

export function WithHelpText() {
    const [value, setValue] = useState(null);
      return (
        <Box>
          <TimePickerNative
            id="helpText"
            name="helpText"
            onChange={event => {
              setValue(event.target.value);
            }}
            label="Pick a Time"
            value={value}
            helpText="pick a time, any time..."
          />
        </Box>
      );
}

export function Size() {
    const [value, setValue] = useState();
      const [value1, setValue1] = useState();
      const [value2, setValue2] = useState();
      return (
        <Box gap="md">
          <TimePickerNative
            id="smTimePickerNative"
            name="smTimePickerNative"
            onChange={event => {
              setValue(event.target.value);
            }}
            label="Small"
            value={value}
            size="sm"
          />
          <TimePickerNative
            id="mdTimePickerNative"
            name="mdTimePickerNative"
            onChange={event => {
              setValue1(event.target.value);
            }}
            label="Medium"
            value={value1}
            size="md"
          />
          <TimePickerNative
            id="lgTimePickerNative"
            name="lgTimePickerNative"
            onChange={event => {
              setValue2(event.target.value);
            }}
            label="Large"
            value={value2}
            size="lg"
          />
        </Box>
      );
}