'use client'

import { useState } from 'react'
import { Activity, Delivery } from '@/models'
import UpcomingDeliveries from './UpcomingDeliveries'
import RecentActivity from './RecentActivity'

interface DashboardDeliveryManagerProps {
  initialUpcomingDeliveries: Delivery[]
  initialRecentActivity: Activity[]
  initialCompletedDeliveries: Delivery[]
}

export default function DashboardDeliveryManager({
  initialUpcomingDeliveries,
  initialRecentActivity,
  initialCompletedDeliveries
}: DashboardDeliveryManagerProps) {
  const [completedDeliveries, setCompletedDeliveries] = useState<Delivery[]>(initialCompletedDeliveries)

  const handleDeliveryCompleted = (delivery: Delivery) => {
    // Add to completed deliveries
    setCompletedDeliveries(prev => [delivery, ...prev])
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
      {/* Compliance Alerts - This will be passed as children */}
      
      {/* Upcoming Deliveries */}
      <UpcomingDeliveries 
        initialDeliveries={initialUpcomingDeliveries}
        onDeliveryCompleted={handleDeliveryCompleted}
      />
    </div>
  )
}
