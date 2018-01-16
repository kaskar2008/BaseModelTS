import { BaseModel } from './BaseModel'

export default class Container {
  private model: BaseModel
  public data: any = {}
  public name: string
  public fields: any = {}

  constructor (model: BaseModel, name: string, fields: any, source: any = null) {
    this.model = model
    this.name = name
    this.fields = fields

    if (source) {
      this.data = new Proxy(source, {})
    }
  }

  /**
   * Sets a external source for a container
   * @param source Data source
   */
  public setSource (source: any): void {
    this.data = new Proxy(source, {})
    this.model.setProxy(this.name)
  }
}
