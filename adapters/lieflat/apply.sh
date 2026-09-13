#!/usr/bin/env bash
# 把 graphite 预设注入本地 lieflat-chart 安装。
# 只改本地已安装的副本，不分发上游代码。
set -euo pipefail

TARGET="${1:-$HOME/.claude/skills/lieflat-chart}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

[[ -f "$TARGET/color-presets.js" ]] || { echo "找不到 $TARGET/color-presets.js" >&2; exit 1; }

if grep -q "GRAPHITE" "$TARGET/color-presets.js"; then
  echo "[skip] graphite 预设已存在"
else
  cp "$TARGET/color-presets.js" "$TARGET/color-presets.js.bak"
  # 在 BY_WORDS 之前插入预设定义
  awk -v f="$HERE/graphite.preset.js" '
    /人话映射/ && !done { while ((getline l < f) > 0) print l; print ""; done=1 }
    { print }
  ' "$TARGET/color-presets.js.bak" > "$TARGET/color-presets.js"
  # 注册
  sed -i "s/const BY_WORDS = {/const BY_WORDS = {\n    '石墨': 'graphite', '灰阶': 'graphite', '极简': 'graphite',\n    '专业': 'graphite', '方案': 'graphite', '冷灰': 'graphite',/" "$TARGET/color-presets.js"
  sed -i "s/global.PRESETS = { PORCELAIN, PALM, WIRE,/global.PRESETS = { PORCELAIN, PALM, WIRE, GRAPHITE,/" "$TARGET/color-presets.js"
  sed -i "s/list: \['porcelain', 'palm', 'wire'\]/list: ['porcelain', 'palm', 'wire', 'graphite']/" "$TARGET/color-presets.js"
  sed -i "s/wire: WIRE })\[String(n)/wire: WIRE, graphite: GRAPHITE })[String(n)/" "$TARGET/color-presets.js"
  echo "[ok] 预设已注入"
fi

# 从 wire 母版换色生成四份样张
for g in basics glance lupi maps; do
  SRC="$TARGET/templates/color/$g-wire.html"
  OUT="$TARGET/templates/color/$g-graphite.html"
  [[ -f "$SRC" ]] || continue
  sed -e 's/#F0F0EE/#FAFAFA/g' -e 's/#1F1E1C/#27272A/g' -e 's/rgba(31,30,28,/rgba(39,39,42,/g' \
      -e 's/#22211F/#27272A/g' -e 's/#8F8E86/#71717A/g' -e 's/#F5572F/#EA580C/g' \
      -e 's/#C0BFB7/#A1A1AA/g' -e 's/#6E6D66/#52525B/g' -e 's/#DBDAD3/#E4E4E7/g' \
      -e 's/WIRE/GRAPHITE/g' -e 's/Wire /Graphite /g' \
      -e 's|编辑部红|石墨极简|g' -e 's|黑灰为体|冷灰阶为体|g' -e 's|上红|上橙|g' \
      "$SRC" > "$OUT"
  echo "[ok] $g-graphite.html"
done

command -v node >/dev/null 2>&1 && node --check "$TARGET/color-presets.js" && echo "[ok] 语法检查通过"
echo "[done] redskill upgrade 之后需要重跑本脚本。"
