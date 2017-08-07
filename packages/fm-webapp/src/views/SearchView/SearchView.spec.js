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
      const wrapper = shallow(<SearchView.WrappedComponent />)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })

    it('in with movies state', () => {
      const props = {
        movies: {
          1: {},
          2: {}
        }
      }
      const wrapper = shallow(<SearchView.WrappedComponent {...props}/>)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })
  })
})
