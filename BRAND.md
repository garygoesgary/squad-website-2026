# Squad Brand Colours

Source: [Squad Playbook 2026](https://www.figma.com/design/qGkABPztzm6fHVI65IqGN3/Squad-Playbook-2026?node-id=28-1094) (Figma variables, `brand/` collection).

| Name | Token | Hex |
|---|---|---|
| Molten Red | `brand/molten-red` | `#ff1414` |
| Volcanic Red | `brand/volcanic-red` | `#d5121b` |
| Dark Ash | `brand/dark-ash` | `#2e2a2a` |
| White | `brand/white` | `#ffffff` |
| Burnt Red | `brand/burnt-red` | `#720008` |
| Dusk Red | `brand/dusk-red` | `#a5000c` |
| Sandstone | `brand/sandstone` | `#ebe2db` |
| Sand | `brand/sand` | `#fdf7f3` |

## CSS custom properties

```css
:root {
  --brand-molten-red: #ff1414;
  --brand-volcanic-red: #d5121b;
  --brand-dark-ash: #2e2a2a;
  --brand-white: #ffffff;
  --brand-burnt-red: #720008;
  --brand-dusk-red: #a5000c;
  --brand-sandstone: #ebe2db;
  --brand-sand: #fdf7f3;
}
```

Pull directly from Figma variables again with `get_variable_defs` if the Playbook file's palette changes — don't hand-guess hex values from screenshots.
