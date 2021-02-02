class SlidesJS{

    working = false;

    constructor(el) {
        this.el = el;
    }


    slideUp(duration = 500, origin = 'top', from, to) {
        if(this.working) return;

        this.working = true;

        this.el.style.overflow = 'hidden';
        this.el.style.transform = 'scaleY(1)';
        this.el.style.transformOrigin = origin;
        setTimeout(() => {
            let animation = this.el.animate([
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
                this.el.style.overflow = 'auto';
                this.working = false;
            });
        });
    }
    slideDown(duration = 500, origin = 'top', from, to) {
        if(this.working) return;

        this.working = true;

        this.el.style.overflow = 'hidden';
        this.el.style.transform = 'scaleY(0)';
        this.el.style.transformOrigin = origin;
        setTimeout(() => {
            let animation = this.el.animate([
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
                this.el.style.overflow = 'auto';
                this.working = false;
            });
        },100);
    }

    slideRight(duration = 500, origin = 'left', from, to) {
        if(this.working) return;

        this.working = true;

        this.el.style.overflow = 'hidden';
        this.el.style.transformOrigin = origin;
        setTimeout(() => {
            let animation = this.el.animate([
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
                this.el.style.overflow = 'auto';
                this.working = false;
            });
        })
    }
    slideLeft(duration = 500, origin = 'left', from, to) {
        if(this.working) return;

        this.working = true;

        this.el.style.overflow = 'hidden';
        this.el.style.transformOrigin = origin;
        setTimeout(() => {
            let animation = this.el.animate([
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
                this.el.style.overflow = 'auto';
                this.working = false;
            });
        },100);
    };



    slideToggleY(duration = 500, origin = 'top', from = 0, to = 1) {
        const style = window.getComputedStyle(this.el);
        const matrix = new WebKitCSSMatrix(style.transform);
        const scaleY = matrix.m22;

        if(scaleY > 0) this.slideUp(duration, origin, from, to);
        else this.slideDown(duration, origin, from, to);
    }
    slideToggleX(duration = 500, origin = 'left', from = 0, to = 1) {
        const style = window.getComputedStyle(this.el);
        const matrix = new WebKitCSSMatrix(style.transform);
        const scaleX = matrix.m11;

        if(scaleX > 0) this.slideRight(duration, origin, from, to);
        else this.slideLeft(duration, origin, from, to);
    }
}

