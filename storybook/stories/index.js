import React from 'react'
import { storiesOf } from '@storybook/react'
import { Ring, Ripple } from '../../src'

storiesOf('Spinners', module)
  .add('Ring', () => <Ring />)
  .add('Ripple', () => <Ripple />)