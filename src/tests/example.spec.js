import HelloWorld from "../components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("test HelloWorld Component", () => {
  test("should ", () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: "hello,vue3",
      },
    });
    expect(wrapper.text()).toMatch("hello,vue3");
  });
});
