/**
 * Created by theon on 6/29/2017.
 */
import React, {Component} from 'react';
import Sketch from 'sketch-js';

const WIDTH = 142;
const HEIGHT = 142;

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const compressor = audioContext.createDynamicsCompressor();

var ALPHA, AudioAnalyser, COLORS, MP3_PATH, NUM_BANDS, NUM_PARTICLES, Particle, SCALE, SIZE, SMOOTHING, SPEED, SPIN;
var round = Math.round,


    NUM_BANDS = 128;

SMOOTHING = 0.5;

MP3_PATH = 'https://api.soundcloud.com/tracks/42328219/stream?client_id=b1495e39071bd7081a74093816f77ddb';

SCALE = {
    MIN: 5.0,
    MAX: 80.0
};

SPEED = {
    MIN: 0.2,
    MAX: 1.0
};

ALPHA = {
    MIN: 0.8,
    MAX: 0.9
};

SPIN = {
    MIN: 0.001,
    MAX: 0.005
};

SIZE = {
    MIN: 0.5,
    MAX: 1.25
};

COLORS = ['#69D2E7', '#1B676B', '#BEF202', '#EBE54D', '#00CDAC', '#1693A5', '#F9D423', '#FF4E50', '#E7204E', '#0CCABA', '#FF006F'];
let context = null;

class Analyser extends Component {
    constructor(props, context) {
        super(props, context);
        this.analyser = audioContext.createAnalyser();
    }

    // componentDidMount() {
    //     // analyzer
    //     this.analyser.fftSize = 2048;
    //     this.bufferLength = this.analyser.fftSize;
    //     this.dataArray = new Uint8Array(this.bufferLength);
    //     this.analyser.getByteTimeDomainData(this.dataArray);
    //     this.canvas = document.getElementById('analyser-canvas');
    //     this.canvasContext = this.canvas.getContext('2d');
    //
    //     this.draw();
    // }

