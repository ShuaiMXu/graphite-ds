# Graphite DS

石墨极简设计系统的 **AI 可消费版**：一套 token 正本，加三个把它接进现有 agent skill 的适配层。

## 为什么是适配层而不是又一套设计系统

石墨极简的排版组件本体在 [gzh-design-skill](https://github.com/ShuaiMXu/gzh-design-skill) 的 `theme-graphite-minimal`。这里不重复它，只解决一个问题：**同一套视觉身份，怎么让不同的 agent skill 都认。**

现状是每个 skill 有自己的色彩体系——lieflat-chart 有四套预设，diagram-design 有自己的 style guide，gzh 有七套主题。接进去之前，一份文档里的正文、图表、示意图会是三套灰。

## 结构

```
tokens/          token 正本（本仓库唯一原创资产）
  graphite.json    DTCG 格式，机器可读
  graphite.css     CSS 变量，浅深双色
  contrast.md      对比度实测与取值决策
adapters/        接进各 skill 的增量，不含上游代码
  lieflat/         预设定义 + 注入脚本
  diagram-design/  style guide 覆盖
  gzh/             深色变体补丁
```

## 用法

token 正本是 `tokens/graphite.json`，其余一切从它派生。改色只改这一个文件，然后重跑各 adapter 的注入脚本。

各 adapter 的 `README.md` 写了为什么这么接、以及上游许可证带来的边界。

## 边界

见 [NOTICE.md](NOTICE.md)。简短版：本仓库只包含自己的 token 值和适配逻辑，不分发任何上游代码。三个上游的许可证互不兼容，把它们的代码收进同一个仓库会同时触发 AGPL 的传染和 PolyForm 的非商业限制。
