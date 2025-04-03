// components/composite/input-password.tsx
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function PasswordInput(props: React.ComponentPropsWithoutRef<'input'>) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input type={show ? 'text' : 'password'} {...props} />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1/2 -translate-y-1/2"
        onClick={() => setShow(!show)}
        tabIndex={-1}
      >
        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </Button>
    </div>
  );
}
