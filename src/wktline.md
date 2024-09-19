---
outline: deep
---


# wktline 为一个轻量级项目管理软件

> 温馨提示：本项目只用于个人学习使用，不可商用，如需商用，请联系作者「微信：kr_39hd」授权！

### 体验地址（小水管，勿攻击，谢谢各位老铁～）
<http://121.40.42.56/>
用户名：wktline
密码：123456

## 为什么做这个项目

**业界项目管理软件奇贵，且很多附加功能对很多公司来说基本无用。以此为出发点，立志做一款精简又不简陋的作品**

## 技术栈

*   前端
    *   React(Umijs)
    *   Typescript
    *   tailwindcss
    *   antd5
    *   ahooks
    *   dnd-kit
    *   @ant-design/plots
    *   @icon-park/react
    *   @umlink/rc-gantt
    *   mitt
    *   react-quill
    *   tributejs
    *   openapi - 根据 swagger 生成 api
*   后端
    *   golang(GoFrame2.7)
    *   mysql8
    *   七牛云

## 大体功能如下

> 测试用例模块待完善

### 1. 项目管理

*   项目分组
*   项目状态：公开、私有
*   筛选：全部、我负责、我参与、我创建的项目

### 2. 项目任务管理

*   一键邀请用户
*   任务面板
    *   统一弹窗视图
        *   可修改任务类型、状态、负责人、优先级、时间、迭代、描述、子任务、计划工时、实际工时、附件、添加参与者、评论。
    *   显示视图
        *   卡片 - 可拖拽
        *   表格
        *   甘特图
    *   筛选：状态、类型、排序、归属、迭代、优先级等等。
*   测试用例
    *   开发中。。。
*   项目统计
    *   较为全面的项目数据统计
*   项目设置
    *   项目信息
    *   任务状态
    *   任务类型
    *   任务迭代
    *   用户管理

### 3. 工时管理

*   工时面板，显示工时详情
*   订阅用户，查看用户工时分布情况
*   增删工时

### 4. 日程展示

*   按日历分布展示自己的任务，显示状态和分布

### 5. 全局设置

*   用户管理
*   项目分组设置
*   全局任务优先级设置

### 6. 消息

*   任务相关消息通知

## 项目部分截图展示

### 登录页

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/f639bcce1ac045828a06089d43392a18~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=q%2BnG6ycx3%2FKC0g1o2UR3q0S84FI%3D)

### 项目列表

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1e63c7bc89be416bbb8abbb5e02466b6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=tXcZ4w4r7F8l17eZ%2FKTLoTQEb0s%3D)

### 任务卡片-状态

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/4b0770a1bb594cd2bc1cdf941bd3d8e8~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=qiG%2F1G05RDVLnvOkXb%2BCKlg4W6I%3D)

### 任务卡片-类型

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/cde1084e15704b53a8ab39f15ac3da4f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=6l9VEc10NzNmc6GWb9xpttkVWlU%3D)

### 任务卡片-优先级

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b99208a994644875b5ee4e49bb509081~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=tTaQd3gdJ8ISFUtdwGgbLfIaLk8%3D)

### 快捷添加任务

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e1b990fa95d54605ad9fd7b668f31022~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=cA4nBLGxvnvDZEwbJVPIkejpWoY%3D)

### 任务表格

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e615b1a16aac4e6ba849c42c4e2c7f1a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=jhGzH2%2FZdLxliTGL7IKgqcGkZGI%3D)

### 任务甘特图

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/aef60c5fb5b642af9629e0691f7925e6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=Ib%2BAsa2YKX2tXIP%2FD8dLNV9EhVk%3D)

### 邀请

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e8686c0ee3d644628f657dcde3a62aeb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=BH7qXYe8rzd%2FPdMSlRLgKROdHgA%3D)

### 任务详情

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/da69f47e03f74579a48cdcbe41d4436a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=bJSrpJaP047%2BV09ob5VsoXvR1b4%3D)

