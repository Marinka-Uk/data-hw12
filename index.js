class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.timer = document.querySelector(selector);
        this.daysSpan = this.timer.querySelector('[data-value="days"]');
        this.hoursSpan = this.timer.querySelector('[data-value="hours"]');
        this.minsSpan = this.timer.querySelector('[data-value="mins"]');
        this.secsSpan = this.timer.querySelector('[data-value="secs"]');

        this.start();
    }

    start() {
        this.updateTimer();

        setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    updateTimer() {
        const currentTime = Date.now();
        const time = this.targetDate - currentTime;

        if (time < 0) {
            this.stop();
            return;
        }

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.daysSpan.textContent = this.pad(days);
        this.hoursSpan.textContent = this.pad(hours);
        this.minsSpan.textContent = this.pad(mins);
        this.secsSpan.textContent = this.pad(secs);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    stop() {
        clearInterval(this.intervalId);
        this.daysSpan.textContent = '00';
        this.hoursSpan.textContent = '00';
        this.minsSpan.textContent = '00';
        this.secsSpan.textContent = '00';
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2025 15:00:00'),
});