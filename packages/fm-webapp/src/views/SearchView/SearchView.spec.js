import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

jest.mock('fm-components', () => ({
    SearchBar: 'SearchBarMocked',
    LayoutGrid: 'LayoutGridMocked'
}))

import SearchView from './SearchView'

describe('<SearchView />', () => {
  describe('@renders', () => {
    it('in default state', () => {
      const wrapper = shallow(<SearchView />)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })
  })
})
