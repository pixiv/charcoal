import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Radio, { RadioGroup } from '.'
import { light } from '@charcoal-ui/theme'

describe('Radio', () => {
  describe('__DEV__ mode', () => {
    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      global.__DEV__ = {}
    })

    describe('<Radio> is not surrounded by <RadioGroup>', () => {
      beforeEach(() => {
        console.error = jest.fn()

        render(
          <ThemeProvider theme={light}>
            <Radio value="option1" />
          </ThemeProvider>
        )
      })

      it('console.error()', () => {
        expect(console.error).toHaveBeenCalledWith(
          expect.stringMatching(/Perhaps you forgot to wrap with <RadioGroup>/u)
        )
      })
    })
  })

  describe('defaultValue is the first option', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement

    beforeEach(() => {
      render(<TestComponent defaultValue="option1" />)

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
    })

    it('the first <Radio> is checked', () => {
      expect(option1.checked).toBeTruthy()
      expect(option2.checked).toBeFalsy()
    })

    describe('clicking the second', () => {
      it('the second <Radio> is checked', () => {
        fireEvent.click(option2)

        expect(option1.checked).toBeFalsy()
        expect(option2.checked).toBeTruthy()
      })
    })
  })

  describe('<RadioGroup> is disabled', () => {
    it('all <Radio>s are disabled', () => {
      render(<TestComponent defaultValue="option1" radioGroupDisabled />)
      screen.getAllByRole<HTMLInputElement>('radio').forEach((element) => {
        expect(element.disabled).toBeTruthy()
      })
    })
  })

  describe('the first <Radio> is disabled', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement

    beforeEach(() => {
      render(<TestComponent defaultValue="option1" option1Disabled />)

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
      render(<TestComponent defaultValue="option1" readonly />)

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
  defaultValue,
  onChange = jest.fn(),
  radioGroupDisabled = false,
  readonly = false,
  hasError = false,
  option1Disabled = false,
  option2Disabled = false,
}: {
  defaultValue: string
  onChange?: () => void
  radioGroupDisabled?: boolean
  readonly?: boolean
  hasError?: boolean
  option1Disabled?: boolean
  option2Disabled?: boolean
}) {
  return (
    <ThemeProvider theme={light}>
      <RadioGroup
        label="テスト項目"
        name="test"
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={radioGroupDisabled}
        readonly={readonly}
        hasError={hasError}
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
