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
