const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// 获取当前目录下的所有子目录
const packages = path.resolve(__dirname,"../packages")
const subDirectories = fs.readdirSync(packages, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// 进入每个子目录并运行yarn指令
subDirectories.forEach(directory => {
  console.log(`Entering directory: ${directory}`);
  try {
    process.chdir(path.resolve(packages, directory));
    console.log(`Running yarn in directory: ${directory}`);
    execSync('yarn', { stdio: 'inherit' });
  } catch (err) {
    console.error(`Error running yarn in directory ${directory}: ${err}`);
  }
});
