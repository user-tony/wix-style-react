export const simple = `
<FileUpload onChange={files => console.log(files)}>
  <Button>upload file</Button>
</FileUpload>
`;
export const withMultipleAndAccept = `
<FileUpload
  onChange={files => console.log(files)}
  multiple
  accept=".jpeg,.gif,.png"
>
  <AddItem>Add images only</AddItem>
</FileUpload>
`;
