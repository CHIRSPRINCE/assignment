# assignment
HTML、css练习

---
本项目主要达成目标：

    1.尽可能100%还原页面
    2.实现了底部卡片拖拽更换位置的功能
---


## 1 说明

    1.该项目使用webstorm工具编写
    2.用sass编写转译为css文件
  
## 2 项目总体分为三个部分

    1.头部
    2.hover显示部分
    3.卡片拖拽部分
    
## 3 js主要实现
    
### 3.1 头部向上滑动

  设置`scollTop`不为零时，改变头部的`padding`，实现header上移效果

  ```
  ps:兼容性的问题
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop
  ```
### 3.2 输入框动态效果

   给`input`添加`onclick`、`onBlur`事件监听，添加`.active`，调整width属性的值
   
   ps：classList也存在兼容性问题，在这里这次项目中没有封装^-^
### 3.3 hover部分切换效果：
   使用事件委托。给父元素绑定鼠标移动监听，将内层的`li`的事件委托给`ul`,事件响应通过冒泡机制触发父级元素绑定的事件，实现图片和卡片的切换。
### 3.4 拖拽

   （1）主要用到`ondragstart` `ondragover` `ondrop`事件以及`draggable`属性
   
   （2）`draggable`属性来设置该节点是否可进行拖拽，属性值为`true`时，可拖拽。`<a>` `<img>`标签默认可拖拽，该项目将`img`拖拽禁止，防止拖拽出现错误。
   
   （3）`ondrop` `ondragover`需要阻止默认事件（防止拖拽）
   
   （4）`ondragstart`事件内部写入要拖拽目标的数据
   
   （5） `ondrop`事件获取拖拽目标的数据，并将其插入要拖放的位置
   ```
    ev.target.parentNode.insertBefore(document.getElementById(data),ev.target)
   ```
      
  
  
  
  

