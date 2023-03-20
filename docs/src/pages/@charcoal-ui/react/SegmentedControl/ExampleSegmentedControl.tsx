import { useState } from 'react';
import { SegmentedControl } from '@charcoal-ui/react';

export const ExampleSegmentedControl = () => {
  const [value, setValue] = useState('option1');
  return (
    <div>
      <p>value: {value}</p>
      <SegmentedControl
        data={['option1', 'option2', 'option3']}
        defaultValue="option1"
        value={value}
        onChange={setValue}
      ></SegmentedControl>
    </div>
  );
};
