import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { default as MultiSelect, MultiSelectGroup } from '.'
import { light } from '@charcoal-ui/theme'

describe('MultiSelect', () => {
  describe('in development mode', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development'
    })

    describe('when `<MultiSelect />` is used without `<MultiSelectGroup />`', () => {
      beforeEach(() => {
        // eslint-disable-next-line no-console
        console.error = jest.fn()

        render(
          <ThemeProvider theme={light}>
            <MultiSelect value="a" />
          </ThemeProvider>
        )
      })

      it('emits error message', () => {
        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalledWith(
          expect.stringMatching(
            /Perhaps you forgot to wrap with <MultiSelectGroup>/u
          )
        )
      })
    })
  })

  describe('none of the options selected', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement
    let option3: HTMLInputElement
    let allOptions: HTMLInputElement[]
    let parent: HTMLDivElement
    const childOnChange = jest.fn()
    const parentOnChange = jest.fn()

    beforeEach(() => {
      render(
        <TestComponent
          selected={[]}
          childOnChange={childOnChange}
          parentOnChange={parentOnChange}
        />
      )

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
      option3 = screen.getByDisplayValue('option3')
      allOptions = [option1, option2, option3]
      parent = screen.getByTestId('SelectGroup')
    })

    it('options have correct name', () => {
      allOptions.forEach((element) => expect(element.name).toBe('defaultName'))
    })

    it('parent have correct aria-label', () => {
      expect(parent.getAttribute('aria-label')).toBe('defaultAriaLabel')
    })

    it('none of the options are selected', () => {
      allOptions.forEach((element) => expect(element.checked).toBeFalsy())
    })

    describe('selecting option1', () => {
      it('childOnChange is called', () => {
        fireEvent.click(option1)
        expect(childOnChange).toHaveBeenCalledWith({
          value: 'option1',
          selected: true,
        })
      })

      it('parentOnChange is called', () => {
        fireEvent.click(option1)
        expect(parentOnChange).toHaveBeenCalledWith(['option1'])
      })
    })
  })

  describe('option2 is selected', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement
    let option3: HTMLInputElement
    const childOnChange = jest.fn()
    const parentOnChange = jest.fn()

    beforeEach(() => {
      render(
        <TestComponent
          selected={['option2']}
          childOnChange={childOnChange}
          parentOnChange={parentOnChange}
        />
      )

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
      option3 = screen.getByDisplayValue('option3')
    })

    it('only option2 is selected', () => {
      expect(option2.checked).toBeTruthy()
      ;[option1, option3].forEach((element) =>
        expect(element.checked).toBeFalsy()
      )
    })

    describe('selecting option1', () => {
      it('parentOnChange is called', () => {
        fireEvent.click(option1)
        expect(parentOnChange).toHaveBeenCalledWith(['option2', 'option1'])
      })
    })

    describe('de-selecting option2', () => {
      it('childOnChange is called', () => {
        fireEvent.click(option2)
        expect(childOnChange).toHaveBeenCalledWith({
          value: 'option2',
          selected: false,
        })
      })

      it('parentOnChange is called', () => {
        fireEvent.click(option2)
        expect(parentOnChange).toHaveBeenCalledWith([])
      })
    })
  })

  describe('the group is disabled', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement
    let option3: HTMLInputElement
    let allOptions: HTMLInputElement[]

    beforeEach(() => {
      render(<TestComponent selected={['option1']} parentDisabled={true} />)

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
      option3 = screen.getByDisplayValue('option3')
      allOptions = [option1, option2, option3]
    })

    it('all the options are disabled', () => {
      allOptions.forEach((element) => expect(element.disabled).toBeTruthy())
    })
  })

  describe('the group is readonly', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement
    let option3: HTMLInputElement
    let allOptions: HTMLInputElement[]

    beforeEach(() => {
      render(<TestComponent selected={['option1']} readonly={true} />)

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
      option3 = screen.getByDisplayValue('option3')
      allOptions = [option1, option2, option3]
    })

    it('all the options are disabled', () => {
      allOptions.forEach((element) => expect(element.disabled).toBeTruthy())
    })
  })

  describe('the group has error', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement
    let option3: HTMLInputElement
    let allOptions: HTMLInputElement[]

    beforeEach(() => {
      render(<TestComponent selected={['option1']} invalid={true} />)

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
      option3 = screen.getByDisplayValue('option3')
      allOptions = [option1, option2, option3]
    })

    it('all the options have `aria-invalid="true"`', () => {
      allOptions.forEach((element) =>
        expect(element.getAttribute('aria-invalid')).toBeTruthy()
      )
    })
  })

  describe('option1 is disabled', () => {
    let option1: HTMLInputElement
    let option2: HTMLInputElement

    beforeEach(() => {
      render(<TestComponent selected={[]} firstOptionDisabled={true} />)

      option1 = screen.getByDisplayValue('option1')
      option2 = screen.getByDisplayValue('option2')
    })

    it('only option1 is disabled', () => {
      expect(option1.disabled).toBeTruthy()
      expect(option2.disabled).toBeFalsy()
    })
  })
})

const TestComponent = ({
  selected,
  parentOnChange = () => {
    return
  },
  childOnChange,
  parentDisabled = false,
  readonly = false,
  invalid = false,
  firstOptionDisabled = false,
}: {
  selected: string[]
  parentOnChange?: (selected: string[]) => void
  childOnChange?: (payload: { value: string; selected: boolean }) => void
  parentDisabled?: boolean
  readonly?: boolean
  invalid?: boolean
  firstOptionDisabled?: boolean
}) => {
  return (
    <ThemeProvider theme={light}>
      <MultiSelectGroup
        name="defaultName"
        label="defaultAriaLabel"
        disabled={parentDisabled}
        onChange={parentOnChange}
        {...{ selected, readonly, invalid }}
      >
        <MultiSelect
          value="option1"
          disabled={firstOptionDisabled}
          onChange={childOnChange}
        >
          Option 1
        </MultiSelect>
        <MultiSelect value="option2" onChange={childOnChange}>
          Option 2
        </MultiSelect>
        <MultiSelect value="option3" onChange={childOnChange}>
          Option 3
        </MultiSelect>
      </MultiSelectGroup>
    </ThemeProvider>
  )
}
