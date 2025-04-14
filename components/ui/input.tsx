import * as React from 'react';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  );
}

// 검색 input
interface SearchInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput = ({ value, onChange, placeholder, className }: SearchInputProps) => {
  return (
    <div className={cn('relative w-full bg-white rounded-md', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || '검색어를 입력해주세요.'}
        className="pl-8"
      />
    </div>
  );
};

// phone input
interface PhoneInputProps {
  value?: string; // 전체 전화번호 "01012345678"
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const PhoneInput = ({ value = '', onChange, className }: PhoneInputProps) => {
  const [part1, setPart1] = React.useState(value.slice(0, 3));
  const [part2, setPart2] = React.useState(value.slice(3, 7));
  const [part3, setPart3] = React.useState(value.slice(7, 11));

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, nextIndex?: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const onlyNumber = e.target.value.replace(/\D/g, '');
      setter(onlyNumber);

      // 최종 value를 합쳐서 외부 onChange로 전달
      const newValue = [
        nextIndex === 0 ? onlyNumber : part1,
        nextIndex === 1 ? onlyNumber : part2,
        nextIndex === 2 ? onlyNumber : part3,
      ].join('');

      if (onChange) {
        onChange({
          ...e,
          target: { ...e.target, value: newValue },
        });
      }
    };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Input
        maxLength={3}
        value={part1}
        onChange={handleChange(setPart1, 0)}
        className="w-[80px] text-center"
        placeholder="010"
        inputMode="numeric"
      />
      <span>-</span>
      <Input
        maxLength={4}
        value={part2}
        onChange={handleChange(setPart2, 1)}
        className="w-[80px] text-center"
        placeholder="1234"
        inputMode="numeric"
      />
      <span>-</span>
      <Input
        maxLength={4}
        value={part3}
        onChange={handleChange(setPart3, 2)}
        className="w-[80px] text-center"
        placeholder="5678"
        inputMode="numeric"
      />
    </div>
  );
};

export { Input, SearchInput, PhoneInput };
