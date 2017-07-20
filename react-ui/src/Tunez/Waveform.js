/**
 * Created by theon on 6/29/2017.
 */
import React, {Component} from 'react';

const WIDTH = 142;
const HEIGHT = 142;

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
// const compressor = audioContext.createDynamicsCompressor();

var ALPHA, AudioAnalyser, COLORS, MP3_PATH, NUM_PARTICLES, Particle, SCALE, SIZE, SMOOTHING, SPEED, SPIN;
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
// let context = null;

class Analyser extends Component {
    constructor(props, context) {
        super(props, context);
        this.analyser = audioContext.createAnalyser();
    }

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
        /*
         * Noel Delgado | @pixelia_me
         *
         * Music by Term and Conditions Mixes
         * https://soundcloud.com/term-and-conditions-mixes/new-year-dubstep-minimix
         */

        var media = [
                this.props.song
            ],
            fftSize = 1024,
            // [32, 64, 128, 256, 512, 1024, 2048]

            // background_color = "rgba(0, 0, 1, 1)",
            background_gradient_color_1 = "#FFFFFF",
            background_gradient_color_2 = "rgba(135, 38, 225, 0.4)",
            background_gradient_color_3 = "rgba(41, 41, 41, 0.5)",

            stars_color = "#465677",
            stars_color_2 = "#B5BFD4",
            stars_color_special = "#F451BA",
            TOTAL_STARS = 1500,
            STARS_BREAK_POINT = 125,
            stars = [],

            waveform_color = "rgba(29, 36, 57, 0.05)",
            waveform_color_2 = "#4E1584",
            waveform_line_color = "rgba(157, 242, 157, 0.11)",
            waveform_line_color_2 = "rgba(157, 242, 157, 0.8)",
            waveform_tick = 5,
            TOTAL_POINTS = fftSize / 2,
            points = [],

            bubble_avg_color = "rgba(29, 36, 57, 0.1)",
            bubble_avg_color_2 = "rgba(29, 36, 57, 0.05)",
            bubble_avg_line_color = "rgba(68, 20, 112, 0.87)",
            bubble_avg_line_color_2 = "rgba(77, 218, 248, 1)",
            bubble_avg_tick = 1,
            TOTAL_AVG_POINTS = 64,
            AVG_BREAK_POINT = 125,
            avg_points = [],

            SHOW_STAR_FIELD = true,
            SHOW_WAVEFORM = true,
            SHOW_AVERAGE = true,

            AudioContext = (window.AudioContext || window.webkitAudioContext),
            PI_TWO = PI * 2,

            w = 0,
            h = 0,
            cx = 0,
            cy = 0,

            playing = false,
            startedAt, pausedAt,

            rotation = 0,
            // msgElement = document.querySelector('#loading .msg'),
            avg, ctx, actx, asource, gainNode, analyser, frequencyData, frequencyDataLength, timeData, audio_buffer;


        window.addEventListener('load', initialize, false);
        window.addEventListener('resize', resizeHandler, false);


        function initialize() {
            if (!AudioContext) {
                return featureNotSupported();
            }

            ctx = document.createElement('canvas').getContext('2d');
            actx = new AudioContext();

            document.getElementById('waveform').appendChild(ctx.canvas);

            resizeHandler();
            initializeAudio();
        }

        function featureNotSupported() {
            hideLoader();
            return document.getElementById('no-audio').style.display = "block";
        }

        function hideLoader() {
            return document.getElementById('loading').className = "hide";
        }

        // function updateLoadingMessage(text) {
        //     msgElement.textContent = text;
        // }

