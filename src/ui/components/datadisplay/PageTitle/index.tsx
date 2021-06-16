import { PageSubtitleStyled, PageTitleContainer, PageTitleStyled } from './styles'

interface PageTitleProps {
  title: string
  subtitle?: string | JSX.Element
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  )
}