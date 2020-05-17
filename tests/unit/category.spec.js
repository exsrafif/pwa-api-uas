import { mount } from '@vue/test-utils'
import Category from '@/components/Category.vue'

describe('BigCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Category)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
