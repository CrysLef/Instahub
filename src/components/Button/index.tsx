import { ReactNode, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
}

export function Button({ children, ...props }: ButtonProps )  {
    return(
        <S.Button {...props}>{children}</S.Button>
    )
}