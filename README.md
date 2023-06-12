# Gulp Setup

## Description
This repository provides a basic folder structure and setup for a project using Gulp and Dart SCSS. The project allows users to compile SCSS into CSS and generates a public folder for use.

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
   - Open Git Bash or any Terminal (e.g., Git Bash, Command Prompt, or Terminal) [Git bash works well with this].
   - 
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

5. Additional Steps (if needed):
   - If there are any additional steps required to set up the project (e.g., creating a database, configuring environment variables), please provide instructions for those here.



## Usage
1. Compile SCSS and start the server:
   - Run the following command in the terminal:
     ```
     gulp
     ```
   - This command will compile the SCSS files into CSS and start the server. The compiled CSS files will be generated in the "public" folder.

2. Access the project:
   - Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the project.

## Troubleshooting
- If you encounter any issues with the PowerShell terminal, it is recommended to use Git Bash or another terminal for a smoother experience.

## License
This project is licensed under the [MIT License](LICENSE).
