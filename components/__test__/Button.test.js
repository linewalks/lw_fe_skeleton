import { mount } from 'enzyme'
import Button from '@components/Button'

let component

describe('Button', () => {
  beforeEach(() => {
    component = mount(
      <Button>
        test
      </Button>
    )
  })

  it('Button을 렌더링합니다', () => {
    expect(component).toHaveLength(1)
  })
})
