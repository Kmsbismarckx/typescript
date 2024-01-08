// Наследование

type VectorGraphicsInterface = {
  drawLine(): void;
  drawSquare(): void;
};

class RasterGraphics {
  public drawRasterLine(): void {
    console.log("Рисуем линию");
  }

  public drawRasterSquare(): void {
    console.log("Рисуем квадрат");
  }
}

class VectorAdapterFromRaster
  extends RasterGraphics
  implements VectorGraphicsInterface
{
  drawLine(): void {
    this.drawRasterLine();
  }
  drawSquare(): void {
    this.drawRasterSquare();
  }
}

class VectorAdapterFromRaster2 implements VectorGraphicsInterface {
  raster: RasterGraphics = new RasterGraphics();

  drawLine(): void {
    this.raster.drawRasterLine();
  }
  drawSquare(): void {
    this.raster.drawRasterSquare();
  }
}

const g1: VectorGraphicsInterface = new VectorAdapterFromRaster();
g1.drawLine();
g1.drawSquare();

const g2: VectorAdapterFromRaster2 = new VectorAdapterFromRaster2();
g2.drawLine();
g2.drawSquare();
