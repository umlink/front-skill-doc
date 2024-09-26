---
outline: deep
---

# CSS基础扫盲

> 部分内容来自网络，如有侵权请联系删除

本章节主要介绍一些相对基础的信息，也有一些学习侧重点标注，方便大家快速上手。

## 一、CSS选择器

### 基础选择器

> Tips：项目中常见的 `:root {}` 等同于 `html {}`

- 标签选择器：`h1`
- 类选择器：`.checked`
- ID 选择器：`#picker`
- 通配选择器：`*`

### 属性选择器

- `[attr]`：指定属性的元素；
- `[attr=val]`：属性等于指定值的元素；
- `[attr*=val]`：属性包含指定值的元素；
- `[attr^=val]` ：属性以指定值开头的元素；
- `[attr$=val]`：属性以指定值结尾的元素；
- `[attr~=val]`：属性包含指定值(完整单词)的元素(不推荐使用)；
- `[attr|=val]`：属性以指定值(完整单词)开头的元素(不推荐使

### 组合选择器

- 后代选择器：`div p {}`
- 子元素选择器：`div > p {}`
- 相邻兄弟选择器：`h1 + p {}`
- 通用兄弟选择器：`h1 ~ p {}`

## 二、CSS优先级

> 内敛 > id > class > 标签 > 通配符

- 相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高
- 样式应用时，css会先查看规则的权重（!important），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性

## 三、CSS伪类与伪元素

> CSS3 标准中伪类统一使用单冒号 `:`，伪元素统一使用双冒号 `::`。为适配就浏览器兼容性，浏览器需要同时支持旧的已经存在的伪元素写法，
> 比如:first-line、:first-letter、:before、:after等

### 伪类

- `:link` a 标签默认状态
- `:visited` a 标签点击后状态
- `:hover` a 标签悬浮状态
- `:active` a 标签激活态
- `:empty` 元素为空
- `:default` input、button（checkbox,radio）、option 的默认状态
- `:checked` radio、checkbox 选中状态
- `:disabled` input 不可用状态
- `:not(selector)` 元素不包含某个子元素
- `:nth-child(n)` (n = 1,2,3...，2n,2n+1...)第 n 个元素
- `:nth-last-child(n)` 倒数第 n 个元素
- `:first-child` (n = 1,2,3...，2n,2n+1...) 第一个元素
- `:last-child` 最后一个元素
- `:only-child` 只有一个子元素
- `:nth-of-type(n)` (n = 1,2,3...，2n,2n+1...) 第 n 个指定类型的元素
- `:nth-last-of-type(n)` 倒数第 n 个指定类型的元素
- `:first-of-type` (n = 1,2,3...，2n,2n+1...) 第一个指定类型的元素
- `:last-of-type` (n = 1,2,3...，2n,2n+1...) 最后一个指定类型的元素
- `:only-of-type` 只有一个指定类型的元素
- `:focus` 表示获得焦点的元素（如表单输入）。当用户点击或轻触一个元素或使用键盘的 Tab 键选择它时，它会被触发
- `:focus-visible` 聚焦状态依赖于 `:focus`
- `:focus-within` 当元素或其任意后代元素被聚焦时，将匹配该元素

>更伪类和详细介绍请参考 [https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

### 伪元素

- `::before` 在元素的内容之前插入内容
- `::after` 在元素的内容之后插入内容
- `::first-letter` 元素的首字母
- `::first-line` 元素的首行
- `::selection` 元素被选中时的样式
- `::marker` 列表项标记
- `::backdrop` 元素背景的遮罩层
- `::spelling-error` 拼写错误的单词
- `::placeholder` 输入框的提示文字

>
更多伪元素和详细介绍请参考 [https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)

## 四、常用属性值

> 所有属性都可以设置 `inherit` 继承父元素属性值

### display 有哪些常用值？说明他们的作用

- `none` 隐藏元素，不占位置（不在文档 doc 中，不参与渲染）
- `block` 块级元素，独占一行 (div、h、p...标签默认值)
- `inline` 行内元素，不独占一行 (a标签默认值)
- `inline-block` 行内块元素，不独占一行，可以设置宽高
- `flex` 弹性布局（见 flex 单独一节）
- `inline-flex` 弹性布局，由内容撑开（见 flex 单独一节）
- `grid` 网格布局（见 grid 单独一节）
- `inline-grid` 网格布局，由内容撑开（见 grid 单独一节）
- `table` 表格
- `list-item` 列表项

特别关注的几个值

- `inherit` 继承父元素属性值
- `initial` 用来将元素的 display 属性恢复到其默认值（如：div 标签的默认 display 值是 block）
- `revert` 会将元素的 display 属性重置为浏览器的默认样式，或者它从父元素继承的样式，它与 initial 的区别在于：initial
  强制将样式重置为初始值（大部分情况下与浏览器默认行为相同），而 revert 允许继承样式生效
- `unset` 用来将元素的 display 属性重置为浏览器的默认样式
    - 如果属性是继承属性（例如 color、font-size 等），unset 的效果相当于 inherit，即从父元素继承该属性的值。
    - 如果属性不是继承属性（例如 display、margin 等），unset 的效果相当于 initial，即将属性重置为它的初始值。
- `revert-layer` 可以将属性的值恢复到在当前样式层级中的默认值

```vue

<style>
  /* 浏览器默认样式 */
  button {
    background-color: lightgray;
    color: black;
  }

  /* 用户自定义样式 */
  @layer user {
    button {
      background-color: yellow;
      color: blue;
    }
  }

  /* 开发者样式 */
  @layer developer {
    button {
      background-color: green;
      color: white;
    }
  }

  /* 应用 revert-layer 的情况 */
  button.revert {
    background-color: revert-layer;
  }
</style>
```

1. 浏览器默认为 button 设置了 lightgray 背景色和 black 文本颜色。
2. 用户样式层定义了 yellow 背景和 blue 文本。
3. 开发者样式层定义了 green 背景和 white 文本。
4. .revert 类中的 background-color: revert-layer 将 button 的背景颜色恢复到用户样式层的 yellow，但不影响其他属性如文本颜色（依然是
   white）。

>
更多属性和详细介绍请参考 [https://developer.mozilla.org/en-US/docs/Web/CSS/display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

### position 有哪些常用值？说明他们的作用

- `static` 默认值，元素按照正常文档流进行排列
- `relative` 相对定位，元素按照正常文档流进行排列，然后相对于自身在文档流中的原始位置偏移，轻微调整位置，创建参考点。
- `absolute`
    - 绝对定位，想对于外层第一个不是`static`的标签（padding的值也要算进去），如果没有这样的祖先元素，则相对于浏览器窗口
    - 元素从正常文档流中删除，并相对于其包含块进行偏移（形成 BFC 单独渲染区域）
- `fixed` 固定定位，元素从正常文档流中删除，并相对于浏览器窗口进行偏移 形成 BFC 单独渲染区域），用于固定导航栏、固定按钮。
- `sticky` 粘性定位，元素根据正常文档流进行偏，用于滚动时吸附的导航、侧边栏、表头等。
- `inherit` 继承父元素属性值

## 五、CSS3 有哪些新特性

1. **弹性布局（Flexbox）**
    - display: flex 允许在一个容器内灵活排列子元素。它可以很好地控制子元素的对齐、排序、和间距，特别适合构建响应式布局。
2. **网格布局（Grid Layout）**
    - display: grid 允许在一个容器内创建多个子元素网格，并使用行和列来定位内容。它比 flex 更灵活。
3. **选择器的增强**
    - 通过属性值对元素进行筛选，允许更精细的控制。例如，通过 [type="text"] 选择所有文本框。
4. **伪类和伪元素**
    - :nth-child(n)：根据元素的顺序选择元素。
    - :not()、:is()、:where() 伪类选择器。
5. **多列布局（Multi-Column Layout）**
    - 允许将内容分割为多列，类似于报纸的排版风格。
    - `column-count: 3; /* 分成3列 */`、`column-gap: 20px; /* 列之间的间距 */`
6. **媒体查询（Media Queries）**
    - CSS3 引入了媒体查询，使得响应式设计成为可能，可以根据不同设备或窗口尺寸调整布局和样式。
    - `@media screen and (max-width: 600px){}`
    - `@media screen and (min-width: 600px) and (max-width: 800px){}`
    - `@media screen and (min-width: 801px){}`
    - `@media screen and (orientation: landscape){}`
    - ......
7. **变形（Transforms）**
    - CSS3 提供了 2D 和 3D 变形功能，可以对元素进行旋转、缩放、倾斜等操作。
    - 2D 变形: `transform: rotate(45deg);`、`transform: scale(2, 1.5);`
    - 3D 变形: `transform: rotateX(45deg);`, `transform: rotateY(45deg);`、`transform: translateZ(10px)
8. **动画（Animations）**

CSS3 动画可以实现复杂的动画效果，并允许精确控制动画的每一个阶段。

```css
@keyframes slide1 {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100px);
    }
}

@keyframes slide2 {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100px);
    }
}

