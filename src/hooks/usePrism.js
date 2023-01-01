import { Prism } from "@/js/modules/prism.js";

export default (code) => {
  console.log(Prism);
  return Prism.highlight(code, Prism.languages.javascript, 'javascript');
};