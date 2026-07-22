# Section 6 — Hardware Component Images

Place component photos inside `public/hardware/` using the **exact filenames** listed below.

## Rules
- **Preferred format: JPG.**
- **Recommended size: 800 × 600 px** (or any clean 4:3 landscape). Images are cropped with `object-cover`.
- Filenames must match exactly — images without a matching filename will not load.
- If an image is missing or fails to load, the **fallback icon shows automatically**, so the section always renders.
- Each image appears in a white, rounded, soft-shadow box with a subtle zoom-on-hover.

## Filenames

| Filename | Hardware block |
|----------|----------------|
| `36v-smps.jpg` | 36V SMPS (Power Input) |
| `bulk-capacitor.jpg` | 1000µF / 50V bulk capacitor |
| `bleeder-resistor.jpg` | 10kΩ bleeder resistor |
| `power-indicator-led.jpg` | Power indicator LED |
| `buck-converter.jpg` | 36V → 5V buck converter |
| `esp32.jpg` | ESP32 controller |
| `mcp23017.jpg` | MCP23017 / GPIO expander |
| `ldd-700l-driver.jpg` | LDD-700L constant-current driver |
| `cree-cxb1512-cob-led.jpg` | CREE CXB1512 COB LED |
| `max3485-rs485.jpg` | MAX3485 RS485 transceiver |
| `usb-rs485-converter.jpg` | USB-to-RS485 converter |
| `ds3231-rtc.jpg` | DS3231 RTC module |
| `start-button.jpg` | Start button |
| `stop-button.jpg` | Stop button |
| `green-status-led.jpg` | Green status LED |
| `red-status-led.jpg` | Red status LED |
| `terminal-block.jpg` | Terminal block |
| `alloy-wheel.jpg` | Alloy wheel (inspection target) |
| `camera.jpg` | Inspection camera |

## Changing format (optional)
To use .png/.webp, edit the `image:` paths in the `HARDWARE` object in
`src/data/presentationData.js` (and the few inline `image="..."` props in
`src/components/HardwareArchitecture.jsx`) and replace `.jpg`.
