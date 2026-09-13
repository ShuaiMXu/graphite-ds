  /* ═══════════════════════════════════════════════════════════
     GRAPHITE — 石墨灰阶 + 暖橙点睛
     来源：gzh-design-skill / theme-graphite-minimal（Zinc 色阶）。
     色彩逻辑：与 WIRE 同构（mono+accent）——灰阶承载数据，橙色
     只标唯一主角。区别在灰阶偏冷（Zinc 而非暖纸灰），橙色偏正。
     适配：设计与科技评论、专业观点、方案文档、高端品牌。
     容量：4 档明度。类目 >4 换 Mono 灰阶。
     对比度：HERO 用 orange-600 #EA580C（3.41:1 on BG）而非主题
     正文里的 orange-500 #F97316（2.70:1，过不了 3:1 硬门）。
     同色相降一档明度，符合 custom 规则第 5 条。
     ═══════════════════════════════════════════════════════════ */
  const GRAPHITE = {
    name: 'graphite',
    cn: '石墨极简',
    logic: 'mono+accent',    // 灰阶=数据，橙=唯一主角
    BG: '#FAFAFA',
    TXT: '#27272A',
    MUT: 'rgba(39,39,42,.60)',
    LAB: 'rgba(39,39,42,.72)',
    FAINT: 'rgba(39,39,42,.32)',
    FLOOR: 'rgba(39,39,42,.24)',
    QUIET: 'rgba(39,39,42,.15)',
    TRACK: 'rgba(39,39,42,.12)',
    GRID: 'rgba(39,39,42,.16)',
    DATA: '#27272A',
    DATA2: '#71717A',
    HERO: '#EA580C',         // 暖橙 —— 每张图只给一个元素
    HERODK: '#FB923C',       // 暗卡用 orange-400，7.83:1 on #18181B
    FAINTDATA: '#A1A1AA',
    BEAD: '#71717A',
    HALO: 'rgba(250,250,250,.92)',
    CAT4: ['#EA580C', '#27272A', '#71717A', '#A1A1AA'],
    CAT3: ['#EA580C', '#27272A', '#71717A'],
    CAT3L: ['#EA580C', '#27272A', '#52525B'],
    HEAT: ['#EA580C', '#52525B', '#A1A1AA'],
    SER:  ['#27272A', '#71717A', '#A1A1AA', 'rgba(39,39,42,.52)', '#E4E4E7', 'rgba(39,39,42,.3)'],
    RAMP: ['#E4E4E7', '#A1A1AA', '#71717A', '#27272A', '#EA580C'],
    DRAMP4: ['#FB923C', '#A1A1AA', '#71717A', 'rgba(250,250,250,.26)'],
    RAMPDK: ['rgba(250,250,250,.26)', 'rgba(250,250,250,.42)',
             'rgba(250,250,250,.60)', 'rgba(250,250,250,.84)', '#FB923C'],
    /* 暗卡块：WIRE 无此项（退回 Mono 大图），石墨有完整深色定义，
       取自 theme-graphite-minimal 的深色变体 */
    DARK: {
      BG: '#18181B',
      TXT: '#FAFAFA',
      MUT: 'rgba(250,250,250,.60)',
      GRID: 'rgba(250,250,250,.16)',
      DATA: '#E4E4E7',
      DATA2: '#8B8B93',
      HERO: '#FB923C',
      FAINTDATA: '#6B6B73',
    },
  };
