// app/(main)/sm-pay/page.tsx
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/sm-pay/management'); // 첫 번째 하위 메뉴로 이동
}
