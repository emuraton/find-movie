import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import MovieDetails from './MovieDetails'

describe('<MovieDetails />', () => {
  describe('@renders', () => {
    it('in default state', () => {
      const wrapper = shallow(<MovieDetails />)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })

    it('in with movies state', () => {
      const props = {
        movie: {
          genres: ['action', 'drama'],
          poster_path: 'myPath',
          title: 'myTitle',
          vote_average: '10'
        },
        director: { name: 'aDirector' },
        cast: [{ name: 'name', profile_path: 'test' }]
      }
      const wrapper = shallow(<MovieDetails {...props}/>)
      expect(toJson(wrapper))
        .toMatchSnapshot()
    })
  })
})
