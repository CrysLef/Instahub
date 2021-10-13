import { ReactNode, HTMLAttributes } from "react"
import * as S from "./styles"

type Props = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

export function WhiteBox({ children, ...props }: Props) {
    return(
        <S.Container {...props}>
            {children}
        </S.Container>
    )
}