import { clsx } from 'clsx';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

export default function Button({ children, variant = 'primary', className, ...props }) {
  return (
    <button className={clsx(variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
