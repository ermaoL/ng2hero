# Ng2hero

## 使用sass处理css的设置
1. 如果是新建项目, 可以使用 `ng new scssy-project --style=scss`, `scss`是格式名称, 也可以使用`sass`.
2. 如果已经建好项目, 可以执行设置命令 `ng set defaults.styleExt scss`, 这样以后使用`ng g component componentName`生成的css文件就是`scss`格式的.  

## node-sass的坑
出现`no such file or directory, scandir...`这个错误的时候, 重新build一下node-sass, 命令: `npm rebuild node-sass`
