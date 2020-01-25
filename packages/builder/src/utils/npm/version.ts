import semver from 'semver';

export type SemanticVersionType = 'major' | 'minor' | 'patch';

export async function version(
  versionMap: Record<string, SemanticVersionType | string>,
): Promise<void> {
  //
}
