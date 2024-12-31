/**
 * Converts a string to a URL-friendly slug.
 *
 * @param str - The input string to be converted to a slug.
 * @returns The input string converted to a slug.
 */
export function stringToSlug(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const cleanSpace = (spaceString: string) => {
  return spaceString.replace(/\s+/g, '');
};

