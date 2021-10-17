import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Projects extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public link_project: string

  @column()
  public link_image: string

  @column()
  public status: boolean

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