        function initializeAudio() {
            var xmlHTTP = new XMLHttpRequest();

            // updateLoadingMessage("- Loading Audio Buffer -");

            xmlHTTP.open('GET', media[0], true);
            xmlHTTP.responseType = "arraybuffer";

            xmlHTTP.onload = function(e) {
                // updateLoadingMessage("- Decoding Audio File Data -");
                analyser = actx.createAnalyser();
                analyser.fftSize = fftSize;
                analyser.minDecibels = -100;
                analyser.maxDecibels = -30;
                analyser.smoothingTimeConstant = 0.8;

                actx.decodeAudioData(this.response, function(buffer) {
                    console.timeEnd('decoding audio data');

                    // msgElement.textContent = "- Ready -";

                    audio_buffer = buffer;
                    gainNode = actx.createGain();

                    gainNode.connect(analyser);
                    analyser.connect(actx.destination);

                    frequencyDataLength = analyser.frequencyBinCount;
                    frequencyData = new Uint8Array(frequencyDataLength);
                    timeData = new Uint8Array(frequencyDataLength);

                    createStarField();
                    createPoints();
                    createAudioControls();
                }, function(e) { alert("Error decoding audio data" + e.err); });
            };

            xmlHTTP.send();
        }

        function createAudioControls() {
            var playButton = document.getElementsByClassName('Tunez-play')[0];

            playButton.setAttribute('id', 'playcontrol');
            // playButton.textContent = "pause";
            // document.getElementById('waveform').appendChild(playButton);

            playButton.addEventListener('click', function(e) {
                e.preventDefault();
                // this.textContent = playing ? "play" : "pause";
                toggleAudio();
            });

            playAudio();
            // hideLoader();
        }

        function toggleAudio(){
            playing ? pauseAudio() : playAudio();
        }

        function playAudio() {
            playing = true;
            startedAt = pausedAt ? Date.now() - pausedAt : Date.now();
            asource = null;
            asource = actx.createBufferSource();
            asource.buffer = audio_buffer;
            asource.loop = true;
            asource.connect(gainNode);
            pausedAt ? asource.start(0, pausedAt / 1000) : asource.start();

            animate();
        }

        function pauseAudio() {
            playing = false;
            pausedAt = Date.now() - startedAt;
            asource.stop();
        }

        function getAvg(values) {
            var value = 0;

            values.forEach(function(v) {
                value += v;
            })

            return value / values.length;
        }

        function clearCanvas() {
            var gradient = ctx.createLinearGradient(0, 0, 0, h);

            gradient.addColorStop(0, background_gradient_color_1);
            gradient.addColorStop(0.96, background_gradient_color_2);
            gradient.addColorStop(1, background_gradient_color_3);

            ctx.beginPath();
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w, h);
            ctx.fill();
            ctx.closePath();

