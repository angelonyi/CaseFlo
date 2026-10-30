# CaseFlo Colour Roles

## 1. Colour Roles

CaseFlo uses a colour system based on Material Design 3. Colour roles define how colours are used across the application to maintain consistency, readability, and accessibility.

The colour system includes primary, secondary, tertiary, surface, outline, error, success, and warning colours.
| Colour Role | Token Value | Usage |
|---|---|---|
| Primary | `#0044E3` | Main actions and primary buttons |
| On Primary | `#FFFFFF` | Text and icons on primary backgrounds |
| Primary Container | `#EEF0FF` | Backgrounds for highlighted content |
| On Primary Container | `#0034B7` | Text and icons on primary container backgrounds |
| Secondary | `#4D628B` | Secondary actions and interface elements |
| Tertiary | `#2B5897` | Additional emphasis where needed |
| Surface | `#FAF8FF` | Main screen and content backgrounds |
| On Surface | `#1A1B21` | Main text and icons |
| Surface Variant | `#DFE2EF` | Alternative backgrounds for content areas |
| Outline | `#727681` | Input borders and outlines |
| Error | `#BA1A1A` | Error messages and states |
| Success | `#1B6C31` | Success messages and states |
| Warning | `#7A5900` | Warning messages and states |

## 2. Colour Contrast Checks

I checked colour combinations used in CaseFlo to make sure the text is readable against its background.

| Foreground | Background | Contrast Ratio | Usage | Result |
|---|---|---:|---|---|
| `#FFFFFF` | `#0044E3` | 7.15:1 | Text on primary buttons | Pass |
| `#0044E3` | `#FFFFFF` | 7.15:1 | Links on white backgrounds | Pass |
| `#1A1B21` | `#FAF8FF` | 16.31:1 | Main body text | Pass |
| `#727681` | `#FAF8FF` | 4.31:1 | Input borders | Pass |
| `#BA1A1A` | `#FAF8FF` | 6.13:1 | Error messages | Pass |
| `#0034B7` | `#EEF0FF` | 8.53:1 | Text on highlighted backgrounds | Pass |
| `#7A5900` | `#FAF8FF` | 6.12:1 | Warning messages | Pass |
| `#1B6C31` | `#FAF8FF` | 6.16:1 | Success messages | Pass |

## 3. Contrast Requirements

CaseFlo follows these WCAG contrast requirements:

- **Normal text:** At least 4.5:1 for WCAG AA.
- **Large text:** At least 3:1 for WCAG AA.
- **UI components:** At least 3:1 where required.
- **Normal text (higher accessibility level):** At least 7:1 for WCAG AAA.

## 4. Accessibility Notes

All tested colour combinations meet the required WCAG AA contrast ratios for their intended use.