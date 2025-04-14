import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-3 border-t border-gray-200">
      <div className="w-ful  flex items-center justify-end gap-4 text-sm text-gray-600 pr-8">
        <Link href="/terms" className="hover:text-gray-900">
          이용약관
        </Link>
        <div className="w-px h-3 bg-gray-300" />
        <Link href="/privacy" className="hover:text-gray-900">
          개인정보처리방침
        </Link>
        <div className="w-px h-3 bg-gray-300" />
        <Link href="/customer-service" className="hover:text-gray-900">
          고객센터
        </Link>
        <div className="w-px h-3 bg-gray-300" />
        <div>사업자 등록 번호: 211-88-14382</div>
        <div className="w-px h-3 bg-gray-300" />
        <div>대표: 박규태</div>
        <div className="w-px h-3 bg-gray-300" />
        <div>주소: 서울 강남구 논현로 319, 3층,4층</div>
      </div>
    </footer>
  );
};

export default Footer;