            gradient = null;
        }

        function drawStarField() {
            var i, len, p, tick;

            for (i = 0, len = stars.length; i < len; i++) {
                p = stars[i];
                tick = (avg > AVG_BREAK_POINT) ? (avg/20) : (avg/50);
                p.x += p.dx * tick;
                p.y += p.dy * tick;
                p.z += p.dz;

                p.dx += p.ddx;
                p.dy += p.ddy;
                p.radius = 0.2 + ((p.max_depth - p.z) * .1);

                if (p.x < -cx || p.x > cx || p.y < -cy || p.y > cy) {
                    stars[i] = new Star();
                    continue;
                }

                ctx.beginPath();
                ctx.globalCompositeOperation = "lighter";
                ctx.fillStyle = p.color;
                ctx.arc(p.x + cx, p.y + cy, p.radius, PI_TWO, false);
                ctx.fill();
                ctx.closePath();
            }

            i = len = p = tick = null;
        }

        function drawAverageCircle() {
            var i, len, p, value, xc, yc;

            if (avg > AVG_BREAK_POINT) {
                rotation += -bubble_avg_tick;
                value = avg + random() * 10;
                ctx.strokeStyle = bubble_avg_line_color_2;
                ctx.fillStyle = bubble_avg_color_2;
            } else {
                rotation += bubble_avg_tick;
                value = avg;
                ctx.strokeStyle = bubble_avg_line_color;
                ctx.fillStyle = bubble_avg_color;
            }

            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.lineCap = "round";

            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rotation);
            ctx.translate(-cx, -cy);

            ctx.moveTo(avg_points[0].dx, avg_points[0].dy);

            for (i = 0, len = TOTAL_AVG_POINTS; i < len - 1; i ++) {
                p = avg_points[i];
                p.dx = p.x + value * sin(PI_HALF * p.angle);
                p.dy = p.y + value * cos(PI_HALF * p.angle);
                xc = (p.dx + avg_points[i+1].dx) / 2;
                yc = (p.dy + avg_points[i+1].dy) / 2;

                ctx.quadraticCurveTo(p.dx, p.dy, xc, yc);
            }

            p = avg_points[i];
            p.dx = p.x + value * sin(PI_HALF * p.angle);
            p.dy = p.y + value * cos(PI_HALF * p.angle);
            xc = (p.dx + avg_points[0].dx) / 2;
            yc = (p.dy + avg_points[0].dy) / 2;

            ctx.quadraticCurveTo(p.dx, p.dy, xc, yc);
            ctx.quadraticCurveTo(xc, yc, avg_points[0].dx, avg_points[0].dy);

            ctx.stroke();
            ctx.fill();
            ctx.restore();
            ctx.closePath();

            i = len = p = value = xc = yc = null;
        }

        function drawWaveform() {
            var i, len, p, value, xc, yc;

            if (avg > AVG_BREAK_POINT) {
                rotation += waveform_tick;
                ctx.strokeStyle = waveform_line_color_2;
                ctx.fillStyle = waveform_color_2;
            } else {
                rotation += -waveform_tick;
                ctx.strokeStyle = waveform_line_color;
                ctx.fillStyle = waveform_color;
            }

            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.lineCap = "round";

            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rotation);
            ctx.translate(-cx, -cy);

            ctx.moveTo(points[0].dx, points[0].dy);

            for (i = 0, len = TOTAL_POINTS; i < len - 1; i ++) {
                p = points[i];
                value = timeData[i];
                p.dx = p.x + value * sin(PI_HALF * p.angle);
                p.dy = p.y + value * cos(PI_HALF * p.angle);
                xc = (p.dx + points[i+1].dx) / 2;
                yc = (p.dy + points[i+1].dy) / 2;

                ctx.quadraticCurveTo(p.dx, p.dy, xc, yc);
            }

            value = timeData[i];
            p = points[i];
            p.dx = p.x + value * sin(PI_HALF * p.angle);
            p.dy = p.y + value * cos(PI_HALF * p.angle);
            xc = (p.dx + points[0].dx) / 2;
            yc = (p.dy +points[0].dy) / 2;

            ctx.quadraticCurveTo(p.dx, p.dy, xc, yc);
            ctx.quadraticCurveTo(xc, yc, points[0].dx, points[0].dy);

            ctx.stroke();
            ctx.fill();
            ctx.restore();
            ctx.closePath();

            i = len = p = value = xc = yc = null;
        }

        function animate() {
            if (!playing) return;

            window.requestAnimationFrame(animate);
            analyser.getByteFrequencyData(frequencyData);
            analyser.getByteTimeDomainData(timeData);
            avg = getAvg([].slice.call(frequencyData)) * gainNode.gain.value;

            clearCanvas();

            if (SHOW_STAR_FIELD) {
                drawStarField();
            }

            if (SHOW_AVERAGE) {
                drawAverageCircle();
            }

            if (SHOW_WAVEFORM) {
                drawWaveform();
            }
        }

        function Star() {
            var xc, yc;

            this.x = Math.random() * w - cx;
            this.y = Math.random() * h - cy;
            this.z = this.max_depth = Math.max(w/h);
            this.radius = 10;

            xc = this.x > 0 ? 1 : -1;
            yc = this.y > 0 ? 1 : -1;

            if (Math.abs(this.x) > Math.abs(this.y)) {
                this.dx = 1.0;
                this.dy = Math.abs(this.y / this.x);
            } else {
                this.dx = Math.abs(this.x / this.y);
                this.dy = 1.0;
            }

            this.dx *= xc;
            this.dy *= yc;
            this.dz = -0.1;

            this.ddx = .001 * this.dx;
            this.ddy = .001 * this.dy;

            if (this.y > (cy/2)) {
                this.color = stars_color_2;
            } else {
                if (avg > AVG_BREAK_POINT + 10) {
                    this.color = stars_color_2;
                } else if (avg > STARS_BREAK_POINT) {
                    this.color = stars_color_special;
                } else {
                    this.color = stars_color;
                }
            }

            xc = yc = null;
        }

        function createStarField() {
            var i = -1;

            while(++i < TOTAL_STARS) {
                stars.push(new Star());
            }

            i = null;
        }

        function Point(config) {
            this.index = config.index;
            this.angle = (this.index * 360) / TOTAL_POINTS;

            this.updateDynamics = function() {
                this.radius = Math.abs(w, h) / 10;
                this.x = cx + this.radius * sin(PI_HALF * this.angle);
                this.y = cy + this.radius * cos(PI_HALF * this.angle);
            };

            this.updateDynamics();

            this.value = Math.random() * 256;
            this.dx = this.x + this.value * sin(PI_HALF * this.angle);
            this.dy = this.y + this.value * cos(PI_HALF * this.angle);
        }

        function AvgPoint(config) {
            this.index = config.index;
            this.angle = (this.index * 360) / TOTAL_AVG_POINTS;

            this.updateDynamics = function() {
                this.radius = Math.abs(w, h) / 10;
                this.x = cx + this.radius * sin(PI_HALF * this.angle);
                this.y = cy + this.radius * cos(PI_HALF * this.angle);
            }

            this.updateDynamics();

            this.value = Math.random() * 256;
            this.dx = this.x + this.value * sin(PI_HALF * this.angle);
            this.dy = this.y + this.value * cos(PI_HALF * this.angle);
        }

        function createPoints() {
            var i;

            i = -1;
            while(++i < TOTAL_POINTS) {
                points.push(new Point({index: i+1}));
            }

            i = -1;
            while(++i < TOTAL_AVG_POINTS) {
                avg_points.push(new AvgPoint({index: i+1}));
            }

            i = null;
        }

        function resizeHandler() {
            w = 300;
            h = 300;
            cx = w / 2;
            cy = h / 2;

            ctx.canvas.width = w;
            ctx.canvas.height = h;

            points.forEach(function(p) {
                p.updateDynamics();
            });

            avg_points.forEach(function(p) {
                p.updateDynamics();
            });
        }
        // AudioAnalyser = (function () {
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
        //
        //
        //     AudioAnalyser.AudioContext = AudioContext;
        //
        //     AudioAnalyser.enabled = AudioAnalyser.AudioContext != null;
        //
        //     function AudioAnalyser(audio, numBands, smoothing) {
        //         var src;
        //         this.audio = audio != null ? audio : new Audio();
        //         this.numBands = numBands != null ? numBands : 256;
        //         this.smoothing = smoothing != null ? smoothing : 0.3;
        //         if (typeof this.audio === 'string') {
        //             src = this.audio;
        //             this.audio = new Audio();
        //             this.audio.crossOrigin = "anonymous";
        //             this.audio.controls = true;
        //             this.audio.src = src;
        //         }
        //         this.context = new AudioAnalyser.AudioContext();
        //         this.jsNode = this.context.createScriptProcessor(2048, 1, 1);
        //         this.analyser = this.context.createAnalyser();
        //         this.analyser.smoothingTimeConstant = this.smoothing;
        //         this.analyser.fftSize = this.numBands * 2;
        //         this.bands = new Uint8Array(this.analyser.frequencyBinCount);
        //         this.audio.addEventListener('canplay', (function (_this) {
        //             return function () {
        //                 _this.source = _this.context.createMediaElementSource(_this.audio);
        //                 _this.source.connect(_this.analyser);
        //                 _this.analyser.connect(_this.jsNode);
        //                 _this.jsNode.connect(_this.context.destination);
        //                 _this.source.connect(_this.context.destination);
        //                 return _this.jsNode.onaudioprocess = function () {
        //                     _this.analyser.getByteFrequencyData(_this.bands);
        //                     if (!_this.audio.paused) {
        //                         return typeof _this.onUpdate === "function" ? _this.onUpdate(_this.bands) : void 0;
        //                     }
        //                 };
        //             };
        //         })(this));
        //     }
        //
        //     AudioAnalyser.prototype.start = function () {
        //         return this.audio.play();
        //     };
        //
        //     AudioAnalyser.prototype.stop = function () {
        //         return this.audio.pause();
        //     };
        //
        //     return AudioAnalyser;
        //
        // })();
        //
        //
        // function Particle(x, y, radius) {
        //     this.init(x, y, radius);
        // }
        //
        // Particle.prototype = {
        //
        //     init: function (x, y, radius) {
        //
        //         this.alive = true;
        //
        //         this.radius = radius || 100;
        //         this.wander = 0.15;
        //         this.theta = getRandomArbitrary(0, TWO_PI);
        //         this.drag = 0.92;
        //         this.color = '#fff';
        //
        //         this.x = x || 0.0;
        //         this.y = y || 0.0;
        //
        //         this.vx = 0.0;
        //         this.vy = 0.0;
        //     },
        //
        //     move: function () {
        //
        //         this.x += this.vx;
        //         this.y += this.vy;
        //
        //         this.vx *= this.drag;
        //         this.vy *= this.drag;
        //
        //         this.theta += getRandomArbitrary(-0.5, 0.5) * this.wander;
        //         this.vx += sin(this.theta) * 0.1;
        //         this.vy += cos(this.theta) * 0.1;
        //
        //         this.radius *= 0.96;
        //         this.alive = this.radius > 0.5;
        //     },
        //
        //     draw: function (ctx) {
        //
        //         ctx.beginPath();
        //         ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
        //         ctx.fillStyle = this.color;
        //         ctx.fill();
        //     }
        // };
        // var MAX_PARTICLES = 280;
        // var COLOURS = ['#ABFE59','white','#2E8CE6', '#7C10E1', '#F9FF70', '#dedede'];
        //
        // var particles = [];
        // var pool = [];
        //
        // var demo = Sketch.create({
        //     container: document.getElementById('waveform'),
        //     fullscreen: false,
        //     width: 300,
        //     height: 300
        //
        // });
        //
        // function getRandomArbitrary(min, max) {
        //     return Math.random() * (max - min) + min;
        // }
        //
        // demo.setup = function () {
        //
        //     // Set off some initial particles.
        //     var i, x, y;
        //
        //     for (i = 0; i < 20; i++) {
        //         x = ( demo.width * 0.5 ) + getRandomArbitrary(-100, 100);
        //         y = ( demo.height * 0.5 ) + getRandomArbitrary(-100, 100);
        //         demo.spawn(x, y);
        //     }
        // };
        //
        // demo.spawn = function (x, y) {
        //
        //     if (particles.length >= MAX_PARTICLES) {
        //         pool.push(particles.shift());
        //     }
        //
        //     var particle = pool.length ? pool.pop() : new Particle();
        //     particle.init(x, y, getRandomArbitrary(5, 40));
        //
        //     particle.wander = getRandomArbitrary(0.5, 2.0);
        //
        //     particle.color = COLOURS[Math.floor(random() * COLOURS.length)];
        //     particle.drag = getRandomArbitrary(0.9, 0.99);
        //
        //     var theta = getRandomArbitrary(0, TWO_PI);
        //     var force = getRandomArbitrary(2, 8);
        //
        //     particle.vx = sin(theta) * force;
        //     particle.vy = cos(theta) * force;
        //
        //     particles.push(particle);
        // };
        //
        // demo.update = function () {
        //
        //     var i, particle;
        //
        //     for (i = particles.length - 1; i >= 0; i--) {
        //
        //         particle = particles[i];
        //
        //         if (particle.alive) particle.move();
        //         else pool.push(particles.splice(i, 1)[0]);
        //     }
        // };
        //
        // demo.draw = function () {
        //
        //     demo.globalCompositeOperation = 'lighter';
        //
        //     for (var i = particles.length - 1; i >= 0; i--) {
        //         particles[i].draw(demo);
        //     }
        // };
        //
        // demo.mousemove = function () {
        //
        //     var particle, theta, force, touch, max, i, j, n;
        //
        //     for (i = 0, n = demo.touches.length; i < n; i++) {
        //         touch = demo.touches[i];
        //         max = getRandomArbitrary(1, 4);
        //         for (j = 0; j < max; j++) {
        //             demo.spawn(touch.x, touch.y);
        //         }
        //
        //     }
        // };
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
