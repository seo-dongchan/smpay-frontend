export type Transaction = {
  id: string;
  agency: string; // 대행사명
  advertiser: string; // 광고주
  date: string; // 거래일자
  transactionId: string; // 거래번호
  type: string; //'충전' | '취소'; // 거래유형
  bank: string; // 은행
  accountNumber: string;
  depositor: string;
  amount: number;
};
