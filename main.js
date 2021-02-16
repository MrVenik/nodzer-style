function hexToR(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return +r;
}

function hexToG(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return +g;
}

function hexToB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return +b;
}

function RGBToH(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0)
    h += 360;
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return h;
}

function RGBToS(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0)
    h += 360;
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return s;
}

function RGBToL(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0)
    h += 360;
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return l;
}

function changeColor(event) {
  let color = event.target.value;
  let r = hexToR(color);
  let g = hexToG(color);
  let b = hexToB(color);

  let h = RGBToH(r,g,b);
  let s = RGBToS(r,g,b);
  let l = RGBToL(r,g,b);

  let textl = (l > 55) ? 10 : 90;
  let textm = (l > 55) ? -1 : 1;
  let root = document.documentElement;
  root.style.setProperty('--background-h', h + "deg");
  root.style.setProperty('--background-s', s + "%");
  root.style.setProperty('--background-l', l + "%");
  root.style.setProperty('--background-text-l', textl + "%");
  root.style.setProperty('--background-text-m', textm);
}


/*class PanZoom {
    constructor() {
      this.posX = 0;
      this.posY = 0;
      this.zoomLvl = 1.0;
      this.targetDiv = undefined;
      this.zoom = (event) => {
        event.preventDefault();
        const scalingAmounts = {
          0: 1,
          1: 20,
          2: 1000,
        };
        let delta = -event.deltaY * 0.0007 * scalingAmounts[event.deltaMode];
        this.zoomAt(window.innerWidth * 0.45, window.innerHeight * 0.35, 1 + delta);
        this.setZoom();
      };
      this.zoomAt = (x, y, amount) => {
        const maxZoom = 3;
        const minZoom = 0.2;
        this.zoomLvl *= amount;
        if (this.zoomLvl > maxZoom) {
          amount = maxZoom / (this.zoomLvl / amount);
          this.zoomLvl = maxZoom;
        }
        if (this.zoomLvl < minZoom) {
          amount = minZoom / (this.zoomLvl / amount);
          this.zoomLvl = minZoom;
        }
        let dX = (x - this.posX) * (1 - amount);
        let dY = (y - this.posY) * (1 - amount);
        this.posX += dX;
        this.posY += dY;
      };
      this.startPan = (event) => {
        if(event.button === 1)
        {
            event.preventDefault();
            window.addEventListener("mousemove", this.pan);
            window.addEventListener("mouseup", this.endPan);
        }
      };
      this.endPan = () => {
        window.removeEventListener("mousemove", this.pan);
        window.removeEventListener("mouseup", this.endPan);
      };
      this.pan = (event) => {
        event.preventDefault();
        this.posX += event.movementX;
        this.posY += event.movementY;
        this.setZoom();
      };
      this.setZoom = () => {
        if (!this.targetDiv) {
          this.targetDiv = document.getElementById("panzoom");
        }
        this.targetDiv.style.transform = `translate(${this.posX}px, ${this.posY}px) scale(${this.zoomLvl})`;
      };
      this.clientToGraphPos = (clientX, clientY) => {
        if (!this.targetDiv) {
          this.targetDiv = document.getElementById("panzoom");
        }
        let rect = this.targetDiv.getBoundingClientRect();
        let x = (clientX - rect.left) / this.zoomLvl;
        let y = (clientY - rect.top) / this.zoomLvl;
        return [x, y];
      };
    }
  }
  window.panzoom = new PanZoom();*/