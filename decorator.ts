class Widget {}

type IWidgetFactory = {
  makeWidget(): Widget;
};

class WidgetFactory implements IWidgetFactory {
  public makeWidget(): Widget {
    return new Widget();
  }
}

class SingletonDecorator implements IWidgetFactory {
  private factory: IWidgetFactory;
  private instance: Widget | undefined = undefined;

  constructor(factory: IWidgetFactory) {
    this.factory = factory;
  }

  makeWidget(): Widget {
    if (this.instance === undefined) {
      this.instance = this.factory.makeWidget();
    }

    return this.instance;
  }
}

const x = new SingletonDecorator(new WidgetFactory());
