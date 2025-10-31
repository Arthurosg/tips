export interface User {
  id: string
  email: string
  username: string
  fullName: string
  age: number
  cpf: string
  phone: string
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  confirmPassword: string
  username: string
  fullName: string
  age: number
  cpf: string
  phone: string
  acceptTerms: boolean
}

export interface AuthResponse {
  success: boolean
  message: string
  user?: User
  token?: string
}
