---
outline: deep
---

# Flex弹性布局

## 一、简介

CSS Flexbox（弹性盒布局）是一种强大且简洁的布局模式，用于创建响应式页面。通过 flex 布局，我们可以更轻松地控制页面元素在容器中的对齐、排序、分配空间等，而不需要使用复杂的浮动、清除浮动等传统布局技巧。

## 二、使用

Flexbox 是一维布局系统，专门用于在一个方向上排列元素（水平或垂直），主要涉及两个概念：

- **父容器（flex 容器）**：用 display: flex 定义，它的直接子元素会成为 flex 项目（flex items）。 
- **子元素（flex 项目）**：位于 flex 容器内，受到 flex 布局规则控制。

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
```css
.container {
  display: flex; /* 定义 flex 容器 */
}
.item {
  /* 每个 item 是 flex 项目 */
}
```
**Flex 容器的主轴和交叉轴** 

- **主轴（main axis）**：定义 flex 容器内部子元素排列的主方向，默认为水平方向，从左到右。 
- **交叉轴（cross axis）**：与主轴垂直的方向，即垂直方向。

## 三、属性介绍

### 父容器
1. `flex-direction`
   - row（默认值）：从左到右排列。
   - row-reverse：从右到左排列。
   - column：从上到下排列。
   - column-reverse：从下到上排列。
   - 默认值：flex-direction: row;
   
2. `flex-wrap`
   - nowrap（默认值）：不换行。
   - wrap：换行，第一行在上方。
   - wrap-reverse：换行，第一行在下方。
   - 默认值：flex-wrap: nowrap;

3. `flex-flow` **【面试重点】**
   - 简写属性，包括 `flex-direction` 和 `flex-wrap`。
   - 默认值：flex-flow: row wrap;

4. `justify-content`
   - flex-start（默认值）：左对齐。
   - flex-end：右对齐。
   - center：居中。
   - space-between：两端对齐，项目之间的间隔都相等。
   - space-around：每个项目两侧的间隔相等。
   - space-evenly：项目之间的间隔都相等，两端对齐。
   - stretch（默认值）：项目未设置高度或设为 auto 时，将占满整个容器的高度。

5. `align-items`
   - flex-start：交叉轴的起点对齐。
   - flex-end：交叉轴的终点对齐。
   - center：交叉轴的中点对齐。
   - baseline：项目的第一行文字的基线对齐。
   - stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。

6. `align-content` **【面试重点】**
   - **当项目换行时，用于控制多行项目在交叉轴上的对齐方式。只适用于多行布局。**
   - flex-start：与交叉轴的起点对齐。
   - flex-end：与交叉轴的终点对齐。
   - center：与交叉轴的中点对齐。
   - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
   - space-around：每根轴线两侧的间隔都相等。
   - stretch（默认值）：轴线占满整个交叉轴。

7. `flex` **【面试重点】**
   - 简写属性，包括 `flex-grow`、`flex-shrink` 和 `flex-basis`。
   - 默认值：flex: 0 1 auto;

8. `flex-grow`
   - 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。(负数无效)
   - 默认值：flex-grow: 0;
   - 取值范围：0或正数

9. `flex-shrink`
   - 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。(负数无效)
   - 默认值：flex-shrink: 1;
   - 取值范围：0或正数

10. `flex-basis`
    - 定义了在分配多余空间之前，项目占据的主轴空间（main size）。
    - 浏览器根据这个属性，计算主轴是否有多余空间。
    - 它可以设为 `auto`（默认值），即项目的本来大小。
    - 默认值：flex-basis: auto;
    
### 子元素
1. `order`
   - 定义项目的排列顺序。数值越小，排列越靠前，默认为 0。
   - 默认值：order: 0;
   - 取值范围：-n~正无穷
2. `align-self`
    - 允许单个项目有与其他项目不一样的对齐方式，可覆盖 `align-items` 属性。
    - 默认值：align-self: auto;
