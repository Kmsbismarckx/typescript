class Animal {}

class Pet {}

type Hunter = {
  track(): void;
  stalk(): void;
  pounce(): void;
};

class HuntingBehavior implements Hunter {
  pray: Animal | undefined;
  track(): void {}
  stalk(): void {}
  pounce(): void {}
}

class Cat extends Pet implements Hunter {
  private huntingBehavior: HuntingBehavior = new HuntingBehavior();

  track(): void {
    this.huntingBehavior.track();
  }
  stalk(): void {
    this.huntingBehavior.stalk();
  }
  pounce(): void {
    this.huntingBehavior.pounce();
  }

  meow(): void {}
}