.element1 {
    animation: slide1 2s ease-in-out;
}

.element2 {
    animation: slide2 2s ease-in-out;
}
```

9. **过渡（Transitions）**
    - 过渡效果允许在元素的状态变化（如颜色、大小等）时平滑地过渡。
    - transition 指定变换详情，具体[参考动画章节]()

10. **背景和边框**
    - 多个背景图
        - `background-image: url(img1.jpg), url(img2.jpg);`
        - `background-position: left top, right bottom;`
    - 背景剪裁（Background Clip）`background-clip: content-box;`
    - 圆角边框（Border Radius） `border-radius: 10px;`
    -
11. **阴影效果**
    - 文本阴影（Text Shadow）`text-shadow: 2px 2px 4px rgba(0,0,0,0.5);`
    - 盒子阴影（Box Shadow）`box-shadow: 2px 2px 4px rgba(0,0,0,0.5);`

12. **渐变（Gradients）**
    - 线性渐变（Linear Gradients）`background: linear-gradient(to right, red, blue);`
    - 径向渐变（Radial Gradients）`background: radial-gradient(circle at 50% 14em, red, blue);`

13. **自定义字体（@font-face）**
    - `font-family: 'MyFont';`
    - `src: url('myfont.woff') format('woff');`

14. **计算值（calc()）**
    - `width: calc(100% - 50px);` /* 减去固定宽度 */

## 六、CSS 样式初始化

主要目的是为了消除不同浏览器之间的默认样式差异。各个浏览器（如 Chrome、Firefox、Safari、Edge 等）对 HTML
元素都有不同的默认样式设置，这可能会导致在不同浏览器中呈现的网页有差异。通过初始化 CSS
样式，可以使浏览器对元素的初始样式保持一致，从而保证网页在不同的浏览器中有相同的外观。

初始化样式的优点如下：

1. 消除浏览器差异
2. 一致的起点
3. 避免样式冲突
4. 提高跨浏览器兼容性
5. 简化开发流程

常见的初始化 css 方法

```css
/* 示例 CSS Reset */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
}

