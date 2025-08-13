import Link from 'next/link'
import { forwardRef } from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, variant = 'primary', href, onClick, type = 'button', className = '', disabled = false }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center h-11 px-5 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'text-black bg-brand hover:opacity-90 focus:ring-brandA',
      secondary: 'border border-white/15 text-fg hover:border-white/30 focus:ring-white/20',
      ghost: 'text-fg hover:bg-white/5 focus:ring-white/20'
    }

    const classes = `${baseClasses} ${variants[variant]} ${className}`

    if (href) {
      return (
        <Link href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </Link>
      )
    }

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
