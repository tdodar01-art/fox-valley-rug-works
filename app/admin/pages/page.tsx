'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import DataTable from '@/components/admin/DataTable';
import { useAuth } from '@/hooks/useAuth';
import { getSitePages, addSitePage, updateSitePage, deleteSitePage, SitePage, PageType } from '@/lib/firestore';
import { orderBy } from 'firebase/firestore';
import { format } from 'date-fns';

export default function PagesPage() {
  const { user } = useAuth();
  const [pagesData, setPagesData] = useState<SitePage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPage, setEditingPage] = useState<SitePage | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    type: 'other' as PageType,
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getSitePages([orderBy('created_at', 'desc')]);
      setPagesData(data);
    } catch (error) {
      console.error('Error fetching pages data:', error);
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
      if (editingPage) {
        await updateSitePage(editingPage.id!, formData);
      } else {
        await addSitePage(formData);
      }
      setFormData({ url: '', title: '', type: 'other' });
      setShowForm(false);
      setEditingPage(null);
      await fetchData();
    } catch (error) {
      console.error('Error saving page:', error);
      alert('Failed to save page');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (page: SitePage) => {
    setEditingPage(page);
    setFormData({
      url: page.url,
      title: page.title,
      type: page.type,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this page?')) return;

    try {
      await deleteSitePage(id);
      await fetchData();
    } catch (error) {
      console.error('Error deleting page:', error);
      alert('Failed to delete page');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingPage(null);
    setFormData({ url: '', title: '', type: 'other' });
  };

  const pageTypes: PageType[] = ['homepage', 'rug-type', 'service', 'process', 'city', 'other'];

  if (!user) return null;

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)]">
            Site Pages Registry
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-[var(--color-rust)] text-white rounded font-[family-name:var(--font-libre-franklin)] text-sm hover:bg-[var(--color-rust-dark)] transition-colors"
          >
            {showForm ? 'Cancel' : '+ Add Page'}
          </button>
        </div>

        {/* Add/Edit Page Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-gold)]/10 p-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-charcoal)] mb-4">
              {editingPage ? 'Edit Page' : 'Add New Page'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-2">
                  URL
                </label>
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-4 py-2 border border-[var(--color-gold)]/20 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]"
                  placeholder="/rug-cleaning/crystal-lake"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-[var(--color-gold)]/20 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]"
                  placeholder="Rug Cleaning in Crystal Lake, IL"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-2">
                  Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as PageType })}
                  className="w-full px-4 py-2 border border-[var(--color-gold)]/20 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]"
                  required
                >
                  {pageTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 bg-[var(--color-rust)] text-white rounded font-[family-name:var(--font-libre-franklin)] text-sm hover:bg-[var(--color-rust-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Saving...' : editingPage ? 'Update Page' : 'Add Page'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 bg-white border border-[var(--color-gold)]/20 text-[var(--color-charcoal)] rounded font-[family-name:var(--font-libre-franklin)] text-sm hover:border-[var(--color-rust)] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Pages Table */}
        {loading ? (
          <div className="text-center py-12 text-[var(--color-slate)]">Loading...</div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-gold)]/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--color-cream)] border-b border-[var(--color-gold)]/10">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] uppercase tracking-wider">
                      URL
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] uppercase tracking-wider">
                      Last Updated
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-gold)]/10">
                  {pagesData.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-[var(--color-slate)]">
                        No pages registered yet
                      </td>
                    </tr>
                  ) : (
                    pagesData.map((page) => (
                      <tr key={page.id} className="hover:bg-[var(--color-cream)]/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-[var(--color-charcoal)]">{page.url}</td>
                        <td className="px-6 py-4 text-sm text-[var(--color-charcoal)]">{page.title}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-block px-2 py-1 bg-[var(--color-cream)] rounded text-xs">
                            {page.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-[var(--color-slate)]">
                          {page.last_updated?.toDate ? format(page.last_updated.toDate(), 'MMM d, yyyy') : 'N/A'}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(page)}
                              className="text-[var(--color-rust)] hover:text-[var(--color-rust-dark)] font-[family-name:var(--font-libre-franklin)] text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(page.id!)}
                              className="text-red-600 hover:text-red-800 font-[family-name:var(--font-libre-franklin)] text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
