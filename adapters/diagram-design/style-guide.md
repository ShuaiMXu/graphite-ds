# diagram-design · 石墨极简皮肤

覆盖 diagram-design 的默认 style guide（白烟底 + atomic-tangerine）。它的语义角色名照旧，只换色值——类型参考里写 `accent` 的地方仍然取这里的 `accent`。

## 语义角色

| 角色 | 浅色 | 深色 | 用途 |
|---|---|---|---|
| `paper` | `#FFFFFF` | `#18181B` | 页面底、节点默认填充 |
| `paper-2` | `#FAFAFA` | `#1B1B1F` | 图容器底、次级填充 |
| `ink` | `#27272A` | `#FAFAFA` | 主文字、主描边 |
| `muted` | `#52525B` | `#A1A1AA` | 次级文字、默认箭头描边 |
| `soft` | `#71717A` | `#8B8B93` | 子标签、边界标签 |
| `rule` | `rgba(39,39,42,.12)` | `rgba(250,250,250,.12)` | 发丝边框 |
| `rule-solid` | `#E4E4E7` | `rgba(228,228,231,.25)` | 较强边框、基线 |
| `accent` | `#EA580C` | `#FB923C` | 焦点，每图 1–2 个 |
| `accent-tint` | `rgba(234,88,12,.08)` | `rgba(251,146,60,.10)` | 焦点框填充 |
| `link` | `#3F3F46` | `#E4E4E7` | 外部调用箭头。石墨不引入第二色相，改用灰阶区分 |

## 与上游的两处差异

**`link` 不用蓝色。** 上游默认 `#2e5aa8`，那是第二个色相。石墨极简是单色相体系，引入蓝会破坏「灰阶承载层级、橙标唯一焦点」的契约。改用 `ink2` 灰阶档位，靠线型（虚线）而非色相区分外部调用。

**`accent` 用 `#EA580C` 不用 `#F97316`。** 上游自己也记录过它的默认橙在纸底上是 2.86:1、低于 1.4.11 的 3:1，并用「焦点形状加 ink 描边」来补。石墨直接降一档明度到 3.56:1，省掉补丁。理由见 `../../tokens/contrast.md`。

## 字体

上游默认 Geist / Instrument Serif / Geist Mono。石墨用系统栈，不加载网络字体：

- 节点名、正文：`-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif`
- 技术标签、数值：`ui-monospace, 'SF Mono', Menlo, Consolas, monospace`

**CJK 下限 12px。** 上游把 eyebrow 和箭头标签放在 7–8px 等宽槽位，中文在那个尺寸糊且无等宽字体可落。中文标签一律升到 12px sans 字重 500，去掉字距与大写变换；拉丁标签保持原处理。

## 用法

放进项目根目录，或在调用 diagram-design 时明确指向本文件。它的首次使用门禁会检查 style guide 是否仍是出厂默认，指向这里即视为已定制。
