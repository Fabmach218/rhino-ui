import { useState } from 'react';
import { DateInput } from '@rhino-ui/components/src/components/date-input/date-input';

export default function MinMaxDate() {
    const [selectedDate, setSelectedDate] = useState(null);
      const handleClear = () => {
        setSelectedDate(null);
      };
      const min = new Date(2022, 6, 18);
      min.setDate(min.getDate() - 10);
      const max = new Date(2022, 6, 18);
      max.setDate(max.getDate() + 100);
      return (
        <DateInput
          datePickerProps={{
            selected: selectedDate,
            maxDate: max,
            minDate: min,
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