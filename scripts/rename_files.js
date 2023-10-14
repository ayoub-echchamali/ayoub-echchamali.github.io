const fs = require('fs');
const path = require('path');

const photosDirectory = './public/images/'; // Set this to the path of your photos directory

fs.readdir(photosDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  let counter = 1;
  files
    .filter((file) => file.toLowerCase().endsWith('.jpeg'))
    .forEach((file) => {
      const oldPath = path.join(photosDirectory, file);
      const newFileName = `photo_${counter}.jpeg`;
      const newPath = path.join(photosDirectory, newFileName);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming ${file} to ${newFileName}:`, err);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
      counter++;
    });
    counter = 1;
    files
    .filter((file) => file.toLowerCase().endsWith('.jpg'))
    .forEach((file) => {
      const oldPath = path.join(photosDirectory, file);
      const newFileName = `photo_${counter}.jpg`;
      const newPath = path.join(photosDirectory, newFileName);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming ${file} to ${newFileName}:`, err);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
      counter++;
    });
});
