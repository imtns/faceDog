const {
    windowWidth,
    pixelRatio
} = wx.getSystemInfoSync();

const px = (n) => {
    if (typeof n === 'undefined') return void 0;
    if (!n) return 0;
    return parseInt(n, 10) / 750 * windowWidth;
}; 

/**
    shape Radial/Linear
    start Array [x, y, width, height]
    colorStop Array [stop, color]
    end Array [x, y, width, height]
*/
const fillColor = (ctx, start, end, colorStop, shape) => {
    let grd = null;

    if (shape === 'Radial') {
        const [x, y, r] = start;
        grd = ctx.createCircularGradient(...[px(x), px(y), px(r)]);
    } else {
        const [x0, y0, x1, y1] = start;
        grd = ctx.createLinearGradient(...[px(x0), px(y0), px(x1), px(y1)]);
    }
    colorStop.forEach((cs) => {
        grd.addColorStop(...cs);
    });
    ctx.setFillStyle(grd);

    const [x, y, widht, height] = end;
    ctx.fillRect(...[px(x), px(y), px(widht), px(height)]);
};

const roundRect = (ctx, px, py, width, height, radius, lineWidth) => {
    const x = px - lineWidth / 2;
    const y = py - lineWidth / 2;
    const w = width + lineWidth;
    const h = height + lineWidth;
    const r = Math.min(radius, h / 2, w / 2);
    ctx.setLineWidth(lineWidth);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    // ctx.arcTo(x + w, y, x + w, y + h, r);
    // ctx.arcTo(x + w, y + h, x, y + h, r);
    // ctx.arcTo(x, y + h, x, y, r);
    // ctx.arcTo(x, y, x + w, y, r);
    ctx.lineTo(x + w - r, y);
    ctx.arc(x + w - r, y + r, r, -Math.PI / 2, 0);
    ctx.lineTo(x + w, y + h - r);
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI / 2);
    ctx.lineTo(x + r, y + h);
    ctx.arc(x + r, y + h - r, r, Math.PI / 2, Math.PI);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
    ctx.clip();
};

const formatBorder = (border) => {
    if (!border) return [0, 'rgba(0,0,0,0)'];
    const borderArr = border.split(' ');
    borderArr[0] = px(borderArr[0]);
    if (!borderArr[1]) borderArr[1] = 'rgba(0,0,0,0)';
    return borderArr;
};

const formatPadding = (padding) => {
    let paddingArr = [];
    if (typeof padding === 'number') {
        paddingArr.length = 4;
        paddingArr.fill(px(padding));
    } else {
        paddingArr = padding.split(' ').map(p => px(p));
    }
    return paddingArr;
};

const formatText = (ctx, text, pxMW, pxLH) => {
    const textArr = [];
    let tempArr = [];
    let tempWidth = 0;
    text.split('').forEach(word => {
        const w = ctx.measureText(word).width;

        if (tempWidth + w > pxMW) {
            textArr.push(tempArr.join(''));
            tempArr = [word];
            tempWidth = 0;
        } else {
            tempArr.push(word);
            tempWidth = w + tempWidth + 1;
        }
    });
    if (tempArr.length > 0) {
        textArr.push(tempArr.join(''));
    }
    const textWidth = textArr.length > 1 ? pxMW : ctx.measureText(text).width;
    const textHeight = textArr.length * pxLH;
    return {textArr, textWidth, textHeight};
};

function drawed() {
    const {
        width,
        height,
        fileType
    } = this.data;

    const self = this;
    const destWidth = px(width) * pixelRatio;
    const destHeight = px(height) * pixelRatio;
    wx.canvasToTempFilePath({
        destWidth,
        destHeight,
        canvasId: 'draw-canvas',
        fileType,
        success(res) {
            self.setData({
                imageUrl: res.tempFilePath
            });
            self.triggerEvent('toTempFile', res);
        }
    }, this);
}

