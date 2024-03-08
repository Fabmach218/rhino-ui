import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DateInput } from '@rhino-ui/components/src/components/date-input/date-input';

export default function InputBlurEvent() {
    const [selectedDate, setSelectedDate] = useState(new Date('2020, 11, 3'));
      const [inputValue, setInputValue] = useState('');
      const handleTextInputBlur = () => {
        alert('TextInput Blur Event');
      };
      return (
        <Box gap="md">
          <DateInput
            dateFormat={'MMMM dd, yyyy'}
            datePickerProps={{
              selected: selectedDate,
              onChange: setSelectedDate,
            }}
            textInputProps={{
              id: 'withCustomDateFormat',
              name: 'selectDate',
              label: 'Select Date',
              onBlur: handleTextInputBlur,
            }}
          />
        </Box>
      );
}