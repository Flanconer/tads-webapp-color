document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorBox = document.getElementById("colorBox");
    const hexInput = document.getElementById("hexInput");

    function updateColor() {
        const r = parseInt(red.value);
        const g = parseInt(green.value);
        const b = parseInt(blue.value);

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();

        colorBox.style.backgroundColor = hex;
        hexInput.value = hex;
    }

    function updateSliders() {
        const r = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
        const g = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
        const b = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        red.value = r;
        green.value = g;
        blue.value = b;

        updateColor();
    }

    function hexToRgb(hex) {
        hex = hex.replace(/^#/, "");
        if (hex.length === 3) {
            hex = hex.split("").map(x => x + x).join("");
        }
        if (hex.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
            return null;
        }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return { r, g, b };
    }

    function updateFromHex() {
        const rgb = hexToRgb(hexInput.value.trim());
        if (!rgb) return;

        red.value = rgb.r;
        green.value = rgb.g;
        blue.value = rgb.b;
        redInput.value = rgb.r;
        greenInput.value = rgb.g;
        blueInput.value = rgb.b;

        updateColor();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);
    hexInput.addEventListener("input", updateFromHex);

    updateColor();
});
