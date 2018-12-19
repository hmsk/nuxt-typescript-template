import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class PageBase extends Vue {
  head () {
    return {
      title: this.pageTitle,
      meta: [
        { name: "author", content: "Author Name" },
        { name: "description", property: "og:description", content: this.pageDescription, hid: "description" },
        { property: "og:title", content: this.pageTitle },
      ]
    };
  }

  get pageTitle (): string {
    return "{{ name }}";
  }

  get pageDescription (): string {
    return "{{ description }}";
  }
}
