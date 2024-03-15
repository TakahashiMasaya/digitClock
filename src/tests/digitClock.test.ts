import digitClock from '@/components/digitClock.vue'
import { mount } from '@vue/test-utils'

describe('test', () => {
  it('snapshot', () => {
    const wrapper = mount(digitClock)
    expect(wrapper.element).toMatchSnapshot();
  });
});
