export type DinamicValueRequest =  Record<string,number | string> 

export type ShowErrorProps = {
    img: string
    title: string
    subtitle: string
}

export type Theme = 'primary' | 'secondary' | 'transparent' | 'alarm' | 'tertiary'
export type Size = 'small' | 'medium' | 'large' | 'extra-large'