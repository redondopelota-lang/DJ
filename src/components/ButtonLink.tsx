import type { LinkAction } from '../types/content'

type ButtonLinkProps = {
  action: LinkAction
  variant?: 'primary' | 'secondary' | 'tertiary'
  className?: string
}

export function ButtonLink({
  action,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  const isExternal = action.href.startsWith('http')
  const classes = ['button-link', `button-link--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      className={classes}
      href={action.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      download={action.download}
    >
      {action.label}
    </a>
  )
}
