# lieflat-chart 适配

## 为什么只发脚本不发文件

lieflat-chart 是 **PolyForm Noncommercial** 许可证。四份 `*-graphite.html` 样张是从它的 `*-wire.html` 逐值换色生成的，48K 全是上游代码。把它们收进本仓库会让本仓库不可商用。

所以这里只放两样：预设定义（我们自己的色值），和一个在本地安装上现场生成样张的脚本。

## 用法

```bash
./apply.sh                                   # 默认 ~/.claude/skills/lieflat-chart
./apply.sh /path/to/lieflat-chart            # 指定路径
```

脚本是幂等的，预设已存在时跳过。会先备份 `color-presets.js.bak`。

**`redskill upgrade` 会覆盖整个 skill 目录，升级后要重跑。**

## 预设为什么长这样

`graphite` 与上游的 `wire` 同构，`logic` 都是 `mono+accent`——灰阶承载数据，一个橙色标唯一主角。差别只在灰的色温（暖纸灰 vs 冷 Zinc）和橙的正度。

选择继承 wire 而不是 porcelain / palm，是因为石墨极简本身就是「灰阶 + 单点强调」的结构，与 wire 的色彩逻辑完全一致，换色即可，不需要改任何编码方式。

`DARK` 块是 graphite 比 wire 多出来的。wire 没有深色定义，遇到暗底图只能退回原版 Mono；石墨有完整深色变体，可以直接用。

橙色用 `#EA580C` 不用主题正文的 `#F97316`，理由见 `../../tokens/contrast.md`。
