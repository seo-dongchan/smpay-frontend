import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils'; // Tailwind className 병합 유틸

export function SectionLabel({
  children,
  className,
  labelClassName,
}: {
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <div className={cn('flex items-center space-x-1', className)}>
      <span>•</span>
      <Label className={labelClassName}>{children}</Label>
    </div>
  );
}
