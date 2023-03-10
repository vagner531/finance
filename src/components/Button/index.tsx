import { ReactNode, ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};
