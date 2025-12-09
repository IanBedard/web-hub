
import { useMemo, useState } from 'react';
import { t } from '../i18n';

export type ProjectStatus = 'hot' | 'in progress' | 'completed';

export interface Project {
  id: string;
  // titleKey is an i18n key, e.g. 'projects.1'
  titleKey: string;
  status: ProjectStatus;
}

interface ProjectUpdateProps {
  projects?: Project[];
  maxHeight?: string;
  language?: 'en' | 'fr';
}

const defaultProjects: Project[] = [
  { id: '1', titleKey: 'projects.1', status: 'hot' },
  { id: '2', titleKey: 'projects.2', status: 'in progress' },
  { id: '3', titleKey: 'projects.3', status: 'in progress' },
  { id: '4', titleKey: 'projects.4', status: 'completed' },
  { id: '5', titleKey: 'projects.5', status: 'completed' }
];

export default function ProjectUpdate({ 
  projects = defaultProjects, 
  maxHeight = '480px',
  language = 'en'
}: ProjectUpdateProps) {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | ProjectStatus>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesStatus = statusFilter === 'all' ? true : p.status === statusFilter;
      const title = t(p.titleKey, language as any).toLowerCase();
      const matchesQuery = q === '' || title.includes(q) || p.status.toLowerCase().includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [projects, query, statusFilter]);

  const sTitle = t('projectUpdates.title', language);
  const sPlaceholder = t('projectUpdates.placeholder', language);
  const sAll = t('projectUpdates.all', language);
  const sHot = t('projectUpdates.hot', language);
  const sInProgress = t('projectUpdates.inProgress', language);
  const sCompleted = t('projectUpdates.completed', language);
  const sNoMatch = t('projectUpdates.noMatch', language);
  const sProjectName = t('table.projectName', language);
  const sStatus = t('table.status', language);

  return (
    <div className="bg-base-100 shadow">
  <div className="p-4 pb-2 text-xs opacity-60 tracking-wide">{sTitle}</div>

      <div className="p-4 pt-0 flex gap-2 items-center">
        <input
          type="text"
          placeholder={sPlaceholder}
          className="input input-sm input-bordered w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="select select-sm select-bordered"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as 'all' | ProjectStatus)}
        >
          <option value="all">{sAll}</option>
          <option value="hot">{sHot}</option>
          <option value="in progress">{sInProgress}</option>
          <option value="completed">{sCompleted}</option>
        </select>
      </div>

      <div
        className="overflow-y-auto"
        style={{ maxHeight }}
      >
        <table className="table w-full">
          <thead>
            <tr>
              <th>{sProjectName}</th>
              <th>{sStatus}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((project) => (
              <ProjectRow
                key={project.id}
                title={t(project.titleKey, language as any)}
                status={project.status}
                language={language}
              />
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center opacity-60 py-4">{sNoMatch}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProjectRow({ title, status, language = 'fr' }: { title: string; status: ProjectStatus; language?: 'en' | 'fr' }) {
  const getBadgeClass = () => {
    switch (status) {
      case 'hot':
        return 'badge-error';
      case 'in progress':
        return 'badge-warning';
      case 'completed':
        return 'badge-success';
      default:
        return 'badge-ghost';
    }
  };
  const getLabel = () => {
    const key = status === 'in progress' ? 'inProgress' : status;
    return t(`projectUpdates.${key}`, language as any);
  };

  return (
    <tr className="hover">
      
      <td className="font-medium">{title}</td>
      <td>
        <span className={`badge ${getBadgeClass()}`}>{getLabel()}</span>
      </td>
    </tr>
  );
}