Component({
    properties: {
        width: {
            type: Number,
            value: 750
        },
        height: {
            type: Number,
            value: 500
        },
        layers: {
            type: Array,
            value: []
        },
        background: {
            type: Object,
            value: null
        },
        fileType: {
            type: String,
            value: 'png'
        }
    },

    data: {
        imageUrl: null
    },

    attached() {
        const {
            background,
            layers,
            width,
            height
        } = this.data;
        console.log(background, layers, width, height);
        const ctx = wx.createCanvasContext('draw-canvas', this);
        // 背景图片
        if (background) {
            const {
                imageResource,
                dx = 0,
                dy = 0,
                dWidth = width,
                dHeight = height,
                color
            } = background;
            // 背景颜色
            if (color) {
                const {
                    start,
                    end,
                    colorStop,
                    shape = 'Linear'
                } = color;
                fillColor(ctx, start, end, colorStop, shape);
            }

            imageResource && ctx.drawImage(imageResource, px(dx), px(dy), px(dWidth), px(dHeight));
        }

        // 图层
        layers.forEach((layer) => {
            if (layer.type === 'text') {
                const {
                    // textBaseline = 'top',
                    textAlign = 'left',
                    fontSize = 32,
                    text = '',
                    x = 0,
                    y = 0,
                    color = '#000',
                    lineHeight = 44,
                    maxWidth = width,
                    border = '0',
                    radius = 0,
                    padding = 0,
                    bgColor = null,
                    maxLine = 0,
                    bold = false
                } = layer;
                const pxx = px(x);
                const pxy = px(y);
                const pxFS = px(fontSize);
                const pxLH = px(lineHeight);
                const pxMW = px(maxWidth);
                const pxRadius = px(radius);
                if (bold) {
                    ctx.font = 'normal bold 20px/30px PingFangSC-Regular';
                } else {
                    ctx.font = 'normal normal 20px/30px PingFangSC-Regular';
                }
                ctx.setFontSize(pxFS);

                // border
                const [pxbw, bc] = formatBorder(border);
                // padding 上右下左
                const [pt, pr, pb, pl] = formatPadding(padding);

                let {textArr, textWidth, textHeight} = formatText(ctx, text, pxMW, pxLH);
                // console.log(textArr, maxLine, textWidth);
                if (maxLine) {
                    const overLine = textArr.length > maxLine;
                    textArr.length = maxLine;
                    if (overLine) {
                        const strArr = textArr[maxLine - 1].split('');
                        strArr.splice((strArr.length - 2), 2, '...', '...');
                        textArr.splice(maxLine - 1, 1, strArr.join(''));
                    }
                }
                // 背景
                // if (bgColor) {
                //     ctx.setStrokeStyle(bgColor);
                //     ctx.setLineJoin(radius ? 'round' : 'miter');
                //     const textBgWidth = pxMW + pl + pr;
                //     const textBgHeight = textHeight + pt + pb;
                //     ctx.setFillStyle(bgColor);
                //     ctx.fillRect(pxx - pl, pxy, pxMW + pl + pr, textHeight);
                //     ctx.setLineWidth(pxRadius);
                //     ctx.strokeRect(pxx - pl, pxy - pt,
                //         textBgWidth, textBgHeight - pxRadius);
                // }

                // 真实宽高
                const realWidth = textWidth + pl + pr;
                const realHeight = textHeight + pt + pb;

                let realX = pxx - pl;
                let realY = pxy - pt;
                if (textAlign === 'right') {
                    realX = pxx - pl - textWidth;
                    realY = pxy - pt;
                } else if (textAlign === 'center') {
                    realX = pxx - pl - textWidth / 2;
                    realY = pxy - pt;
                }

                // 边框
                ctx.save();
                ctx.setStrokeStyle(bc);
                roundRect(ctx, realX, realY, realWidth, realHeight, pxRadius, pxbw);
                if (bgColor) {
                    ctx.setFillStyle(bgColor);
                    ctx.fillRect(realX, realY, realWidth, realHeight);
                }
                ctx.stroke();
                ctx.restore();

                ctx.setFillStyle(color);
                ctx.setTextBaseline('top');
                ctx.setTextAlign(textAlign);
                textArr.forEach((str, i) => {
                    ctx.fillText(str, pxx, pxy + i * pxLH, pxMW);
                });
            }

            if (layer.type === 'color') {
                const {
                    start,
                    end,
                    colorStop,
                    shape = 'Linear'
                } = layer;
                fillColor(ctx, start, end, colorStop, shape);
            }

            if (layer.type === 'image') {
                const {
                    imageResource,
                    dx = 0,
                    dy = 0,
                    radius = 0,
                    dWidth = width,
                    dHeight = height,
                    sWidth,
                    sHeight,
                    cutX = 0,
                    cutY = 0,
                    cut,
                    border
                } = layer;
                const [pxbw, bc] = formatBorder(border);
                const [pxdx, pxdy, pxdWidth, pxdHeight, pxdRadius] =
                    [px(dx), px(dy), px(dWidth), px(dHeight), px(radius)];
                if (cut) {
                    ctx.drawImage(imageResource, cutX, cutY, sWidth, sHeight, dx, dy, dWidth, dHeight);
                } else if (radius) {
                    ctx.save();
                    ctx.setStrokeStyle(bc);
                    roundRect(ctx, pxdx, pxdy, pxdWidth, pxdHeight, pxdRadius, pxbw);
                    ctx.drawImage(imageResource, pxdx, pxdy, pxdWidth, pxdHeight);
                    ctx.restore();
                } else {
                    ctx.drawImage(imageResource, pxdx, pxdy, pxdWidth, pxdHeight);
                }
            }
        });
        ctx.draw(false, () => {
            drawed.call(this);
        });

        setTimeout(() => {
            drawed.call(this);
        }, 1000);

        setTimeout(() => {
            drawed.call(this);
        }, 1000);
    }
});
