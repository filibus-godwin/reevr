
enum Layouts {
  HALF_LEFT,
  HALF_RIGHT,
  CENTER,
}

class Handler {
  static arr = [Layouts.HALF_LEFT, Layouts.CENTER, Layouts.HALF_RIGHT];
  static ratios = [150, 180, 220];
  static CurrentLayout: Layouts = Layouts.HALF_LEFT;
  static CurrentAspectRatio: number = 1;
  static LayoutTracker = 0;
  static setRandomLayout = () => {
    if (this.LayoutTracker == 2) {
      this.CurrentLayout = this.arr[this.LayoutTracker];
      this.LayoutTracker = 0;
    } else {
      this.CurrentLayout = this.arr[this.LayoutTracker];
      this.LayoutTracker += 1;
    }
  };
  static setRandomRatio = () => {
    this.CurrentAspectRatio = this.ratios[Math.floor(Math.random() * 2) + 1];
  };

  static dims = () => {
    if (this.CurrentLayout == Layouts.CENTER) {
      return {
        left: {
          flex: 1,
        },
        right: {
          flex: 1,
        },
      };
    }
    if (this.CurrentLayout == Layouts.HALF_LEFT) {
      return {
        left: {
          flex: 1,
        },
        right: {
          flex: 2,
        },
      };
    }
    return {
      left: {
        flex: 2,
      },
      right: {
        flex: 1,
      },
    };
  };
}

export const LayoutHandler = Handler