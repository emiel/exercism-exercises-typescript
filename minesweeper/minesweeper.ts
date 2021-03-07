type Cell = " " | "*";

type Coordinate = {
  x: number;
  y: number;
};

class Board {
  protected grid: Cell[][] = [[]];
  protected rows: number | undefined;
  protected cols: number | undefined;

  constructor(input: string[]) {
    this.grid = input.map((row) =>
      row.split("").map((ch) => {
        if (ch === " " || ch === "*") {
          return ch;
        } else {
          throw new Error("Invalid input");
        }
      })
    );
  }

  get rowCount(): number {
    if (this.rows === undefined) {
      this.rows = this.grid.length;
    }
    return this.rows;
  }

  get colCount(): number {
    if (this.cols === undefined) {
      this.cols = this.grid.length > 0 ? this.grid[0].length : 0;
    }
    return this.cols;
  }

  inBounds(coord: Coordinate): boolean {
    return (
      coord.x >= 0 &&
      coord.x < this.rowCount &&
      coord.y >= 0 &&
      coord.y < this.colCount
    );
  }

  getGrid(): Cell[][] {
    return this.grid;
  }

  getCell(coord: Coordinate): Cell {
    if (!this.inBounds(coord)) {
      throw new Error(`Coordinate ${coord} out of bounds`);
    }
    return this.grid[coord.x][coord.y];
  }

  getAdjacentCoords(coord: Coordinate): Coordinate[] {
    const adjacenctOffsets = [];

    for (const i of [-1, 0, 1]) {
      for (const j of [-1, 0, 1]) {
        if (i === 0 && j === 0) {
          continue;
        }
        adjacenctOffsets.push([i, j]);
      }
    }

    const coords: Coordinate[] = [];
    adjacenctOffsets.forEach(([dx, dy]) => {
      const c = { x: coord.x + dx, y: coord.y + dy };
      if (this.inBounds(c)) {
        coords.push(c);
      }
    });

    return coords;
  }

  getAdjacentCount(coord: Coordinate): number {
    const coords = this.getAdjacentCoords(coord);
    return coords.filter((c) => this.getCell(c) === "*").length;
  }
}

export default class Minesweeper {
  annotate(input: string[]): string[] {
    const board = new Board(input);
    return board.getGrid().map((row, x) => {
      return row
        .map((cell, y) => {
          if (cell === " ") {
            const count = board.getAdjacentCount({ x, y });
            return count === 0 ? " " : String(count);
          } else {
            return cell;
          }
        })
        .join("");
    });
  }
}
