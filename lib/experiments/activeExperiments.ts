/**
 * Active experiment registry for Fox Valley Rug Works.
 *
 * Each experiment maps slugs to variant configs. The page templates
 * check this registry to determine what to render.
 *
 * Managed manually — add/remove experiments here when starting/stopping.
 */

export interface VariantConfig {
  [key: string]: unknown;
}

interface ExperimentEntry {
  testSlugs: Record<string, VariantConfig>;
  controlSlugs: Record<string, VariantConfig>;
}

/** Currently active experiments. Add new experiments here. */
export const ACTIVE_EXPERIMENTS: Record<string, ExperimentEntry> = {
  // Example:
  // "exp-001-gallery-layout": {
  //   testSlugs: {
  //     "oriental-rug-cleaning": { galleryColumns: 3 },
  //   },
  //   controlSlugs: {
  //     "area-rug-cleaning": { galleryColumns: 2 },
  //   },
  // },
};

/**
 * Get the active variant config for a given page slug and experiment.
 * Returns null if the slug is not in the experiment.
 */
export function getActiveVariant(
  slug: string,
  experimentKey: string
): VariantConfig | null {
  const exp = ACTIVE_EXPERIMENTS[experimentKey];
  if (!exp) return null;

  if (slug in exp.testSlugs) return exp.testSlugs[slug];
  if (slug in exp.controlSlugs) return exp.controlSlugs[slug];
  return null;
}

/**
 * Get all slugs tracked across all active experiments.
 */
export function getAllTrackedSlugs(): string[] {
  const slugs = new Set<string>();
  for (const exp of Object.values(ACTIVE_EXPERIMENTS)) {
    for (const slug of Object.keys(exp.testSlugs)) slugs.add(slug);
    for (const slug of Object.keys(exp.controlSlugs)) slugs.add(slug);
  }
  return [...slugs];
}
