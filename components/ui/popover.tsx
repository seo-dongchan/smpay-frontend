'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as Icons from 'lucide-react';

import { cn } from '@/lib/utils';

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

interface InfoPopoverProps {
  triggerContent?: React.ReactNode;
  content: React.ReactNode;
  icon?: keyof typeof Icons;
}

/**
 * Custom Dialog Component
 * TODO : 커스텀한 툴팁이 많을 경우 compose로 이동할 예정
 * TODO : 툴팁을 hover로 사용해서, 불필요한 코드일 수 있음. 혹시 사용할 수 있어 보류
 */

const TooltipPopover = ({ triggerContent, content }: InfoPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{triggerContent || <span>Trigger</span>}</PopoverTrigger>
      <PopoverContent
        side="bottom"
        sideOffset={8}
        className="p-4 bg-white text-black rounded-xl shadow-md border border-gray-200 w-[320px]"
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, TooltipPopover };
