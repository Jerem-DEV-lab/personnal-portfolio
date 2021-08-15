import {rules, schema} from '@ioc:Adonis/Core/Validator'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class ContactValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    last_name: schema.string({escape: true, trim: true}, [rules.minLength(2), rules.required()]),
    first_name: schema.string({escape: true, trim: true}, [rules.minLength(2), rules.required()]),
    email: schema.string({
      escape: true,
      trim: true
    }, [rules.email({sanitize: true}), rules.required()]),
    phone: schema.string({}, [rules.mobile({locales: ['fr-FR']}), rules.required()]),
    message: schema.string({}, [rules.required(), rules.minLength(5), rules.maxLength(1024)])
  })

  public messages = {
    require: "Ce champs est requis !",
  }
}
