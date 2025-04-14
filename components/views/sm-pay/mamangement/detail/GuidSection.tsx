import { GuideBox } from '@/components/common/Box';
import { IconBadge } from '@/components/composite/icon';

// TODO : 공용으로 적용할 것.
const GuidSection = () => {
  return (
    <GuideBox>
      <div className="flex items-start gap-2">
        <IconBadge name="CircleAlert" bgColor="#1062FF" />
        <div className="font-normal text-[#363C45] text-sm">
          <p>
            광고주의 광고 성과를 분석하여 자동 선결제의 기준 ROAS와 충전 금액을 설정할 수 있습니다.
          </p>
          <p>
            SM Pay 신청시 작성하신 기준 ROAS에 도달하면 광고비를 증액하고, 기준 ROAS에서 떨어지면
            감액하여 효율적인 예산 운영이 가능합니다.
          </p>
        </div>
      </div>
    </GuideBox>
  );
};

export default GuidSection;
