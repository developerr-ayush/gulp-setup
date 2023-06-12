# Gulp Setup

## Description
The Gulp Setup repository provides a basic folder structure and setup for a web project using Gulp and SCSS. It aims to simplify the initial setup process and enable users to quickly start developing their projects.

### Features
- File structure: The repository includes a pre-defined folder structure that follows common conventions for web development projects. This structure helps organize different types of files, such as HTML, CSS, JavaScript, and assets.
- Gulp workflow: Gulp is a task runner that automates common development tasks. This setup includes Gulp configuration files and predefined tasks to streamline the development workflow.
- Dart SCSS compilation: The setup utilizes Dart Sass, a powerful and feature-rich Sass compiler. It compiles SCSS (Sassy CSS) files into CSS, allowing you to leverage the benefits of Sass in your projects.
- Automatic public folder generation: The Gulp setup automatically generates a "public" folder where compiled CSS, JavaScript, and optimized assets are placed. This folder can be used for serving the project files in a production environment.
- Minification with PostCSS: The Gulp setup includes PostCSS, a CSS post-processor that can perform various optimizations. It minifies the CSS files, reducing their size and improving website loading times.
- Image conversion and compression to WebP: To optimize the website's performance, the Gulp setup converts and compresses images to the WebP format. WebP images provide higher compression rates without compromising image quality, resulting in faster loading times.
- Minification of JS : This setup uses terser to minifies javascrit which also leads to faster execuation of files

### Why Use Gulp Setup?
- Easy setup: The predefined folder structure and Gulp configuration files save you time and effort in setting up a basic project structure.
- Rapid development: Gulp automates repetitive tasks, such as Sass compilation, CSS minification, image conversion, and compression, which speeds up the development process.
- Code organization: The predefined folder structure helps keep your project organized and maintainable.
- Extensibility: Gulp Setup provides a foundation that you can build upon. You can easily add more Gulp tasks or modify the existing ones to fit your project's specific requirements.


## Installation
1. Download the repository:
   - Clone the repository using Git:
     ```
     git clone https://github.com/shahayush480/gulp-setup.git
     ```
   - Or download the ZIP file from the repository's GitHub page.


2. Prerequisites:
   - Ensure that you have Node.js installed on your machine. Gulp Setup requires Node.js version 14.x.x. If you don't have Node.js installed or have an older version, you can download it from [https://nodejs.org](https://nodejs.org) or use a version manager like nvm (Node Version Manager) to install and manage multiple versions of Node.js.

3. Install dependencies:
   - Open Git Bash or another recommended terminal (Git Bash works well with this setup).
   - Navigate to the project's root directory:
     ```
     cd gulp-setup
     ```
   - Make sure you have Node.js installed. If not, download and install it from [https://nodejs.org](https://nodejs.org).
   - Install the project's dependencies using npm:
     ```
     npm install
     ```
   - If you haven't installed Gulp CLI globally on your system, you can do so by running the following command:
     ```
     npm install -g gulp-cli
     ```
     This will install the Gulp CLI globally, allowing you to use the `gulp` command.

   - Note: If you encounter permission errors during the installation process, you may need to run the commands with administrator privileges (e.g., using `sudo` on macOS/Linux).

4. Configuration:
   - Update any necessary configuration settings in the project, such as the file paths or server settings, based on your requirements.



## Usage
1. Process HTML, SCSS, and JavaScript files, and start the server:
   - Run the following command in the terminal:
     ```
     gulp
     ```
   - This command will trigger the default Gulp task defined in the Gulp configuration files. It compiles the SCSS files into CSS, minifies the CSS using PostCSS, converts and compresses images to the WebP format, and starts a local development server.
   - The compiled CSS files will be generated in the "public/css" folder, and the WebP-optimized images will be placed in the "public/img" folder.


2. Access the project:
   - Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the project.
   - Any changes made to the source SCSS, HTML, or JavaScript files will trigger automatic compilation and browser reload.

3. Additional Gulp tasks:
   - Apart from the default task, the Gulp setup provides additional tasks that you can use individually:
     - `gulp compileScss`: Compiles the SCSS files into CSS without minification.
     - `gulp compressImage`: Compresses images without triggering other tasks.
     - `gulp processJs`: Processes JavaScript files without minification.
     - If you need additional commands, check the `gulpfile.mjs` file to configure them.

4. Production build:
   - To create a production-ready build of your project, run the following command in the terminal:
     ```
     gulp build
     ```
   - This task will compile SCSS, process HTML and Minify JavaScript files, and generate an optimized build in the "public" folder. The CSS files will be in the "public/css" folder, JavaScript files in the "public/js" folder, and images in the "public/img" folder. The font files will be in the "public/fonts" folder.



## Troubleshooting
- If you encounter any issues with the PowerShell terminal, it is recommended to use Git Bash or another terminal for a smoother experience.
