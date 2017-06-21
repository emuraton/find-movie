import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

jest.mock('fm-components', () => ({
    Header: 'HeaderMocked'
}))

import Main from './Main'

describe('<Main />', () => {
  describe('@renders', () => {
    it('in default state', () => {
      const wrapper = shallow(<Main />)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })
  })
})
