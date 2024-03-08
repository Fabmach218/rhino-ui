import { useState } from 'react';
import { DateInput } from '@rhino-ui/components/src/components/date-input/date-input';

export default function DateRange() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const setDate = ([startDate, endDate]) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };
    const handleClear = () => {
        setStartDate(null);
        setEndDate(null);
    };
    return (
        <DateInput
            datePickerProps={{
            onChange: setDate,
            selected: startDate,
            selectsRange: true,
            startDate,
            endDate,
            }}
            textInputProps={{
            onClear: handleClear,
            id: 'myDateRangePicker',
            name: 'myDateRangePicker',
            label: 'Select Date Range',
            }}
        />
    );
}