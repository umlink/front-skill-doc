---
outline: deep
---

# CSS基础扫盲

## 一、CSS选择器
- id选择器 `#id-name { color: #bd34fe; }`
- 类选择器 `.class-name { color: #bd34fe; }`
- 标签选择器 `p { color: #bd34fe; }`
- 后代选择器 `h1 p { color: #bd34fe; }`
- 相邻后代选择器（子）选择器 `div>p { color: #bd34fe; }`
- 兄弟选择器 `h1~p { color: #bd34fe; }`
- 相邻兄弟选择器 `h1+p { color: #bd34fe; }`
- 属性选择器（a[rel="external"]）`a[rel="external"] { color: #bd34fe; }`
- 伪类选择器 `a:hover {color: #bd34fe;}`
- 伪元素选择器（::before、::after） `div::before { color: #bd34fe; }`
- 通配符选择器（*） `* { color: #bd34fe; }`
> Tips：项目中 `:root {}` 等同于 `html {}`

## 二、CSS优先级

> 内敛 > id > class > 标签 > 通配符

- 相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高
- 样式应用时，css会先查看规则的权重（!important），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性

## 三、CSS伪类与伪元素
> CSS3 标准中伪类统一使用单冒号 `:`，伪元素统一使用双冒号 `::`。为适配就浏览器兼容性，浏览器需要同时支持旧的已经存在的伪元素写法，
比如:first-line、:first-letter、:before、:after等
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
> 更伪类和详细介绍请参考 [https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

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

> 更多伪元素和详细介绍请参考 [https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)

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
- `revert` 会将元素的 display 属性重置为浏览器的默认样式，或者它从父元素继承的样式，它与 initial 的区别在于：initial 强制将样式重置为初始值（大部分情况下与浏览器默认行为相同），而 revert 允许继承样式生效
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
4. .revert 类中的 background-color: revert-layer 将 button 的背景颜色恢复到用户样式层的 yellow，但不影响其他属性如文本颜色（依然是 white）。

> 更多属性和详细介绍请参考 [https://developer.mozilla.org/en-US/docs/Web/CSS/display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

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
   -  通过属性值对元素进行筛选，允许更精细的控制。例如，通过 [type="text"] 选择所有文本框。
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
    0% { transform: translateX(0); } 
    50% { transform: translateX(0); }
    100% { transform: translateX(100px); }
}
@keyframes slide2 {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
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

主要目的是为了消除不同浏览器之间的默认样式差异。各个浏览器（如 Chrome、Firefox、Safari、Edge 等）对 HTML 元素都有不同的默认样式设置，这可能会导致在不同浏览器中呈现的网页有差异。通过初始化 CSS 样式，可以使浏览器对元素的初始样式保持一致，从而保证网页在不同的浏览器中有相同的外观。

初始化样式的优点如下：
1. 消除浏览器差异
2.  一致的起点
3. 避免样式冲突
4. 提高跨浏览器兼容性
5. 简化开发流程

常见的初始化 css 方法
```css
/* 示例 CSS Reset */
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend
,button,input,textarea,th,td{margin:0;padding:0;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
address,cite,dfn,em,var{font-style:normal;}
code,kbd,pre,samp{font-family:couriernew,courier,monospace;}
small{font-size:12px;}
ul,ol{list-style:none;}
a{text-decoration:none;}
a:hover{text-decoration:underline;}
sup{vertical-align:text-top;}
sub{vertical-align:text-bottom;}
legend{color:#000;}
fieldset,img{border:0;}
button,input,select,textarea{font-size:100%;}
table{border-collapse:collapse;border-spacing:0;}
```

> normalize.css 一个提供默认样式的库
