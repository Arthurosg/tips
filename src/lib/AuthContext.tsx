'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User, AuthState, LoginCredentials, RegisterData, AuthResponse } from '@/types/auth'

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<AuthResponse>
  register: (data: RegisterData) => Promise<AuthResponse>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simular verificação de token no localStorage
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token')
        const userData = localStorage.getItem('user_data')
        
        if (token && userData) {
          // Em um app real, você validaria o token com o backend
          setUser(JSON.parse(userData))
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error)
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user_data')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      setIsLoading(true)
      
      // Simular chamada para API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock de validação (em produção, isso viria do backend)
      if (credentials.email === 'teste@teste.com' && credentials.password === '123456') {
        const mockUser: User = {
          id: '1',
          email: credentials.email,
          username: 'teste123',
          fullName: 'Usuário Teste',
          age: 25,
          cpf: '123.456.789-00',
          phone: '(11) 99999-9999',
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
        const token = 'mock-jwt-token'
        
        localStorage.setItem('auth_token', token)
        localStorage.setItem('user_data', JSON.stringify(mockUser))
        setUser(mockUser)
        
        return {
          success: true,
          message: 'Login realizado com sucesso!',
          user: mockUser,
          token
        }
      } else {
        return {
          success: false,
          message: 'Email ou senha incorretos'
        }
      }
    } catch (error) {
      return {
        success: false,
        message: 'Erro ao fazer login. Tente novamente.'
      }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: RegisterData): Promise<AuthResponse> => {
    try {
      setIsLoading(true)
      
      // Validações básicas
      if (data.password !== data.confirmPassword) {
        return {
          success: false,
          message: 'As senhas não coincidem'
        }
      }
      
      if (data.age < 18) {
        return {
          success: false,
          message: 'Você deve ter pelo menos 18 anos para se cadastrar'
        }
      }
      
      if (!data.acceptTerms) {
        return {
          success: false,
          message: 'Você deve aceitar os termos de uso'
        }
      }
      
      // Simular chamada para API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: data.email,
        username: data.username,
        fullName: data.fullName,
        age: data.age,
        cpf: data.cpf,
        phone: data.phone,
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      const token = 'mock-jwt-token-new-user'
      
      localStorage.setItem('auth_token', token)
      localStorage.setItem('user_data', JSON.stringify(newUser))
      setUser(newUser)
      
      return {
        success: true,
        message: 'Conta criada com sucesso!',
        user: newUser,
        token
      }
    } catch (error) {
      return {
        success: false,
        message: 'Erro ao criar conta. Tente novamente.'
      }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
    setUser(null)
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData, updatedAt: new Date() }
      setUser(updatedUser)
      localStorage.setItem('user_data', JSON.stringify(updatedUser))
    }
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateUser
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
