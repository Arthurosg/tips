export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []
  
  if (password.length < 6) {
    errors.push('A senha deve ter pelo menos 6 caracteres')
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra minúscula')
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra maiúscula')
  }
  
  if (!/(?=.*\d)/.test(password)) {
    errors.push('A senha deve conter pelo menos um número')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

export const validateCPF = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/\D/g, '')
  
  // Verifica se tem 11 dígitos
  if (cpf.length !== 11) return false
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpf)) return false
  
  // Validação do primeiro dígito verificador
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i)
  }
  let remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cpf.charAt(9))) return false
  
  // Validação do segundo dígito verificador
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i)
  }
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cpf.charAt(10))) return false
  
  return true
}

export const validatePhone = (phone: string): boolean => {
  // Remove caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '')
  
  // Verifica se tem 10 ou 11 dígitos (com DDD)
  return cleanPhone.length >= 10 && cleanPhone.length <= 11
}

export const validateUsername = (username: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []
  
  if (username.length < 3) {
    errors.push('O nome de usuário deve ter pelo menos 3 caracteres')
  }
  
  if (username.length > 20) {
    errors.push('O nome de usuário deve ter no máximo 20 caracteres')
  }
  
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errors.push('O nome de usuário pode conter apenas letras, números e underscore')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

export const validateAge = (age: number): boolean => {
  return age >= 18 && age <= 120
}

export const formatCPF = (cpf: string): string => {
  const cleanCPF = cpf.replace(/\D/g, '')
  return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const formatPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, '')
  if (cleanPhone.length === 11) {
    return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  } else if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  }
  return phone
}
