class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.count = startingNum;
    this.incrementAmt = incrementAmt;
  }
  start() {
    setInterval(this.incrementAndPrint.bind(this), 1000);
  }

  incrementAndPrint() {
    console.log(this.count);
    this.count += this.incrementAmt;
  }
}
