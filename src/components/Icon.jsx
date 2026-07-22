import * as Lucide from 'lucide-react'

/**
 * Resolve a Lucide icon by string name (from the data file).
 * Falls back to a circle if the name is unknown.
 */
export default function Icon({ name, ...props }) {
  const Cmp = Lucide[name] || Lucide.Circle
  return <Cmp {...props} />
}
