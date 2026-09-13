# diagram-design 适配

上游是 MIT，约束最松，可以自由派生并收录内容，保留版权声明即可。

这里只放一份 style guide 覆盖，不复制它的类型参考和模板——那些是结构正本，应该直接读上游的 `references/`，否则版本一分叉就会漂。

上游：[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)（MIT）

## 什么时候用它而不是 lieflat

有量的走 lieflat-chart，没量的走 diagram-design。

分界是 diagram-design 自己那句话：这个图型编码了什么，每个视觉通道对应哪个数据维度。答得出就是图表，答不出就是示意图。分层、流程、组件关系、拓扑属于后者，硬塞给图表 skill 会做成「抄形不抄魂」。

两个都不用的情况也存在：表格能说清的就用表格，两个上游都写着最高质量的动作通常是删除。
