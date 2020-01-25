/**
 * Package information, uses for monorepo.
 */
export interface PackageInfo {
  /**
   * The name of this package.
   */
  name: string;

  /**
   * The version of this package.
   */
  version: string;

  /**
   * The dependencies in the same monorepo.
   */
  dependencies: string[];

  /**
   * The packages witch dependent this package in the same monorepo.
   */
  dependent: string[];
}

/**
 * Loads all packages and gets info in the monorepo
 * @param root the root path of the monorepo
 */
export async function loadAllPackage(root: string): Promise<PackageInfo[]> {

}