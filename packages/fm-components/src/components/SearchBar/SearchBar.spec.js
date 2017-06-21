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

    it('onSubmit form', () => {
      const wrapper = shallow(<SearchBar {...initialProps} />)
      expect(initialProps.onSubmit).not.toBeCalled()
      wrapper.find('.SearchBar-form').simulate('submit')
      expect(initialProps.onSubmit).toHaveBeenCalledTimes(1)
    })

    it('onSubmit via click button', () => {
      const wrapper = shallow(<SearchBar { ...initialProps} />)
      expect(initialProps.onSubmit).not.toBeCalled()
      wrapper.find('.SearchBar-button').simulate('click')
      expect(initialProps.onSubmit).toHaveBeenCalledTimes(1)
    })
  })
})
