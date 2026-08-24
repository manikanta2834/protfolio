/**
 * Formats a mailto URL with pre-filled subject and body.
 */
export function formatMailto(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
