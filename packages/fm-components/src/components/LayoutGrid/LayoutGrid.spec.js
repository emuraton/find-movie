import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LayoutGrid from './LayoutGrid'

describe('<LayoutGrid />', () => {

  const initialProps = {
    data: {
      1: {
        id: '1',
        poster_path: 'myPath1'
      },
      2: {
        id: '2',
        poster_path: 'myPath2'
      },
      3: {
        id: '3',
        poster_path: 'myPath3'
      }
    }
  }

  describe('@renders', () => {
    it('in default state', () => {
      const wrapper = shallow(<LayoutGrid {...initialProps} />)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })

    it('with empty data', () => {
      const props = {
        ...initialProps,
        data: {}
      }
      const wrapper = shallow(<LayoutGrid {...props} />)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })
  })
})
