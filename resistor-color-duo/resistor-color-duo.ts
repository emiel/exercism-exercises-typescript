export class ResistorColor {
  static BAND_COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  private colors: readonly string[];

  constructor(colors: readonly string[]) {
    if (colors.length < 2) {
      throw Error("At least two colors need to be present");
    }
    this.colors = colors;
  }

  private _colorCode(color: string): number {
    const index = ResistorColor.BAND_COLORS.indexOf(color);
    if (index === -1) {
      throw Error(`Unsupported color: ${color}`);
    }
    return index;
  }

  value = (): number => {
    return (
      this._colorCode(this.colors[0]) * 10 + this._colorCode(this.colors[1])
    );
  };
}
