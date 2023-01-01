import { useRoute } from 'vue-router';
export const renderFolder = (folderMap) => {
  const route = useRoute();

  let folderIcon, folderIconOpened;

  try {
    folderIcon = require(`@/assets/code-preview-icons/folder_type_${folderMap.name}.svg`);
    folderIconOpened = require(`@/assets/code-preview-icons/folder_type_${folderMap.name}_opened.svg`);
  } catch (error) {
    folderIcon = require(`@/assets/code-preview-icons/default_folder.svg`);
    folderIconOpened = require("@/assets/code-preview-icons/default_folder_opened.svg");
  }

  let result =
    /* html */
    `<div class="folder">
      <div class="folder__title fold">
        <img class="folder__icon folder__icon--open" src="${folderIconOpened}" alt="">
        <img class="folder__icon folder__icon--closed" src="${folderIcon}" alt="">
        <span>${folderMap.name}</span>
      </div>
      <div class="folder__files hidden">`;

  if (folderMap.name === "source") {
    result =
      /* html */
      `<div class="folder"> 
        <div class="folder__title fold">
          <img class="folder__icon folder__icon--open" src="${require("@/assets/code-preview-icons/default_root_folder_opened.svg")}" alt="">
          <img class="folder__icon folder__icon--closed" src="${require("@/assets/code-preview-icons/default_root_folder.svg")}" alt="">
          <span>${route.params.name}</span>
        </div>
        <div class="folder__files hidden">`;
  }

  for (const key in folderMap.entries) {
    const item = folderMap.entries[key];

    if (item.isFile) {
      let fileIcon;

      try {
        fileIcon = require(`@/assets/code-preview-icons/file_type_${item.ext}.svg`);
      } catch (error) {
        fileIcon = require(`@/assets/code-preview-icons/default_file.svg`);
      }

      let file = /* html */
        `<div class="file">
            <img class="file__icon" src="${fileIcon}" alt="">
            <span class="file__name" data-path="${item.path}">${item.name}</span>
          </div>`;

      result += file;
    } else {
      result += renderFolder(item);
    }
  }

  result += `</div></div>`;
  return result;
};