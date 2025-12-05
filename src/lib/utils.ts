export const basePath = process.env.NODE_ENV === 'production' ? '/NewGiddingsSite' : '';

export function getImagePath(path: string): string {
  return `${basePath}${path}`;
}
