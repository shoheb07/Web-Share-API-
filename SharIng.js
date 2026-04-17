async function shareFile() {
  const file = new File(['Hello World'], 'hello.txt', { type: 'text/plain' });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({
      files: [file],
      title: 'File Share',
      text: 'Sharing a file'
    });
  } else {
    alert('File sharing not supported');
  }
}
