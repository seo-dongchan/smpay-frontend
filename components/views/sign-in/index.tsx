import { Input } from '@/components/ui/input';
import Title from '@/components/common/no-nav/Title';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const SignInView = () => {
  return (
    <div className="w-full max-w-[400px] h-screen flex flex-col gap-5 mx-auto mt-10">
      <Title />

      <div className="flex flex-col gap-2 pt-5">
        <span>이메일</span>
        <Input />
      </div>

      <div className="flex flex-col gap-2">
        <span>비밀번호</span>
        <Input />
      </div>

      <Button>로그인</Button>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox />
          <span>아이디 저장</span>
        </div>

        <span className="text-[#545F71] cursor-pointer">비밀번호 찾기</span>
      </div>

      <div className="mx-auto border-dotted border-gray-400 border-b w-full" />

      <div className="flex flex-col gap-2  justify-center">
        <span className="text-[#545F71] font-bold">아직 SM Pay 회원이 아니신가요?</span>
        <Button className="w-full">
          <span className="text-base font-bold">대행사 등록 신청</span>
        </Button>
      </div>
    </div>
  );
};

export default SignInView;
