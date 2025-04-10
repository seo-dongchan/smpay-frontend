import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Transaction } from './constants';

interface TableSectionProps {
  data: Transaction[];
}

/**
 * TODO : antd 테이블로 변환
 */
const TableSection = ({ data }: TableSectionProps) => {
  console.log(data);
  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>대행사</TableHead>
            <TableHead>광고주</TableHead>
            <TableHead>날짜</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, rowIndex) => {
            const isFirstOfGroup =
              rowIndex === 0 || row.advertiser !== data[rowIndex - 1].advertiser;

            let rowSpan = 1;
            if (isFirstOfGroup) {
              for (let i = rowIndex + 1; i < data.length; i++) {
                if (data[i].advertiser === row.advertiser) {
                  rowSpan++;
                } else {
                  break;
                }
              }
            }

            return (
              <TableRow key={row.id}>
                <TableCell>{row.agency}</TableCell>
                {isFirstOfGroup && (
                  <TableCell
                    rowSpan={rowSpan}
                    className="border-r border-l px-4 py-2 align-top font-medium"
                  >
                    {row.agency}
                  </TableCell>
                )}

                <TableCell>{row.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default TableSection;
