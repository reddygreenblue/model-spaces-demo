export enum FileType {
  Audio = "audio",
  Image = "image",
}

export const isValidFileType = (file: File, fileType: FileType): boolean => {
  switch (fileType) {
    case FileType.Audio:
      return file.type.startsWith("audio/");
    case FileType.Image:
      return file.type.startsWith("image/");
    default:
      return false;
  }
};
