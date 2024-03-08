import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DateInput } from '@rhino-ui/components/src/components/date-input/date-input';

export default function CustomDateFormat() {
    const [selectedDate, setSelectedDate] = useState(new Date('2020, 11, 3'));
      const [inputValue, setInputValue] = useState('');
      const handleClear = () => {
        setSelectedDate(null);
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
              onClear: handleClear,
              id: 'withCustomDateFormat',
              name: 'selectDate',
              label: 'Select Date',
            }}
          />
          <Box>
            <p>Selected Date (as ISO String): {selectedDate ? selectedDate.toISOString() : null}</p>
          </Box>
        </Box>
      );
}