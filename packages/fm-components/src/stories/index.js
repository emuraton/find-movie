import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchBar from '../components/SearchBar/SearchBar'

storiesOf('SearchBar', module)
  .add('default state', () => (
    <SearchBar onSubmit={() => console.log('hey')}/>
  ))
