interface IVisitor {
  visitPanel(panel: Panel): void;
  visitLabel(label: Label): void;
  visitButton(button: Button): void;
}

class Renderer implements IVisitor {
  visitPanel(panel: Panel): void {}
  visitLabel(label: Label): void {}
  visitButton(button: Button): void {}
}

class XmlSerializer implements IVisitor {
  visitPanel(panel: Panel): void {}
  visitLabel(label: Label): void {}
  visitButton(button: Button): void {}
}

interface IUIWidget {
  accept(visitor: IVisitor): void;
}

class Panel implements IUIWidget {
  accept(visitor: IVisitor): void {
    visitor.visitPanel(this);
  }
}
class Label implements IUIWidget {
  accept(visitor: IVisitor): void {
    visitor.visitLabel(this);
  }
}
class Button implements IUIWidget {
  accept(visitor: IVisitor): void {
    visitor.visitButton(this);
  }
}
