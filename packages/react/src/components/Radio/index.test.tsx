import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Radio, { RadioGroup } from '.'
import { light } from '@charcoal-ui/theme'

describe('Radio', () => {
  describe('development mode', () => {
    beforeEach(() => {
      global.process.env.NODE_ENV = 'development'
    })

    describe('<Radio> is not surrounded by <RadioGroup>', () => {
      beforeEach(() => {
        // eslint-disable-next-line no-console
        console.error = jest.fn()

        render(
          <ThemeProvider theme={light}>
            <Radio value="option1" />
          </ThemeProvider>
        )
      })

      it('console.error()', () => {
        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalledWith(
          expect.stringMatching(/Perhaps you forgot to wrap with <RadioGroup>/u)
        )
      })
    })
  })

  describe('value is the first option', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement
    const handleChange = jest.fn()

    beforeEach(() => {
      render(<TestComponent value="option1" onChange={handleChange} />)

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
    })

    it('the first <Radio> is checked', () => {
      expect(option1.checked).toBeTruthy()
      expect(option2.checked).toBeFalsy()
    })

    describe('clicking the second', () => {
      it('event handler is called', () => {
        fireEvent.click(option2)
        expect(handleChange).toHaveBeenCalledWith('option2')
      })
    })
  })

  describe('<RadioGroup> is disabled', () => {
    it('all <Radio>s are disabled', () => {
      render(<TestComponent value="option1" radioGroupDisabled />)
      screen.getAllByRole<HTMLInputElement>('radio').forEach((element) => {
        expect(element.disabled).toBeTruthy()
      })
    })
  })

  describe('the first <Radio> is disabled', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement

    beforeEach(() => {
      render(<TestComponent value="option1" option1Disabled />)

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
    })

    it('<input> in the first <Radio> is disabled', () => {
      expect(option1.checked).toBeTruthy()
    })

    it('No other <input> is disabled', () => {
      expect(option2.checked).toBeFalsy()
    })
  })

  describe('has readonly in <RadioGroup>', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement

    beforeEach(() => {
      render(<TestComponent value="option1" readonly />)

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
    })

    it('the first <Radio> is checked', () => {
      expect(option1.checked).toBeTruthy()
      expect(option1.disabled).toBeFalsy()
    })

    it('Non-first <Radio>s are disabled', () => {
      expect(option2.disabled).toBeTruthy()
    })
  })
})

function TestComponent({
  value,
  onChange = jest.fn(),
  radioGroupDisabled = false,
  readonly = false,
  invalid = false,
  option1Disabled = false,
  option2Disabled = false,
}: {
  value?: string
  onChange?: () => void
  radioGroupDisabled?: boolean
  readonly?: boolean
  invalid?: boolean
  option1Disabled?: boolean
  option2Disabled?: boolean
}) {
  return (
    <ThemeProvider theme={light}>
      <RadioGroup
        label="テスト項目"
        name="test"
        value={value}
        onChange={onChange}
        disabled={radioGroupDisabled}
        readonly={readonly}
        invalid={invalid}
      >
        <Radio value="option1" disabled={option1Disabled}>
          option1を選ぶ
        </Radio>
        <Radio value="option2" disabled={option2Disabled}>
          option2を選ぶ
        </Radio>
      </RadioGroup>
    </ThemeProvider>
  )
}
