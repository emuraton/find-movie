import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchBar from './SearchBar'

describe('<SearchBar />', () => {

  const initialProps = {
    onSubmit: jest.fn()
  }

  describe('@renders', () => {
    it('in default state', () => {
      const wrapper = shallow(<SearchBar {...initialProps} />)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })
  })

  describe('@events', () => {
    beforeEach(() => jest.resetAllMocks())

    describe('onSubmit', () => {
      it('should call onSubmit()', () => {
        const wrapper = shallow(<SearchBar {...initialProps} />)
        expect(initialProps.onSubmit).not.toBeCalled()
        wrapper.find('.SearchBar-form').simulate('submit', { preventDefault: jest.fn()})
        expect(initialProps.onSubmit).toHaveBeenCalledTimes(1)
      })

      it('should all onSubmit() via onClick event', () => {
        const wrapper = shallow(<SearchBar { ...initialProps} />)
        expect(initialProps.onSubmit).not.toBeCalled()
        wrapper.find('.SearchBar-button').simulate('click', { preventDefault: jest.fn()})
        expect(initialProps.onSubmit).toHaveBeenCalledTimes(1)
      })
    })

    describe('onChange', () => {
      const testQuery = 'testQuery'
      it('should save event value', () => {
        const wrapper = shallow(<SearchBar {...initialProps} />)
        const instance = wrapper.instance()
        expect(instance.state).toMatchSnapshot()
        wrapper.find('.SearchBar-input').simulate('change', { target: { name: 'name', value: testQuery }})
        expect(instance.state).toMatchSnapshot()
      })
    })
  })
})
