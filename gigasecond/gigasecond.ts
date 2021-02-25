// Gigasecond (31.7 years) in milliseconds
const GIGASEC_MS = 1_000_000_000_000;

class Gigasecond {
  private moment;
  constructor(moment: Date) {
    this.moment = moment;
  }
  date(): Date {
    return new Date(this.moment.getTime() + GIGASEC_MS);
  }
}

export default Gigasecond;
