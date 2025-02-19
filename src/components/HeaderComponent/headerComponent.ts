export default {
  name: "HeaderComponent",
  props: {
    message: String,
  },
  methods: {
    handleclick: (event: MouseEvent) => {
      console.log("header", event);
    }
  }
}