address, cite, dfn, em, var {
    font-style: normal;
}

code, kbd, pre, samp {
    font-family: couriernew, courier, monospace;
}

small {
    font-size: 12px;
}

ul, ol {
    list-style: none;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

sup {
    vertical-align: text-top;
}

sub {
    vertical-align: text-bottom;
}

legend {
    color: #000;
}

fieldset, img {
    border: 0;
}

button, input, select, textarea {
    font-size: 100%;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
```

> normalize.css 一个提供默认样式的库

## 七、@规则

- `@namespace` 告诉 CSS 引擎必须考虑XML命名空间。
- `@font-face` 告诉 CSS 引擎去加载指定的外部字体。
- `@keyframes` 告诉 CSS 引擎创建动画。
- `@document` 文档加载和解析时应该如何渲染。
- `@viewport` 针对设备的视口进行样式设置。
- `@media` 输出满足特定条件的样式, 如：`@media (min-width: 1000px) {}`。
- `@page`, 主要应用于定义页面的尺寸、页边距和其他与打印布局相关的样式。
    - **只在打印时生效**：@page 规则仅在用户选择打印页面或生成 PDF 时才会生效，不会影响页面的正常显示。
    - **只能使用有限的属性**：并不是所有的 CSS 属性都可以用于 @page，例如 padding、border 等属性在 @page 规则内是无效的。

```css
@page {
    size: A4; /* A4 大小的页面 */
}

@page {
    size: 8.5in 11in; /* 自定义页面尺寸，8.5 x 11 英寸 */
}

@page {
    margin: 2cm; /* 页面四周边距为2cm */
}

@page {
    margin: 1cm 2cm 1cm 2cm; /* 分别指定上、右、下、左的页边距 */
}

@page :first {
    margin-top: 5cm; /* 第一页的顶部页边距为5cm */
}

@page :left {
    margin-left: 4cm; /* 左页的左侧边距为4cm */
}

@page :right {
    margin-right: 4cm; /* 右页的右侧边距为4cm */
}
```

- `@charset` 告诉 CSS 引擎应该如何编码文档。
    - 某个样式表文件到底用的是什么字符编码，浏览器有一套识别顺序（优先级由高到低）：

    1. 文件开头的 Byte order mark 字符值，不过一般编辑器并不能看到文件头里的 BOM 值；
    2. HTTP 响应头里的 content-type 字段包含的 charset 所指定的值，比如：`Content-Type: text/css; charset="UTF-8"`；
    3. CSS 文件头里定义的 @charset 规则里指定的字符编码
    4. <link> 标签里的 charset 属性，该条已在 HTML5 中废除；
    5. 浏览器默认的字符编码
- `@supports` 用于查询特定的 CSS 是否生效，可以结合 not、and 和 or 操作符进行后续的操作。

```css
/* 如果支持自定义属性，则把 body 颜色设置为变量 varName 指定的颜色 */
@supports (--foo: green) {
    body {
        color: var(--varName);
    }
}
```

- `@import` 告诉 CSS 引擎引入一个外部的样式表。
    - link 和 @import 都能导入一个样式文件，它们有什么区别嘛？
        1. link 是 HTML 标签，除了能导入 CSS 外，还能导入别的资源，比如图片、脚本和字体等；而 @import 是 CSS 的语法，只能用来导入
           CSS；
        2. link 导入的样式会在页面加载时同时加载，@import 导入的样式需等页面加载完成后再加载；
        3. link 没有兼容性问题，@import 不兼容 ie5 以下；
        4. link 可以通过 JS 操作 DOM 动态引入样式表改变样式，而@import不可以。

## 八、格式化上下文

- `BFC` (Block Formatting Context) 块级格式化上下文；
- `IFC` (Inline Formatting Context) 行内格式化上下文；
- `FFC` (Flex Formatting Context) 弹性格式化上下文；
- `GFC` (Grid Formatting Context) 格栅格式化上下文；

### BFC 是什么？

BFC块格式化上下文，它是一个独立的渲染区域，只有块级盒子参与，它规定了内部的块级盒子如何布局，并且与这个区域外部毫不相干。

1. BFC 渲染规则
    - 内部的盒子会在垂直方向，一个接一个地放置
    - 盒子垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻盒子的 margin 会发生重叠
    - 每个元素的 margin 的左边，与包含块 border 的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此
    - **BFC 的区域不会与 float 盒子重叠** 【面试常见】
    - BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
    - 计算 BFC 的高度时，浮动元素也参与计算
2. 如何创建 BFC？
    - 根元素 html
    - 浮动元素（元素的 float 不是 none）
    - 绝对定位元素（元素的 position 为 absolute 或 fixed）
    - display 属性为 inline-block、table-cell、table-caption 或 flex 的元素
    - 非溢出元素 overflow 不为 visible
3. BFC 应用场景
    - 自适应两栏布局
    - 清除浮动
    - 防止垂直 margin 合并（相邻）

## 九、值和单位

CSS 的声明是由属性和值组成的，而值的类型有许多种：

- `数值`：长度值 ，用于指定例如元素 width、border-width、font-size 等属性的值；
- `百分比`：可以用于指定尺寸或长度，例如取决于父容器的 width、height 或默认的 font-size；
- `颜色`：用于指定 background-color、color 等；
- `坐标位置`：以屏幕的左上角为坐标原点定位元素的位置，比如常见的 background-position、top、right、bottom 和 left 等属性；
- `函数`：用于指定资源路径或背景图片的渐变，比如 url()、linear-gradient() 等；

### 前置知识

1. `设备像素（Device pixels）`：是显示器上最小的物理显示单元，在操作系统的调度下，各应用程序将设备像素映射到屏幕像素，由分辨率决定一个设备像素对应一个屏幕像素；
2. `设备像素比（DPR）`：设备像素比表示 1 个 CSS 像素等于几个物理像素。
    - 计算公式：DPR = 物理像素数 / 逻辑像素数；
    - 在浏览器中可以通过 `window.devicePixelRatio` 来获取当前屏幕的 DPR。
3. `像素密度（DPI/PPI）`: 表示每英寸包含的像素点数，是衡量显示器设备独立性的重要指标之一。
    - 计算公式：像素密度 = 屏幕对角线的像素尺寸 / 物理尺寸
    - 比如，对于分辨率为 750 * 1334 的 iPhone 6 来说，它的像素密度为：Math.sqrt(750 * 750 + 1334 * 1334) / 4.7 = 326ppi
4. `设备独立像素（DIP）`: DIP 是特别针对
   Android设备而衍生出来的，，原因是安卓屏幕的尺寸繁多，因此为了显示能尽量和设备无关，而提出的这个概念，它是一种抽象的测量单位，表示在不同设备上均匀渲染的像素，独立于设备的物理像素密度。DIP
   的主要作用是让设计在各种屏幕分辨率和 DPI（Dots Per Inch，点每英寸）设置的设备上具有一致的视觉效果

### 长度

1. `px`: 像素，相对于显示器屏幕分辨率而言的，1px 通常是显示器上的一个物理像素；
2. `em`：相对长度单位，相对于当前字体尺寸而言的，例如，若 font-size 是 16px，则 1em 等于 16px；
3. `rem`: 相对长度单位，相对于根元素字体尺寸而言的，例如，若 font-size 是 16px，则 1rem 等于 16px；
4. `%`：相对于其他长度的百分比。
5. `vw/vh`: 相对长度单位，相对于视窗尺寸而言的；
6. `vmin/vmax`: 相对长度单位，相对于视窗尺寸而言的，vw 和 vh 的取值是按最小值和最大值的百分比来计算的。

### 颜色

1. `rgb`：通过红、绿、蓝三个通道来指定颜色，每个值的范围是 0~255；
2. `rgba`：与 rgb 相同，但多了第四个值 alpha，用于指定透明度，alpha 取值范围为 0~1；
3. `hsl`：通过色相（hue）、饱和度（saturation）和亮度（lightness）来指定颜色；
4. `hsla`：与 hsl 相同，但多了第四个值 alpha，用于指定透明度；
5. `#000000`：十六进制颜色值，由六位组成，前两位表示红色分量，中间两位表示绿色分量，后两位表示蓝色分量，也可简写`#fff`；
6. `transparent`：表示完全透明。
7. `currentColor`：表示当前元素的 color 属性的值。
8. `blue、green...`：颜色关键词。

## 十、媒体查询

媒体查询是指针对不同的设备、特定的设备特征或者参数进行定制化的修改网站的样式。

可以通过给 <link> 加上 media 属性来指定该样式文件只能对什么设备生效，不指定的话默认是 all，即对所有设备都生效：

```html

<link rel="stylesheet" src="styles.css" media="screen"/>
<link rel="stylesheet" src="styles.css" media="print"/>

```

### 都支持哪些设备类型？

> 需要注意的是：通过 media 指定的 资源尽管不匹配它的设备类型，但是浏览器依然会加载它。

- `all`：适用于所有设备；
- `print`：适用于在打印预览模式下在屏幕上查看的分页材料和文档；
- `screen`：主要用于屏幕；
- `speech`：主要用于语音合成器。

### @media

> @media 查询是 CSS3 新增的，用于表示不同的设备是否匹配指定的条件，媒体查询支持逻辑操作符。

- `and`：查询条件都满足的时候才生效；
- `not`：查询条件取反；
- `only`：整个查询匹配的时候才生效，常用语兼容旧浏览器，使用时候必须指定媒体类型；
- `逗号或者 or`：查询条件满足一项即可匹配；

```css
/* 用户设备的最小高度为680px或为纵向模式的屏幕设备 */
@media (min-height: 680px), screen and (orientation: portrait) {}
```

>
更多关于媒体查询详细介绍请查阅[https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
