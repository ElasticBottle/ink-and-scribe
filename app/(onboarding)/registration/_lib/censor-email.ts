export function censorEmail(email: string): string {
  const parts = email.split("@");
  if (parts.length !== 2) return email;
  const [username, domain] = parts as [string, string];

  // Return original email if username is too short
  if (username.length <= 2) return email;

  // For usernames longer than 6 characters, show first 2 and last 2
  if (username.length > 6) {
    return `${username.slice(0, 2)}${"*".repeat(username.length - 4)}${username.slice(-2)}@${domain}`;
  }

  // For shorter usernames, show first and last only
  return `${username[0]}${"*".repeat(username.length - 2)}${username[username.length - 1]}@${domain}`;
}
