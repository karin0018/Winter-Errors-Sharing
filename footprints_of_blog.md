---
title: footprints of blog
date: 2020-02-28 20:05:43
tags:
---

# footprints in memory of blog bugs  
<br />

## 纪念这个来之不易的小白博客  
>虽然我也不知道会不会继续写下去，有个开头倒也是好的：）

### 第一步
自然是主题的自带配置文件了
设置十分友好，体现了源代码作者的大气和niubility  
唯一要小本记下来的是<strong>外带文件的路径应该是以generate的文件夹为根目录,</strong>不是主题的文件夹。如  
>public/assets/alipay.jpg  

~~开头不要加/划线！！！不要加~~  
可以根据这个放到source的写作文件夹里

### 二是 主题配色大法
没能迅速破解布局和选择器的命名，分清楚左栏、右滑
弹出框、文章版面已经是折腾的好几天后了。
+ `left-col.ejs` + `main.css`里的`left-col ` 
  删去这个
```
<!-- <div class="overlay" style="background: <%= theme.style && theme.style.header ? theme.style.header : defaultBg %>"> -->
<!-- （上半部分）不设置背景颜色 -->
<div class="overlay" >
```

+ `mid-col.ejs` + `#article.show ` 
各种基础属性，怕忘掉，必须在哪里记一下，项目庞大头也大，还长草原
+ 。。。这里我要写什么来着，没有写下来打个草稿还真忘了
+ `layout.ejs ` 
里直接`<script>`引入网易云之类的js，也可以在外面编辑snow.js，可惜不知道为什么snow没有起作用，倒是weather-board挺好用

### 第三相册 开发ing
 
![原理贴个图](repository.jpg)  

 本地和远程仓库 `blogphoto/master/min_photos and photos`用来存放照片和Python文件（加载、压缩预览、排序图片）。然而运行不了[super]sigh[/super]   

 `source`文件夹下拿一个`photo`，建设相册的HTML，copy一下别人的样式表，却发现~~丑的一批~~  
<br />

### 第四五六七项 有力气再接着写
 > 实在不想回忆犯过的错和难受的debug了


