'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { RegisterData } from '@/types/auth'
import { useForm } from '@/hooks/useForm'
import { validateEmail, validatePassword, validateCPF, validatePhone, validateUsername, validateAge, formatCPF, formatPhone } from '@/utils/validation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuth()
  const [message, setMessage] = useState('')

  const { values, errors, isSubmitting, setValue, handleSubmit, setErrors } = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
      fullName: '',
      age: '',
      cpf: '',
      phone: '',
      acceptTerms: false
    },
    validate: (values) => {
      const errors: Record<string, string> = {}
      
      // Email validation
      if (!values.email) {
        errors.email = 'Email é obrigatório'
      } else if (!validateEmail(values.email)) {
        errors.email = 'Email inválido'
      }
      
      // Password validation
      if (!values.password) {
        errors.password = 'Senha é obrigatória'
      } else {
        const passwordValidation = validatePassword(values.password)
        if (!passwordValidation.isValid) {
          errors.password = passwordValidation.errors[0]
        }
      }
      
      // Confirm password validation
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirmação de senha é obrigatória'
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'As senhas não coincidem'
      }
      
      // Username validation
      if (!values.username) {
        errors.username = 'Nome de usuário é obrigatório'
      } else {
        const usernameValidation = validateUsername(values.username)
        if (!usernameValidation.isValid) {
          errors.username = usernameValidation.errors[0]
        }
      }
      
      // Full name validation
      if (!values.fullName) {
        errors.fullName = 'Nome completo é obrigatório'
      } else if (values.fullName.length < 2) {
        errors.fullName = 'Nome deve ter pelo menos 2 caracteres'
      }
      
      // Age validation
      const age = parseInt(values.age)
      if (!values.age) {
        errors.age = 'Idade é obrigatória'
      } else if (!validateAge(age)) {
        errors.age = 'Você deve ter pelo menos 18 anos'
      }
      
      // CPF validation
      if (!values.cpf) {
        errors.cpf = 'CPF é obrigatório'
      } else if (!validateCPF(values.cpf)) {
        errors.cpf = 'CPF inválido'
      }
      
      // Phone validation
      if (!values.phone) {
        errors.phone = 'Telefone é obrigatório'
      } else if (!validatePhone(values.phone)) {
        errors.phone = 'Telefone inválido'
      }
      
      // Terms validation
      if (!values.acceptTerms) {
        errors.acceptTerms = 'Você deve aceitar os termos de uso'
      }
      
      return errors
    },
    onSubmit: async (values) => {
      setMessage('')
      const payload: RegisterData = {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        username: values.username,
        fullName: values.fullName,
        age: parseInt(values.age),
        cpf: values.cpf,
        phone: values.phone,
        acceptTerms: values.acceptTerms
      }
      const response = await register(payload)
      
      if (response.success) {
        router.push('/dashboard')
      } else {
        setMessage(response.message)
      }
    }
  })

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value)
    setValue('cpf', formatted)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setValue('phone', formatted)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Criar sua <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">conta</span>
            </h1>
            <p className="text-gray-300">
              Junte-se à melhor plataforma de apostas em jogos
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {message && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-center">{message}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={values.fullName}
                    onChange={(e) => setValue('fullName', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Seu nome completo"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome de Usuário *
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={values.username}
                    onChange={(e) => setValue('username', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="seu_usuario"
                  />
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-400">{errors.username}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={(e) => setValue('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Senha *
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={(e) => setValue('password', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Mínimo 6 caracteres"
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Confirmar Senha *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    onChange={(e) => setValue('confirmPassword', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Confirme sua senha"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2">
                    Idade *
                  </label>
                  <input
                    type="number"
                    id="age"
                    value={values.age}
                    onChange={(e) => setValue('age', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="25"
                    min="18"
                    max="120"
                  />
                  {errors.age && (
                    <p className="mt-1 text-sm text-red-400">{errors.age}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-300 mb-2">
                    CPF *
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    value={values.cpf}
                    onChange={handleCPFChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="000.000.000-00"
                    maxLength={14}
                  />
                  {errors.cpf && (
                    <p className="mt-1 text-sm text-red-400">{errors.cpf}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={values.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={values.acceptTerms}
                  onChange={(e) => setValue('acceptTerms', e.target.checked)}
                  className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2 mt-1"
                />
                <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-300">
                  Eu aceito os{' '}
                  <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                    Termos de Uso
                  </Link>{' '}
                  e a{' '}
                  <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                    Política de Privacidade
                  </Link>
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-sm text-red-400">{errors.acceptTerms}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Criando conta...' : 'Criar Conta'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Já tem uma conta?{' '}
                <Link href="/login" className="text-purple-400 hover:text-purple-300 font-semibold">
                  Fazer login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
