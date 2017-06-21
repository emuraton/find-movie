import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './Header'

describe('<Header />', () => {

  describe('@renders', () => {
    it('in default state', () => {
      const wrapper = shallow(<Header />)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })
  })
})
