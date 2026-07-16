import { useState, useMemo } from 'react'
import { vpnData } from '../data/vpnData'

export function useFilter() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All VPNs', icon: '🌐' },
    { id: 'streaming', label: 'Streaming', icon: '📺' },
    { id: 'gaming', label: 'Gaming', icon: '🎮' },
    { id: 'privacy', label: 'Privacy', icon: '🔒' },
  ]

  const filteredVpns = useMemo(() => {
    if (activeFilter === 'all') return vpnData
    return vpnData
      .filter(vpn => vpn.bestFor.includes(activeFilter))
      .sort((a, b) => b.score - a.score)
  }, [activeFilter])

  return { activeFilter, setActiveFilter, filteredVpns, filters }
}
