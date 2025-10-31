'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { useForm } from '@/hooks/useForm'
import { validateEmail } from '@/utils/validation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [message, setMessage] = useState('')

  const { values, errors, isSubmitting, setValue, handleSubmit, setErrors } = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {}
      
      if (!values.email) {
        errors.email = 'Email é obrigatório'
      } else if (!validateEmail(values.email)) {
        errors.email = 'Email inválido'
      }
      
      if (!values.password) {
        errors.password = 'Senha é obrigatória'
      }
      
      return errors
    },
    onSubmit: async (values) => {
      setMessage('')
      const response = await login({
        email: values.email,
        password: values.password
      })
      
      if (response.success) {
        router.push('/dashboard')
      } else {
        setMessage(response.message)
      }
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Entrar na sua <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">conta</span>
            </h1>
            <p className="text-gray-300">
              Acesse sua conta para começar a jogar valendo
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {message && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-center">{message}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
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

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={(e) => setValue('password', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="Sua senha"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-300">Lembrar de mim</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
                  Esqueceu a senha?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Não tem uma conta?{' '}
                <Link href="/register" className="text-purple-400 hover:text-purple-300 font-semibold">
                  Criar conta
                </Link>
              </p>
            </div>

            {/* Demo credentials */}
            <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
              <p className="text-sm text-gray-400 text-center mb-2">
                <strong>Credenciais de teste:</strong>
              </p>
              <p className="text-xs text-gray-500 text-center">
                Email: teste@teste.com<br />
                Senha: 123456
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
