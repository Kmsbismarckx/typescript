interface Station {
  play(): void;
}

// State
class Radio7 implements Station {
  play() {
    console.log("Radio 7...");
  }
}

class RadioDFM implements Station {
  play() {
    console.log("Radio DFM...");
  }
}

class VestiFM implements Station {
  play() {
    console.log("Vesti FM...");
  }
}

// Another context

class Human {
  private state: Activity | undefined = undefined;
  public setState(s: Activity) {
    this.state = s;
  }

  public doSomething() {
    this.state?.doSomething(this);
  }
}

interface Activity {
  doSomething(context: Human): void;
}

class Work implements Activity {
  public doSomething(context: Human) {
    process.stdout.write("Работаем!!!");
    context.setState(new WeekEnd());
  }
}

class WeekEnd implements Activity {
  private count = 0;

  public doSomething(context: Human) {
    if (this.count < 3) {
      process.stdout.write("Отдыхаем (Zzz)");
      this.count++;
    } else {
      context.setState(new Work());
    }
  }
}

// Context
class Radio {
  station: Station | undefined = undefined;

  setStation(st: Station) {
    this.station = st;
  }

  nextStation() {
    if (this.station instanceof Radio7) {
      this.setStation(new RadioDFM());
    } else if (this.station instanceof RadioDFM) {
      this.setStation(new VestiFM());
    } else if (this.station instanceof VestiFM) {
      this.setStation(new Radio7());
    }
  }

  play() {
    this.station?.play();
  }
}

const human = new Human();
human.setState(new Work());

for (let i = 0; i < 10; i++) {
  human.doSomething();
}
