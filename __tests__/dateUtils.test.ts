// Simple test script to verify date utility functions
import { 
  formatDeliveryDateTime, 
  isDeliveryPast, 
  combineDateAndTime,
  formatRelativeTime 
} from '../lib/dateUtils'

console.log('=== Testing Date Utilities ===\n')

// Test 1: Format dates
const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(today.getDate() + 1)
const dayAfter = new Date(today)
dayAfter.setDate(today.getDate() + 2)

console.log('1. Testing formatDeliveryDateTime:')
console.log('   Today at 14:30:', formatDeliveryDateTime(today.toISOString().split('T')[0], '14:30:00'))
console.log('   Tomorrow at 09:00:', formatDeliveryDateTime(tomorrow.toISOString().split('T')[0], '09:00:00'))
console.log('   Day after at 16:45:', formatDeliveryDateTime(dayAfter.toISOString().split('T')[0], '16:45:00'))

// Test 2: Check if delivery is past
console.log('\n2. Testing isDeliveryPast:')
const pastTime = new Date(today)
pastTime.setHours(today.getHours() - 2)
const futureTime = new Date(today)
futureTime.setHours(today.getHours() + 2)

console.log('   Past delivery (2 hours ago):', isDeliveryPast(pastTime.toISOString().split('T')[0], `${pastTime.getHours()}:${pastTime.getMinutes()}`))
console.log('   Future delivery (2 hours ahead):', isDeliveryPast(futureTime.toISOString().split('T')[0], `${futureTime.getHours()}:${futureTime.getMinutes()}`))

// Test 3: Combine date and time
console.log('\n3. Testing combineDateAndTime:')
const combined = combineDateAndTime('2026-01-10', '14:30:00')
console.log('   Combined date/time:', combined.toString())

// Test 4: Format relative time
console.log('\n4. Testing formatRelativeTime:')
const justNow = new Date()
const minutesAgo = new Date(today.getTime() - 5 * 60 * 1000)
const hoursAgo = new Date(today.getTime() - 3 * 60 * 60 * 1000)
const daysAgo = new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000)

console.log('   Just now:', formatRelativeTime(justNow))
console.log('   5 minutes ago:', formatRelativeTime(minutesAgo))
console.log('   3 hours ago:', formatRelativeTime(hoursAgo))
console.log('   2 days ago:', formatRelativeTime(daysAgo))

console.log('\n✓ All tests completed!')
