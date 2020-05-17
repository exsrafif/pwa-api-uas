import { mount } from '@vue/test-utils'
import Cuisine from '@/components/Cuisine.vue'

describe('BigCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Cuisine)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
