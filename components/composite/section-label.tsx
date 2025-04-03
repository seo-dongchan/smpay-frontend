import { Label } from '@/components/ui/label';

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center space-x-2 text-gray-700 mb-2">
      <span className="text-[24px]">•</span>
      <Label className="text-base font-bold text-[#5E5E5E]">{children}</Label>
    </div>
  );
}
