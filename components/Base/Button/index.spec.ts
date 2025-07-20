import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import BaseButton from './index.vue'


vi.mock('@/components/Base/Loader/index.vue', () => ({
  default: {
    name: 'BaseLoader',
    template: '<div data-testid="base-button-loader" />',
  },
}))

describe('BaseButton', () => {
  it('отображает текст, если передан', () => {
    const wrapper = mount(BaseButton, {
      props: { text: 'Нажми меня' },
    })

    const button = wrapper.get('[data-testid="base-button"]')
    expect(button.text()).toContain('Нажми меня')
  })

  it('отображает лоадер вместо иконки при loading = true', () => {
    const wrapper = mount(BaseButton, {
      props: { iconName: 'check', loading: true },
    })

    const loader = wrapper.find('[data-testid="base-button-loader"]')
    expect(loader.exists()).toBe(true)

    const icon = wrapper.find('[data-testid="base-button-icon"]')
    expect(icon.exists()).toBe(false)
  })

  it('добавляет классы visualType, theme, size и width', () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: 'Сохранить',
        visualType: 'button',
        theme: 'primary',
        size: 'medium',
        width: 'fit-content',
      },
    })

    const button = wrapper.get('[data-testid="base-button"]')
    const classes = button.classes()

    expect(classes).toContain('visual-button')
    expect(classes).toContain('theme-primary')
    expect(classes).toContain('size-medium')
    expect(classes).toContain('width-fit-content')
  })

  it('добавляет класс reverse при iconPosition = "right"', () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: 'С текстом',
        iconName: 'book',
        iconPosition: 'right',
      },
    })

    const button = wrapper.get('[data-testid="base-button"]')
    expect(button.classes()).toContain('reverse')
  })

  it('добавляет disabled-атрибут и класс при disabled = true', () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: 'Недоступно',
        disabled: true,
      },
    })

    const button = wrapper.get('[data-testid="base-button"]')
    expect(button.attributes('disabled')).toBeDefined()
    expect(button.classes()).toContain('disabled')
  })

  it('пробрасывает атрибут aria-label', () => {
    const wrapper = mount(BaseButton, {
      props: {
        iconName: 'check',
        'aria-label': 'Отправить форму',
      } as any, // bypass для нестандартных HTML-атрибутов
    })

    const button = wrapper.get('[data-testid="base-button"]')
    expect(button.attributes('aria-label')).toBe('Отправить форму')
  })
})
