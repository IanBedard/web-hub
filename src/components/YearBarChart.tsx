import { BarChart, Bar, Line,  Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { t, months } from '../i18n';

// #region Sample data
const data = [
  {
    name: 'Jan',
    tickets2026: 185,
    tickets2025: 130,
    tickets2024: 75,
    trend: 103
  },  
  {
    name: 'Feb',
    tickets2026: 0,
    tickets2025: 86,
    tickets2024: 64,
    trend: 75
  },
    {
    name: 'Mar',
    tickets2026: 0,
    tickets2025: 103,
    tickets2024: 66,
    trend: 85
  },
    {
    name: 'Apr',
    tickets2026: 0,
    tickets2025: 168,
    tickets2024: 76,
    trend: 122
  },
    {
    name: 'May',
    tickets2026: 0,
    tickets2025: 133,
    tickets2024: 79,
    trend: 106
  },
    {
    name: 'Jun',
    tickets2026: 0,
    tickets2025: 102,
    tickets2024: 82,
    trend: 92
  },
    {
    name: 'Jul',
    tickets2026: 0,
    tickets2025: 107,
    tickets2024: 87,
    trend: 102.5
  },
    {
    name: 'Aug',
    tickets2026: 0,
    tickets2025: 72,
    tickets2024: 66,
    trend: 69
  },
    {
    name: 'Sep',
    tickets2026: 0,
    tickets2025: 406,
    tickets2024: 112,
    trend: 259
  },
    {
    name: 'Oct',
      tickets2026: 0,
    tickets2025: 164,
    tickets2024: 120,
    trend: 136
  },
    {
    name: 'Nov',
    tickets2026: 0,
    tickets2025: 127,
    tickets2024: 105,
      trend: 110
  },
    {
    name: 'Dec',
    tickets2025: 146,
    tickets2026: 0,
    tickets2024: 88,
       trend: 95
  },
  
];

// #endregion
const YearBarChart = ({ language = 'fr' }: { language?: 'en' | 'fr' }) => {
  const monthNames = months(language as any);
  const monthMap: Record<string, string> = {
    Jan: monthNames[0],
    Feb: monthNames[1],
    Mar: monthNames[2],
    Apr: monthNames[3],
    May: monthNames[4],
    Jun: monthNames[5],
    Jul: monthNames[6],
    Aug: monthNames[7],
    Sep: monthNames[8],
    Oct: monthNames[9],
    Nov: monthNames[10],
    Dec: monthNames[11],
  };
  return (
     
    <BarChart
      style={{ width: '100%', maxWidth: '1000px', maxHeight: '60vh', aspectRatio: 4 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
  <XAxis stroke="#00c2f3" dataKey="name" tickFormatter={(v) => monthMap[v as string] || (v as string)} />
      <YAxis stroke="#00c2f3" width="auto" />
      <Tooltip />
      <Legend />
        <Bar name={t('charts.tickets2026', language as any)} dataKey="tickets2026" fill="#2e94adff" activeBar={<Rectangle fill="#00c2f3" stroke="#0d5b88ff" />} />
      
      <Bar name={t('charts.tickets2025', language as any)} dataKey="tickets2025" fill="#003b5c" activeBar={<Rectangle fill="#00c2f3" stroke="#0d5b88ff" />} />
      <Bar name={t('charts.tickets2024', language as any)} dataKey="tickets2024" fill="#2e7eadff" activeBar={<Rectangle fill="#00c2f3" stroke="#0d5b88ff" />} />
      <Line name={t('charts.trend', language as any)} type="monotone" dataKey="trend" stroke="#00c2f3" />
    </BarChart>
  );
};

export default YearBarChart;
