import { useState } from 'react';
import { DateInput } from '@rhino-ui/components/src/components/date-input/date-input';

export default function Default() {
    const [selectedDate, setSelectedDate] = useState(null);
      const handleClear = () => {
        setSelectedDate(null);
      };
      return (
        <DateInput
          datePickerProps={{
            selected: selectedDate,
            onChange: setSelectedDate,
          }}
          textInputProps={{
            placeholder: 'e.g. 11/02/2020',
            onClear: handleClear,
            id: 'defaultDatePicker',
            name: 'selectDate',
            label: 'Select Date',
          }}
        />
      );
}