import Prism from "@/js/modules/prism.js";

const imagesExtensions = ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi", "png", "gif", "ico", "webp", "tiff", "tif", "psd", "raw", "arw", "cr2", "nrw", "k25", "bmp", "dib", "heif", "heic", "jp2", "j2k", "jpf", "jpx", "jpm", "mj2"];


export default (file) => {
  if (imagesExtensions.includes(file.extension)) {
    return { type: String, data: `<img src="${file.path}" alt="">` };
  }

  let codeElement = document.createElement('pre');
  codeElement.className = 'line-numbers rainbow-braces match-braces'


  if (Prism.languages[file.extension]) {
    codeElement.innerHTML = `<code class="language-${file.extension}"></code>`;
    codeElement.querySelector('code').textContent = file.content;

    // codeElement = Prism.highlight(file.content, Prism.languages[file.extension], file.extension);
  } else {
    codeElement.innerHTML = `<code class="language-plain">${file.content}</code>`;
    codeElement.querySelector('code').textContent = file.content;
    // codeElement = Prism.highlight(file.content, Prism.languages.plain, 'plain');
  }

  Prism.highlightElement(codeElement.querySelector('code'))
  return { type: Node, data: codeElement };
};