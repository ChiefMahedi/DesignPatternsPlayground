//Abstract class: WidgetFactory
class WidgetFactory {
  createScrollBar() {
    throw new Error("This must be implemented");
  }
  createWindow() {
    throw new Error("This must be implemented");
  }
}

//Abstract class: Window
class Window {
  window() {
    throw new Error("This must be implemented");
  }
}
//Concrete subclass of Window class
class MotifWindow extends Window {
  window() {
    console.log("Motif Window has been created");
  }
}
//Concrete subclass of Window class
class PMWindow extends Window {
  window() {
    console.log("PM Window has been created");
  }
}
//Abstract class: ScrollBar
class ScrollBar {
  scrollbar() {
    throw new Error("This must be implemented");
  }
}
//Concrete subclass of ScrollBar class
class MotifScrollBar extends ScrollBar {
  scrollBar() {
    console.log("Motif scrollbar has been created");
  }
}
//Concrete subclass of ScrollBar class
class PMScrollBar extends ScrollBar {
  scrollBar() {
    console.log("PM Scrollbar has been created");
  }
}
//

//Concrete subclass of WidgetFactory class
class MotifWidgetFactory extends WidgetFactory {
  createScrollBar() {
    return new MotifScrollBar();
  }
  createWindow() {
    return new MotifWindow();
  }
}
//Concrete subclass of WidgetFactory class
class PMWidgetFactory extends WidgetFactory {
  createScrollBar() {
    return new PMScrollBar();
  }
  createWindow() {
    return new PMWindow();
  }
}

//Client code
function setWidgetStandard(wfactory) {
  const sB = wfactory.createScrollBar();
  sB.scrollBar();
  const wD = wfactory.createWindow();
  wD.window();
}
//We are setting the widget standard to Motif here
const mwf = new MotifWidgetFactory();
setWidgetStandard(mwf);

//If in future we need to change the standard to PM just the parameter needs to be changed
const pmwf = new PMWidgetFactory();
setWidgetStandard(pmwf);
