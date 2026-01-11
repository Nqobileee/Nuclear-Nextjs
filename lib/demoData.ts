import {
  Activity,
  ComplianceAlert,
  DashboardStats,
  Delivery,
  Shipment
} from '@/models'

// Demo Shipments Data
export const demoShipments: Shipment[] = [
  {
    id: 'SHP-001',
    isotope: 'Tc-99m',
    origin: 'Oak Ridge, TN',
    destination: 'Memorial Hospital, NYC',
    status: 'In Transit',
    eta: '2 days',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'SHP-002',
    isotope: 'I-131',
    origin: 'Chalk River, ON',
    destination: 'Johns Hopkins, MD',
    status: 'At Customs',
    eta: '3 days',
    statusColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'SHP-003',
    isotope: 'Mo-99',
    origin: 'ANSTO, Australia',
    destination: 'Mayo Clinic, MN',
    status: 'Dispatched',
    eta: '5 days',
    statusColor: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'SHP-004',
    isotope: 'F-18',
    origin: 'Nordion, Canada',
    destination: 'Cleveland Clinic, OH',
    status: 'Delivered',
    eta: '1 day ago',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 'SHP-005',
    isotope: 'Ga-68',
    origin: 'IRE, Belgium',
    destination: 'Stanford Medical, CA',
    status: 'Pending',
    eta: '7 days',
    statusColor: 'bg-gray-100 text-gray-800'
  },
  {
    id: 'SHP-006',
    isotope: 'Lu-177',
    origin: 'NTP, South Africa',
    destination: 'Houston Methodist, TX',
    status: 'In Transit',
    eta: '4 days',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'SHP-007',
    isotope: 'Y-90',
    origin: 'McMaster, Canada',
    destination: 'Northwestern Memorial, IL',
    status: 'In Transit',
    eta: '3 days',
    statusColor: 'bg-blue-100 text-blue-800'
  }
]

// Demo Activities Data
export const demoActivities: Activity[] = [
  {
    id: 'ACT-001',
    time: '10:30 AM',
    event: 'Shipment SHP-001 cleared customs in Newark',
    type: 'customs'
  },
  {
    id: 'ACT-002',
    time: '09:15 AM',
    event: 'New procurement request submitted for Tc-99m',
    type: 'procurement'
  },
  {
    id: 'ACT-003',
    time: '08:45 AM',
    event: 'Delivery confirmed at Memorial Hospital',
    type: 'delivery'
  },
  {
    id: 'ACT-004',
    time: 'Yesterday',
    event: 'Compliance alert: License renewal due in 30 days',
    type: 'alert'
  },
  {
    id: 'ACT-005',
    time: 'Yesterday',
    event: 'Quality inspection approved for batch B-2024-001',
    type: 'approval'
  }
]

// Demo Compliance Alerts Data
export const demoComplianceAlerts: ComplianceAlert[] = [
  {
    id: 'CA-001',
    severity: 'warning',
    title: 'License Renewal Required',
    description: 'Import license US-2024 expires in 30 days. Begin renewal process.'
  },
  {
    id: 'CA-002',
    severity: 'info',
    title: 'Routine Quality Check',
    description: 'Scheduled quality inspection for next week - all preparations complete.'
  }
]

// Demo Deliveries Data
export const demoDeliveries: Delivery[] = [
  {
    id: 'DEL-001',
    date: new Date().toISOString().split('T')[0],
    time: '14:00',
    isotope: 'Tc-99m',
    destination: 'Memorial Hospital, NYC',
    status: 'upcoming'
  },
  {
    id: 'DEL-002',
    date: new Date().toISOString().split('T')[0],
    time: '16:30',
    isotope: 'Ga-68',
    destination: 'UCLA Medical Center, CA',
    status: 'upcoming'
  },
  {
    id: 'DEL-003',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    time: '09:00',
    isotope: 'I-131',
    destination: 'Johns Hopkins, MD',
    status: 'upcoming'
  },
  {
    id: 'DEL-004',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    time: '14:30',
    isotope: 'Mo-99',
    destination: 'Massachusetts General, MA',
    status: 'upcoming'
  },
  {
    id: 'DEL-005',
    date: new Date(Date.now() + 172800000).toISOString().split('T')[0], // Day after tomorrow
    time: '08:30',
    isotope: 'Lu-177',
    destination: 'Houston Methodist, TX',
    status: 'upcoming'
  },
  {
    id: 'DEL-006',
    date: new Date(Date.now() + 172800000).toISOString().split('T')[0], // Day after tomorrow
    time: '10:15',
    isotope: 'Tc-99m',
    destination: 'Mayo Clinic, MN',
    status: 'upcoming'
  }
]

// Demo Dashboard Stats
export const demoDashboardStats: DashboardStats = {
  activeShipments: {
    label: 'Active Shipments',
    value: '6',
    subtext: '85% on schedule',
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-600'
  },
  pendingRequests: {
    label: 'Pending Requests',
    value: '1',
    subtext: '1 urgent',
    color: 'from-amber-500 to-amber-600',
    textColor: 'text-amber-600'
  },
  complianceStatus: {
    label: 'Compliance Status',
    value: 'Warning',
    subtext: '2 items need attention',
    color: 'from-amber-500 to-amber-600',
    textColor: 'text-amber-600'
  },
  monthlyTotal: {
    label: 'Monthly Total',
    value: '24',
    subtext: 'Completed this month',
    color: 'from-purple-500 to-purple-600',
    textColor: 'text-purple-600'
  }
}
