import { useState, useCallback } from 'react'

export interface FormState {
  values: Record<string, any>
  errors: Record<string, string>
  isSubmitting: boolean
}

export interface UseFormOptions {
  initialValues: Record<string, any>
  validate?: (values: Record<string, any>) => Record<string, string>
  onSubmit: (values: Record<string, any>) => Promise<void> | void
}

export function useForm({ initialValues, validate, onSubmit }: UseFormOptions) {
  const [state, setState] = useState<FormState>({
    values: initialValues,
    errors: {},
    isSubmitting: false
  })

  const setValue = useCallback((name: string, value: any) => {
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value
      },
      errors: {
        ...prev.errors,
        [name]: '' // Limpar erro ao alterar o valor
      }
    }))
  }, [])

  const setError = useCallback((name: string, error: string) => {
    setState(prev => ({
      ...prev,
      errors: {
        ...prev.errors,
        [name]: error
      }
    }))
  }, [])

  const setErrors = useCallback((errors: Record<string, string>) => {
    setState(prev => ({
      ...prev,
      errors
    }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    setState(prev => ({ ...prev, isSubmitting: true, errors: {} }))
    
    try {
      // Validação
      if (validate) {
        const validationErrors = validate(state.values)
        if (Object.keys(validationErrors).length > 0) {
          setState(prev => ({ ...prev, errors: validationErrors, isSubmitting: false }))
          return
        }
      }
      
      // Submissão
      await onSubmit(state.values)
    } catch (error) {
      console.error('Erro no formulário:', error)
    } finally {
      setState(prev => ({ ...prev, isSubmitting: false }))
    }
  }, [state.values, validate, onSubmit])

  const reset = useCallback(() => {
    setState({
      values: initialValues,
      errors: {},
      isSubmitting: false
    })
  }, [initialValues])

  return {
    values: state.values,
    errors: state.errors,
    isSubmitting: state.isSubmitting,
    setValue,
    setError,
    setErrors,
    handleSubmit,
    reset
  }
}
