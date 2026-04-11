import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  QueryConstraint,
} from 'firebase/firestore';
import { db } from './firebase';

// Type definitions for Firestore collections

export interface GSCQuery {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GSCPage {
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GSCSnapshot {
  id?: string;
  date: string;
  top_queries: GSCQuery[];
  top_pages: GSCPage[];
  total_clicks: number;
  total_impressions: number;
  pulled_at: Timestamp;
}

export interface AdsCampaign {
  name: string;
  spend: number;
  clicks: number;
  conversions: number;
}

export interface AdsSnapshot {
  id?: string;
  date: string;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  cost_per_conversion: number;
  campaigns: AdsCampaign[];
  pulled_at: Timestamp;
}

export type ActivityType =
  | 'page_added'
  | 'content_updated'
  | 'image_added'
  | 'seo_change'
  | 'ad_change'
  | 'other';

export interface ActivityLog {
  id?: string;
  date: string;
  type: ActivityType;
  description: string;
  project: string;
  author: string;
  created_at: Timestamp;
}

export type PageType = 'homepage' | 'rug-type' | 'service' | 'process' | 'city' | 'other';

export interface SitePage {
  id?: string;
  url: string;
  title: string;
  type: PageType;
  created_at: Timestamp;
  last_updated: Timestamp;
}

// Helper functions

export async function getGSCSnapshots(constraints: QueryConstraint[] = []): Promise<GSCSnapshot[]> {
  if (!db) return [];
  const q = query(collection(db, 'gsc_snapshots'), ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GSCSnapshot));
}

export async function getAdsSnapshots(constraints: QueryConstraint[] = []): Promise<AdsSnapshot[]> {
  if (!db) return [];
  const q = query(collection(db, 'ads_snapshots'), ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AdsSnapshot));
}

export async function getActivityLogs(constraints: QueryConstraint[] = []): Promise<ActivityLog[]> {
  if (!db) return [];
  const q = query(collection(db, 'activity_log'), ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ActivityLog));
}

export async function getSitePages(constraints: QueryConstraint[] = []): Promise<SitePage[]> {
  if (!db) return [];
  const q = query(collection(db, 'site_pages'), ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as SitePage));
}

export async function addActivityLog(data: Omit<ActivityLog, 'id' | 'created_at'>): Promise<string> {
  if (!db) throw new Error('Firebase not initialized');
  const docRef = await addDoc(collection(db, 'activity_log'), {
    ...data,
    created_at: Timestamp.now(),
  });
  return docRef.id;
}

export async function addSitePage(data: Omit<SitePage, 'id' | 'created_at' | 'last_updated'>): Promise<string> {
  if (!db) throw new Error('Firebase not initialized');
  const now = Timestamp.now();
  const docRef = await addDoc(collection(db, 'site_pages'), {
    ...data,
    created_at: now,
    last_updated: now,
  });
  return docRef.id;
}

export async function updateSitePage(id: string, data: Partial<SitePage>): Promise<void> {
  if (!db) throw new Error('Firebase not initialized');
  const docRef = doc(db, 'site_pages', id);
  await updateDoc(docRef, {
    ...data,
    last_updated: Timestamp.now(),
  });
}

export async function deleteSitePage(id: string): Promise<void> {
  if (!db) throw new Error('Firebase not initialized');
  const docRef = doc(db, 'site_pages', id);
  await deleteDoc(docRef);
}

// Date range query helpers
export function getDateRangeConstraints(startDate: string, endDate: string): QueryConstraint[] {
  return [
    where('date', '>=', startDate),
    where('date', '<=', endDate),
    orderBy('date', 'desc'),
  ];
}
