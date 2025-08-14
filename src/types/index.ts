export interface User {
  id: number;
  email: string;
  role: 'admin' | 'tech';
  firstName: string;
  lastName: string;
  createdAt: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  status: 'unassigned' | 'assigned' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignedTo?: number;
  assignedToName?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface CreateProjectData {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  assignedTo?: number;
}

export interface UpdateProjectData {
  title?: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  assignedTo?: number;
  notes?: string;
  status?: 'unassigned' | 'assigned' | 'completed';
}

export interface CreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'tech';
}
