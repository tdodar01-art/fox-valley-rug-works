'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import DataTable from '@/components/admin/DataTable';
import { useAuth } from '@/hooks/useAuth';
import { getActivityLogs, addActivityLog, ActivityLog, ActivityType } from '@/lib/firestore';
import { orderBy } from 'firebase/firestore';
import { format } from 'date-fns';

export default function ActivityPage() {
  const { user } = useAuth();
  const [activityData, setActivityData] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<ActivityType | 'all'>('all');
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    type: 'page_added' as ActivityType,
    description: '',
    project: 'Fox Valley Rug Works',
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getActivityLogs([orderBy('created_at', 'desc')]);
      setActivityData(data);
    } catch (error) {
      console.error('Error fetching activity data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchData();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSubmitting(true);
    try {
      await addActivityLog({
        ...formData,
        author: user.displayName || user.email || 'Unknown',
      });
      setFormData({
        date: format(new Date(), 'yyyy-MM-dd'),
        type: 'page_added',
        description: '',
        project: 'Fox Valley Rug Works',
      });
      setShowForm(false);
      await fetchData();
    } catch (error) {
      console.error('Error adding activity:', error);
      alert('Failed to add activity log entry');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredData = filterType === 'all'
    ? activityData
    : activityData.filter((item) => item.type === filterType);

  const activityTypes: ActivityType[] = [
    'page_added',
    'content_updated',
    'image_added',
    'seo_change',
    'ad_change',
    'other',
  ];

  if (!user) return null;

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)]">
            Activity Log
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-[var(--color-rust)] text-white rounded font-[family-name:var(--font-libre-franklin)] text-sm hover:bg-[var(--color-rust-dark)] transition-colors"
          >
            {showForm ? 'Cancel' : '+ Add Entry'}
          </button>
        </div>

        {/* Add Entry Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-gold)]/10 p-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-charcoal)] mb-4">
              New Activity Entry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border border-[var(--color-gold)]/20 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-2">
                    Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as ActivityType })}
                    className="w-full px-4 py-2 border border-[var(--color-gold)]/20 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]"
                    required
                  >
                    {activityTypes.map((type) => (
                      <option key={type} value={type}>
                        {type.replace('_', ' ').toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-2">
                  Project
                </label>
                <input
                  type="text"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-2 border border-[var(--color-gold)]/20 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-[var(--color-gold)]/20 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]"
                  placeholder="Describe the change or activity..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-[var(--color-rust)] text-white rounded font-[family-name:var(--font-libre-franklin)] text-sm hover:bg-[var(--color-rust-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Adding...' : 'Add Entry'}
              </button>
            </form>
          </div>
        )}

        {/* Filter */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)]">
            Filter:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded text-sm font-[family-name:var(--font-libre-franklin)] transition-colors ${
                filterType === 'all'
                  ? 'bg-[var(--color-rust)] text-white'
                  : 'bg-white border border-[var(--color-gold)]/20 text-[var(--color-charcoal)] hover:border-[var(--color-rust)]'
              }`}
            >
              All
            </button>
            {activityTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded text-sm font-[family-name:var(--font-libre-franklin)] transition-colors ${
                  filterType === type
                    ? 'bg-[var(--color-rust)] text-white'
                    : 'bg-white border border-[var(--color-gold)]/20 text-[var(--color-charcoal)] hover:border-[var(--color-rust)]'
                }`}
              >
                {type.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Timeline */}
        {loading ? (
          <div className="text-center py-12 text-[var(--color-slate)]">Loading...</div>
        ) : (
          <DataTable
            data={filteredData}
            columns={[
              { key: 'date', header: 'Date' },
              {
                key: 'type',
                header: 'Type',
                render: (row) => (
                  <span className="inline-block px-2 py-1 bg-[var(--color-cream)] rounded text-xs uppercase">
                    {row.type.replace('_', ' ')}
                  </span>
                ),
              },
              { key: 'description', header: 'Description' },
              { key: 'project', header: 'Project' },
              { key: 'author', header: 'Author' },
            ]}
            emptyMessage={filterType === 'all' ? 'No activity logged yet' : `No ${filterType.replace('_', ' ')} entries found`}
          />
        )}
      </div>
    </AdminLayout>
  );
}
