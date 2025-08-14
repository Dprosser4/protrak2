import { useAuth } from '../lib/auth-context';
import { 
  FolderOpen, 
  CheckCircle, 
  Clock, 
  User,
  TrendingUp,
  Calendar
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      name: 'Total Projects',
      value: '24',
      icon: FolderOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Completed',
      value: '12',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'In Progress',
      value: '8',
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      name: 'Unassigned',
      value: '4',
      icon: User,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Project completed',
      project: 'Website Redesign',
      time: '2 hours ago',
      user: 'John Doe',
    },
    {
      id: 2,
      action: 'Project assigned',
      project: 'Mobile App Development',
      time: '4 hours ago',
      user: 'Jane Smith',
    },
    {
      id: 3,
      action: 'New project created',
      project: 'Database Migration',
      time: '1 day ago',
      user: 'Admin',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}: {activity.project}
                  </p>
                  <p className="text-sm text-gray-500">
                    by {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">This Week</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Projects completed</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">5</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">New projects</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">3</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">Active users</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
