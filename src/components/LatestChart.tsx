import { BarChart, Bar,  Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { t, months } from '../i18n';

// #region Sample data
const data = [

    {
    name: 'Aug',
    InProgress: 2,
    Created: 72,
    Resolved: 68
  }, {
    name: 'Sep',
    InProgress: 10,
    Created: 406,
    Resolved: 147
  },
    {
    name: 'Oct',
    InProgress: 8,
    Created: 164,
    Resolved: 389
  },
    {
    name: 'Nov',
    InProgress: 38,
    Created: 85,
    Resolved: 127
  }
  
];

// #endregion
const LatestChart = ({ language = 'fr' }: { language?: 'en' | 'fr' }) => {
  const monthNames = months(language as any);
  const monthMap: Record<string, string> = {
    Jul: monthNames[6],
    Aug: monthNames[7],
    Sep: monthNames[8],
    Oct: monthNames[9],
  };
  return (
     
    <BarChart
      style={{ width: '100%', maxWidth: '1000px', maxHeight: '60vh', aspectRatio: 2 }}
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
 <Bar name={t('charts.InProgress', language as any)} dataKey="InProgress" fill="#00d791" activeBar={<Rectangle fill="#00d78fa1" stroke="#0d5b88ff" />} />
  <Bar name={t('charts.Created', language as any)} dataKey="Created" fill="#00c4f3" activeBar={<Rectangle fill="#00c2f3a9" stroke="#0d5b88ff" />} />
      <Bar name={t('charts.Resolved', language as any)} dataKey="Resolved" fill="#fc687b" activeBar={<Rectangle fill="#fc687c75" stroke="#0d5b88ff" />} />
    </BarChart>
  );
};

export default LatestChart;
