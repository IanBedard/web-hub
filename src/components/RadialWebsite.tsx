import { Pie, PieChart, Tooltip, Legend } from 'recharts';
import { t } from '../i18n';

// #region Sample data (use ids for i18n keys)
const data = [
  { id: 'webpages', value: 6309, fill: '#003b5c' },
  { id: 'images', value: 1725, fill: '#0d5b88ff' },
  { id: 'testingFiles', value: 722, fill: '#00c2f3' },
  { id: 'documents', value: 87, fill: '#27a0bfff' },
  { id: 'misc', value: 331, fill: '#c6eafb' },
];

// #endregion
export default function RadialWebsite({ isAnimationActive = true, language = 'fr' }: { isAnimationActive?: boolean; language?: 'en' | 'fr' }) {
  const displayData = data.map((d) => ({
    name: t(`charts.${d.id}`, language as any),
    value: d.value,
    fill: d.fill,
  }));

  return (
    <PieChart style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
      <Pie
        data={displayData}
        innerRadius="70%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="5%"
        fill="#00c2f3"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