    componentDidMount() {

        var random = Math.random,
            floor = Math.floor,
            round = Math.round,
            sin = Math.sin,
            cos = Math.cos,
            PI = Math.PI,
            TWO_PI = PI * 2,
            PI_HALF = PI / 180,
            max = Math.max,
            exp = Math.exp,
            NUM_PARTICLES = 150;
        //
        // const node = this.props;
        // node.connect(this.analyser);
        //
        AudioAnalyser = (function () {
            var random = Math.random,
                floor = Math.floor,
                round = Math.round,
                sin = Math.sin,
                cos = Math.cos,
                PI = Math.PI,
                TWO_PI = PI * 2,
                PI_HALF = PI / 180,
                max = Math.max,
                exp = Math.exp,
                NUM_PARTICLES = 150;


            AudioAnalyser.AudioContext = AudioContext;

            AudioAnalyser.enabled = AudioAnalyser.AudioContext != null;

            function AudioAnalyser(audio, numBands, smoothing) {
                var src;
                this.audio = audio != null ? audio : new Audio();
                this.numBands = numBands != null ? numBands : 256;
                this.smoothing = smoothing != null ? smoothing : 0.3;
                if (typeof this.audio === 'string') {
                    src = this.audio;
                    this.audio = new Audio();
                    this.audio.crossOrigin = "anonymous";
                    this.audio.controls = true;
                    this.audio.src = src;
                }
                this.context = new AudioAnalyser.AudioContext();
                this.jsNode = this.context.createScriptProcessor(2048, 1, 1);
                this.analyser = this.context.createAnalyser();
                this.analyser.smoothingTimeConstant = this.smoothing;
                this.analyser.fftSize = this.numBands * 2;
                this.bands = new Uint8Array(this.analyser.frequencyBinCount);
                this.audio.addEventListener('canplay', (function (_this) {
                    return function () {
                        _this.source = _this.context.createMediaElementSource(_this.audio);
                        _this.source.connect(_this.analyser);
                        _this.analyser.connect(_this.jsNode);
                        _this.jsNode.connect(_this.context.destination);
                        _this.source.connect(_this.context.destination);
                        return _this.jsNode.onaudioprocess = function () {
                            _this.analyser.getByteFrequencyData(_this.bands);
                            if (!_this.audio.paused) {
                                return typeof _this.onUpdate === "function" ? _this.onUpdate(_this.bands) : void 0;
                            }
                        };
                    };
                })(this));
            }

            AudioAnalyser.prototype.start = function () {
                return this.audio.play();
            };

            AudioAnalyser.prototype.stop = function () {
                return this.audio.pause();
            };

            return AudioAnalyser;

        })();

        // Particle = (function () {
        //
        //     var random = Math.random,
        //         floor = Math.floor,
        //         round = Math.round,
        //         sin = Math.sin,
        //         cos = Math.cos,
        //         PI = Math.PI,
        //         TWO_PI = PI * 2,
        //         PI_HALF = PI / 180,
        //         max = Math.max,
        //         exp = Math.exp,
        //         NUM_PARTICLES = 150;
        //     function Particle(x1, y1) {
        //         this.x = x1 != null ? x1 : 0;
        //         this.y = y1 != null ? y1 : 0;
        //         this.reset();
        //     }
        //
        //     Particle.prototype.reset = function () {
        //         this.level = 1 + floor(random(4));
        //         this.scale = random(SCALE.MIN, SCALE.MAX);
        //         this.alpha = random(ALPHA.MIN, ALPHA.MAX);
        //         this.speed = random(SPEED.MIN, SPEED.MAX);
        //         this.color = random(COLORS);
        //         this.size = random(SIZE.MIN, SIZE.MAX);
        //         this.spin = random(SPIN.MAX, SPIN.MAX);
        //         this.band = floor(random(NUM_BANDS));
        //         if (random() < 0.5) {
        //             this.spin = -this.spin;
        //         }
        //         this.smoothedScale = 0.0;
        //         this.smoothedAlpha = 0.0;
        //         this.decayScale = 0.0;
        //         this.decayAlpha = 0.0;
        //         this.rotation = random(TWO_PI);
        //         return this.energy = 0.0;
        //     };
        //
        //     Particle.prototype.move = function () {
        //         this.rotation += this.spin;
        //         return this.y -= this.speed * this.level;
        //     };
        //
        //     Particle.prototype.draw = function (ctx) {
        //         var alpha, power, scale;
        //         power = exp(this.energy);
        //         scale = this.scale * power;
        //         alpha = this.alpha * this.energy * 1.5;
        //         this.decayScale = max(this.decayScale, scale);
        //         this.decayAlpha = max(this.decayAlpha, alpha);
        //         this.smoothedScale += (this.decayScale - this.smoothedScale) * 0.3;
        //         this.smoothedAlpha += (this.decayAlpha - this.smoothedAlpha) * 0.3;
        //         this.decayScale *= 0.985;
        //         this.decayAlpha *= 0.975;
        //         ctx.save();
        //         ctx.beginPath();
        //         ctx.translate(this.x + cos(this.rotation * this.speed) * 250, this.y);
        //         ctx.rotate(this.rotation);
        //         ctx.scale(this.smoothedScale * this.level, this.smoothedScale * this.level);
        //         ctx.moveTo(this.size * 0.5, 0);
        //         ctx.lineTo(this.size * -0.5, 0);
        //         ctx.lineWidth = 1;
        //         ctx.lineCap = 'round';
        //         ctx.globalAlpha = this.smoothedAlpha / this.level;
        //         ctx.strokeStyle = this.color;
        //         ctx.stroke();
        //         return ctx.restore();
        //     };
        //
        //     return Particle;
        //
        // })();
        //
        // Sketch.create({
        //     container: document.getElementById('waveform'),
        //     particles: [],
        //     setup: function () {
        //         var analyser, error, i, intro, j, particle, ref, warning, x, y;
        //         for (i = j = 0, ref = NUM_PARTICLES - 1; j <= ref; i = j += 1) {
        //             x = random(this.width);
        //             y = random(this.height * 2);
        //             particle = new Particle(x, y);
        //             particle.energy = random(particle.band / 256);
        //             this.particles.push(particle);
        //         }
        //         if (AudioAnalyser.enabled) {
        //             try {
        //                 analyser = new AudioAnalyser(MP3_PATH, NUM_BANDS, SMOOTHING);
        //                 analyser.onUpdate = (function (_this) {
        //                     return function (bands) {
        //                         var k, len, ref1, results;
        //                         ref1 = _this.particles;
        //                         results = [];
        //                         for (k = 0, len = ref1.length; k < len; k++) {
        //                             particle = ref1[k];
        //                             results.push(particle.energy = bands[particle.band] / 256);
        //                         }
        //                         return results;
        //                     };
        //                 })(this);
        //                 analyser.start();
        //                 document.getElementById('waveform').appendChild(analyser.audio);
        //                 intro = document.getElementById('intro');
        //                 intro.style.display = 'none';
        //                 if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
        //                     warning = document.getElementById('warning2');
        //                     return warning.style.display = 'block';
        //                 }
        //             } catch (_error) {
        //                 error = _error;
        //             }
        //
        //
        //         } else {
        //             warning = document.getElementById('warning1');
        //             return warning.style.display = 'block';
        //         }
        //     },
        //     draw: function () {
        //         var j, len, particle, ref, results;
        //         this.globalCompositeOperation = 'lighter';
        //         ref = this.particles;
        //         results = [];
        //         for (j = 0, len = ref.length; j < len; j++) {
        //             particle = ref[j];
        //             if (particle.y < -particle.size * particle.level * particle.scale * 2) {
        //                 particle.reset();
        //                 particle.x = random(this.width);
        //                 particle.y = this.height + particle.size * particle.scale * particle.level;
        //             }
        //             particle.move();
        //             results.push(particle.draw(this));
        //         }
        //         return results;
        //     }
        // });

        function Particle(x, y, radius) {
            this.init(x, y, radius);
        }

        Particle.prototype = {

            init: function (x, y, radius) {

                this.alive = true;

                this.radius = radius || 100;
                this.wander = 0.15;
                this.theta = getRandomArbitrary(0, TWO_PI);
                this.drag = 0.92;
                this.color = '#fff';

                this.x = x || 0.0;
                this.y = y || 0.0;

                this.vx = 0.0;
                this.vy = 0.0;
            },

            move: function () {

                this.x += this.vx;
                this.y += this.vy;

                this.vx *= this.drag;
                this.vy *= this.drag;

                this.theta += getRandomArbitrary(-0.5, 0.5) * this.wander;
                this.vx += sin(this.theta) * 0.1;
                this.vy += cos(this.theta) * 0.1;

                this.radius *= 0.96;
                this.alive = this.radius > 0.5;
            },

            draw: function (ctx) {

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        };
        var MAX_PARTICLES = 280;
        var COLOURS = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423'];

        var particles = [];
        var pool = [];

        var demo = Sketch.create({
            container: document.getElementById('waveform'),
            fullscreen: false,
            width: 300,
            height: 300

        });

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        demo.setup = function () {

            // Set off some initial particles.
            var i, x, y;

            for (i = 0; i < 20; i++) {
                x = ( demo.width * 0.5 ) + getRandomArbitrary(-100, 100);
                y = ( demo.height * 0.5 ) + getRandomArbitrary(-100, 100);
                demo.spawn(x, y);
            }
        };

        demo.spawn = function (x, y) {

            if (particles.length >= MAX_PARTICLES) {
                pool.push(particles.shift());
            }

            var particle = pool.length ? pool.pop() : new Particle();
            particle.init(x, y, getRandomArbitrary(5, 40));

            particle.wander = getRandomArbitrary(0.5, 2.0);

            particle.color = COLOURS[Math.floor(random() * COLOURS.length)];
            particle.drag = getRandomArbitrary(0.9, 0.99);

            var theta = getRandomArbitrary(0, TWO_PI);
            var force = getRandomArbitrary(2, 8);

            particle.vx = sin(theta) * force;
            particle.vy = cos(theta) * force;

            particles.push(particle);
        };

        demo.update = function () {

            var i, particle;

            for (i = particles.length - 1; i >= 0; i--) {

                particle = particles[i];

                if (particle.alive) particle.move();
                else pool.push(particles.splice(i, 1)[0]);
            }
        };

        demo.draw = function () {

            demo.globalCompositeOperation = 'lighter';

            for (var i = particles.length - 1; i >= 0; i--) {
                particles[i].draw(demo);
            }
        };

        demo.mousemove = function () {

            var particle, theta, force, touch, max, i, j, n;

            for (i = 0, n = demo.touches.length; i < n; i++) {
                touch = demo.touches[i];
                max = getRandomArbitrary(1, 4);
                for (j = 0; j < max; j++) {
                    demo.spawn(touch.x, touch.y);
                }

            }
        };
    }


    draw() {
        requestAnimationFrame(this.draw.bind(this));
        this.analyser.getByteTimeDomainData(this.dataArray);

        this.canvasContext.fillStyle = 'rgb(0, 25, 0)';
        this.canvasContext.fillRect(0, 0, WIDTH, HEIGHT);

        this.canvasContext.lineWidth = 2;
        this.canvasContext.strokeStyle = 'rgb(0, 256, 0)';

        this.canvasContext.beginPath();

        const sliceWidth = WIDTH * 1.0 / this.bufferLength;
        let x = 0;

        for (let i = 0; i < this.bufferLength; i++) {

            const v = this.dataArray[i] / 128.0;
            const y = v * HEIGHT / 2;

            if (i === 0) {
                this.canvasContext.moveTo(x, y);
            } else {
                this.canvasContext.lineTo(x, y);
            }
            x += sliceWidth;
        }

        this.canvasContext.lineTo(WIDTH, HEIGHT / 2);
        this.canvasContext.stroke();
    }

    render() {
        return <div id="waveform"></div>;
    }


}

// Analyser.propTypes = {
//     audioContext: PropTypes.object.isRequired,
//     node: PropTypes.object.isRequired
// };

export default Analyser;
