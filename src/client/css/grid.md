---
outline: deep
---

# Grid 网格布局

## 一、简介
CSS Grid（网格布局）是一个二维布局系统，允许我们在水平和垂直两个方向上同时布局元素。相比于 Flexbox 一维布局（仅在一行或一列上排列项目），Grid 提供了更强的灵活性，可以轻松地创建复杂的网页布局。

## 属性和说明

### 容器属性介绍

#### 前置知识
- `fr`：表示网格容器中剩余可用空间。
- `minmax()`：表示网格轨道的大小范围。
- `auto-fill`：表示自动填充。
- `repeat()`：表示重复网格轨道的函数。

#### 容器属性
1. `display`：指定一个网格容器，值为 `grid` 或 `inline-grid`。
   - `grid`：将元素作为块级网格容器显示。
   - `inline-grid`：将元素作为内联级网格容器显示。
2. `grid-template-columns`：指定网格容器中列的宽度。
   - 固定宽度：`grid-template-columns: 100px 200px;`
   - 百分比：`grid-template-columns: 25% 50% 25%;`
   - 三栏自动撑开：`grid-template-columns: 100px auto 100px;`
   - 自动填充：`grid-template-columns: repeat(3, 100px);`
   - 自动填充并平均分布：`grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));`
   - 自动填充并重复：`grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));`
3. `grid-template-rows`：指定网格容器中行的高度。
   - 使用方式同 `grid-template-columns`
4. `grid-template-areas`：指定网格容器中区域的名称。
    - 容器定义布局名称分布情况
    - 子元素 grid-area 指定对应名称即可
```css
.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 120px  120px  120px;
  grid-template-areas:
    ". header  header"
    "sidebar content content";
  background-color: #fff;
  color: #444;
}
.sidebar {
    grid-area: sidebar;
}

.content {
    grid-area: content;
}

.header {
    grid-area: header;
}
```
5. `grid-auto-flow`: 指定网格元素在网格容器中的放置顺序。
   - 先行后列: row
   - 列行先后: column
   - 默认值是: row
   - 注：`grid-auto-flow:row dense` 可自动填充空缺
6. `grid-auto-columns`：指定网格容器中**未指定且多出**列的宽度。
   - `grid-template-columns` 指定列宽后，未指定的列宽由 `grid-auto-columns` 决定。
7. `grid-auto-rows`：指定网格容器中**未指定且多出**行的高度。
    - `grid-template-rows` 指定行高后，未指定的行高由 `grid-auto-rows` 决定。
8. `*-items`: 如何设置**子元素内容**在**子元素中**的排布方式
   - `justify-items`：
   - `align-items`：
   - `place-items`：
