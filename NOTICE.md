# 上游与边界

本仓库适配三个外部 skill。**不分发它们的任何代码**，只提供在本地安装上生效的增量。

| 上游 | 许可证 | 对本仓库的影响 |
|---|---|---|
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | MIT | 无。可自由派生，保留版权声明即可 |
| [ShuaiMXu/gzh-design-skill](https://github.com/ShuaiMXu/gzh-design-skill)（版权 甲木 × 摸鱼小李） | AGPL-3.0 | 强传染。收录其代码会要求本仓库同样 AGPL |
| lieflat-chart（经 RedSkill 分发） | PolyForm Noncommercial | **禁止商业使用**。收录其模板会让本仓库不可商用 |

## 为什么三套适配都只发补丁

三个许可证互不兼容。AGPL 要求衍生作品同样开源，PolyForm 禁止商业使用，两者放进同一个仓库会让产物同时背上两套限制，且无法合法地以任一单一协议分发。

解法是不收代码：token 值是事实（色值本身不受版权保护），适配逻辑是本仓库原创，注入脚本在用户本地对已安装的上游生效。上游的许可证约束留在上游，不传染过来。

**如果将来要商用**，lieflat-chart 那条是硬障碍，需要联系作者取得商业授权，或换掉图表层。

## 本仓库自身

`tokens/` 与 `adapters/` 下的原创内容以 MIT 发布，见 LICENSE。