### 计划工时录入

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/9a0f95b677e541e5823c30fef6aec69c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=xIS7AtO0zNgU1atONpluTxnI1zI%3D)

### 实际工时录入

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/91550d8ee29f420d9d86646455df10d4~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=KjAg7hP8XkkDcHbL4xhFBxjU6dE%3D)

### 测试用例

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/80d5980f5bec4ca1840b6c19506585e1~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=MBTOqJyOOzKVPQL5PPqDuRH%2B3Vc%3D)

### 测试用例编辑

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1714f45d394b4eb2af054b7b114398cd~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=3khk4Jc5QxT0wO2HuyttVx%2BfYmI%3D)

### 项目任务统计

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e1262af973bf41449a1c8fe4450debee~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=EC2hB35beU9T4fhhFVuZHBsTTNg%3D)

### 项目基础信息设置

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/12e5b5d42ae94c558a95f9c4c966de8a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=aosSqYLF5AawALqxMx3osTiuIqM%3D)

### 项目任务状态管理

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/68f3a3b5177f4b03915fa8f9aed219fc~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=QhZp6bZtT8evRVR%2BRLravRZp068%3D)

### 项目任务类型管理

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/54e300c875e84d99a9748c2fe14cd423~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=BmaAsPf3jxvOTI5u791P4oCrLFk%3D)

### 项目任务迭代管理

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/88ec6a35a47140fc85694496b77fd4bf~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=uQZEnO%2B81UAO%2FbaSbpye5MjvIbM%3D)

### 项目用户管理

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/a46f8638e2d34c4a944dce033c8e1e73~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=iL0rpHegYW%2FfHzK7XLI9V4CKJjw%3D)

### 工时面板

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c88c00b7851a4bcf9ac07983e29e0a7e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=WQaXrqiI%2Fb2gO9NosLSNf9vrn4I%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d05ef3ff19ee4804ae688b1d12f86341~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=beQ2rEBdJs3i17odqvQ2x%2FoW2Mc%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/fa4f8ad906114aaba166c12fb05c04b3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=aMoE2XJqcA2cvk0kYSzp76%2BG%2FV8%3D)

### 工作日程表

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/7e034c95c1ef491a89cd316d45d11414~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=fJIp5TUNMHS9%2FwI%2FpF5HbrCcNWM%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/3955c13246d2405d9aa06b890d58bb0d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=qhqah%2FbI6S3P3p75qZvYz43ygdw%3D)

### 消息

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/7226a354ce454c429a2efd0e8d657ded~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=f7Qe3XHyphiZysGJg5wER6PuA7I%3D)

### 系统设置

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/22fbedb4eeca44ab886d11f800147540~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=FOYl9l0SZK6UKq6mAcbTk%2FS%2FwJk%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e0d2fa707dd34e4f9e4253bc8eb640e1~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=PwPFw4zq89xsUNWUa%2FRuzjTwA5E%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/cd6e666e767e4d09ae89d4d5c52de36d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=pOS3X%2FXiSFUFdT%2BdJDytRrImhYw%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/33570f0a9b364f37893990511eecb2ea~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgd2t0bGluZQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzMzMzM3NDk4NDg2Mjk3MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727357746&x-orig-sign=zMRnxMobIAGlMXtGucICBCsWPHA%3D)

## 开发注意事项

### 前端

*   使用 yarn 管理依赖
*   安装依赖，执行 `yarn`
*   更新 api,执行`yarn run genapi`

### 后端

> 请自行研究 go 环境搭建，此处不提供基础环境的搭建教程。详细步骤请移步 <https://goframe.org/>

*   获取数据 `sql` 文件
*   配置七牛云（也可自行实现其他 oss）
*   熟悉了解 [GoFrame](https://goframe.org/) 框架

## 项目仓库

前端：<https://github.com/umlink/wktline-client>

后端：<https://github.com/umlink/wktline-server>

> sql 文件请添加作者获取
