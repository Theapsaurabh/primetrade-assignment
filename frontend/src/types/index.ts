export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Task {
  _id?: string;
  title: string;
  description?: string;
  status: 'pending' | 'in progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  user?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

// Add this to your existing types
export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}