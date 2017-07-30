// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Comp from '../../components/Layout'

test('snapshot', () => {
  const x = shallow(<Comp />)
  expect(toJson(x)).toMatchSnapshot()
})
