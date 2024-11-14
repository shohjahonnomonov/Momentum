import { time } from "./scripts/time.js";
import { greeting } from "./scripts/greeting.js";
import { greetingInp } from "./scripts/greetingInp.js";
import { weather } from "./scripts/weather.js";
import { sliderBg } from "./scripts/slider.js";
import { motivation } from "./scripts/motivation.js";

motivation();
sliderBg();
weather();
greetingInp();
greeting();
setInterval(time, 1000);