export function resolveAssetPath(path) {
  if (!path) return path;
  return /^https?:\/\//.test(path) ? path : `${import.meta.env.BASE_URL}${path}`;
}
