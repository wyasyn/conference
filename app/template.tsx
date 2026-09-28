/**
 * Remounts on every route change (not on search param changes), so the
 * enter animation replays on each navigation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
