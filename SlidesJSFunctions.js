const slideUp = (el, duration = 500, origin = 'top', from, to) => {
    el.style.overflow = 'hidden';
    el.style.transform = 'scaleY(1)';
    el.style.transformOrigin = origin;
    setTimeout(() => {
        let animation = el.animate([
                {
                    transform: `scaleY(${to})`
                },
                {
                    transform: `scaleY(${from})`
                }
            ], {
                duration: duration,
                iterations: 1,
                fill: "forwards",
                easing: "ease-in-out"
            }
        );
        animation.finished.then(() => {
            el.style.overflow = 'auto';
        });
    })
};
const slideDown = (el, duration = 500, origin = 'top', from, to) => {
    el.style.overflow = 'hidden';
    el.style.transform = 'scaleY(0)';
    el.style.transformOrigin = origin;
    setTimeout(() => {
        let animation = el.animate([
                {
                    transform: `scaleY(${from})`
                },
                {
                    transform: `scaleY(${to})`
                }
            ], {
                duration: duration,
                iterations: 1,
                fill: "forwards",
                easing: "ease-in-out"
            }
        );
        animation.finished.then(() => {
            el.style.overflow = 'auto';
        });
    },100);
};

const slideRight = (el, duration = 500, origin = 'left', from, to) => {
    el.style.overflow = 'hidden';
    el.style.transformOrigin = origin;
    setTimeout(() => {
        let animation = el.animate([
                {
                    transform: `scaleX(${to})`
                },
                {
                    transform: `scaleX(${from})`
                }
            ], {
                duration: duration,
                iterations: 1,
                fill: "forwards",
                easing: "ease-in-out"
            }
        );
        animation.finished.then(() => {
            el.style.overflow = 'auto';
        });
    })
};
const slideLeft = (el, duration = 500, origin = 'left', from, to) => {
    el.style.overflow = 'hidden';
    el.style.transformOrigin = origin;
    setTimeout(() => {
        let animation = el.animate([
                {
                    transform: `scaleX(${from})`
                },
                {
                    transform: `scaleX(${to})`
                }
            ], {
                duration: duration,
                iterations: 1,
                fill: "forwards",
                easing: "ease-in-out"
            }
        );
        animation.finished.then(() => {
            el.style.overflow = 'auto';
        });
    },100);
};



const slideToggleY = (el, duration = 500, origin = 'top', from = 0, to = 1) => {
    const style = window.getComputedStyle(el);
    const matrix = new WebKitCSSMatrix(style.transform);
    const scaleY = matrix.m22;

    if(scaleY > 0) slideUp(el, duration, origin, from, to);
    else slideDown(el, duration, origin, from, to);
}
const slideToggleX = (el, duration = 500, origin = 'left', from = 0, to = 1) => {
    const style = window.getComputedStyle(el);
    const matrix = new WebKitCSSMatrix(style.transform);
    const scaleX = matrix.m11;

    if(scaleX > 0) slideRight(el, duration, origin, from, to);
    else slideLeft(el, duration, origin, from, to);
}

