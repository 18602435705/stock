import { useState } from 'react';
import { Collapsible, Button } from '@douyinfe/semi-ui';
import { IconChevronDown, IconChevronUp } from '@douyinfe/semi-icons';

export const CollapsibleButton = ({ children }: { children: React.ReactElement }) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <Button
        onClick={toggle}
        icon={isOpen ? <IconChevronUp /> : <IconChevronDown />}
        theme="solid"
        iconPosition="right"
      >
        {isOpen ? '收起' : '展开'}
      </Button>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </div>
  );
};
