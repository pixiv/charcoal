import { useState } from 'react';
import { Switch } from '@charcoal-ui/react';

export const ExampleSwitch = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch name="switch" checked={checked} onChange={setChecked}>
      checked: {checked.toString()}
    </Switch>
  );
};
