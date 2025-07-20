import type { Size, Theme } from "~/types/base"

export type BaseButtonProps =
  | {
      visualType?: 'button'
      size?: Extract<Size,'extra-large' | 'large' | 'medium' | 'small'>
      theme?: Extract<Theme,'primary' | 'secondary' | 'transparent' | 'alarm'>
    } & CommonProps
  | {
      visualType: 'text'
      size?: Extract<Size, 'large' | 'medium' | 'small'>
      theme?: Extract<Theme,'primary' | 'secondary' | 'tertiary'>
    } & CommonProps

type RequiresTextOrIcon =
  | { text: string; iconName?: string }
  | { text?: string; iconName: string }
  | { text: string; iconName: string }

type CommonProps = RequiresTextOrIcon & {
  iconPosition?: 'left' | 'right'
  loading?: boolean
  disabled?: boolean
  width?: 'fit-content' | 'auto'
}