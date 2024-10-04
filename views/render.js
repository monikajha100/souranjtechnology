const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Get all .ejs files from the current directory
const ejsFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.ejs'));

// Check if any .ejs files exist
if (ejsFiles.length === 0) {
  console.log('No .ejs files found in the directory.');
} else {
  // Loop through each .ejs file and convert it to .html
  ejsFiles.forEach(file => {
    const ejsFilePath = path.join(__dirname, file);
    try {
      const ejsContent = fs.readFileSync(ejsFilePath, 'utf-8');

      // Render the .ejs file to HTML
      const htmlContent = ejs.render(ejsContent, {});

      // Define the output .html file path
      const htmlFilePath = path.join(__dirname, file.replace('.ejs', '.html'));

      // Write the HTML output to a new .html file
      fs.writeFileSync(htmlFilePath, htmlContent);

      console.log(`Successfully converted ${file} to ${file.replace('.ejs', '.html')}`);
    } catch (err) {
      console.error(`Error processing file ${file}:`, err.message);
    }
  });
}
